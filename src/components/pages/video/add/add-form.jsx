/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Autocomplete, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

// MUI
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Assets
import { AddFormField, IndexField } from './add-form.style';
import { QuestionsField } from '../../exam/questions/content.style';
import gallery from '@/assets/icons/gallery.svg';
import QuestionEmptyIcon from '@/assets/images/video/quiz-empty.png';

// Components
import AutoComplete from '@/components/form-group/auto-complete';
import { QuizForm } from '../question/quiz-form';
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

// APIs
import { GetCategoriesList } from '@/api-request/category';
import { GetTagsList } from '@/api-request/tags';
import { AddNewmedia } from '@/api-request/media/add';
import { GetAllMedia, GetMyMediaList } from '@/api-request/media/list';
import { toast } from 'react-hot-toast';

const LangList = [
    { label: 'english', value: 'en' },
    { label: 'فارسی', value: 'pr' },
    { label: 'عربی', value: 'ar' }
];

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
});

function AddForm() {
    const { t } = useTranslation('common');
    const formData = new FormData();
    const [open, setOpen] = useState(false);
    const [loader, setLoader] = useState(false);
    const lang = useSelector(state => state.UserInfo.lang);
    const role = useSelector(state => state.UserInfo.role);

    const [selectLists, setSelectLists] = useState({
        category: [],
        tags: [],
        prerequisites: []
    });

    const [inputValues, setInputValued] = useState({
        lang: '',
        title: '',
        description: '',
        short_description: '',
        cover: '',
        file: '',
        media_type: '',
        category: '',
        period_of_time: '',
        tags: [],
        prerequisites: [],
        quize_and_answer: []
    });

    const autoCompleteHandler = (e, name) => {
        setInputValued({
            ...inputValues,
            [name]: e
        });
    };

    const inputValueHandler = e => {
        setInputValued({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const fileValueHandler = e => {
        setInputValued({
            ...inputValues,
            [e.target.name]: e.target.files[0]
        });
    };

    const selectListProvider = (data, nameKey, name) => {
        let list = [];

        data.forEach(item =>
            list.push({
                value: item.id,
                label: item[nameKey]
            })
        );

        setSelectLists(prev => ({
            ...prev,
            [name]: list
        }));
    };

    const addNewMediaHandler = () => {
        let newVal = {
            ...inputValues,
            category: inputValues.category.value,
            tags: JSON.stringify(inputValues.tags.map(item => item.value)),
            lang: inputValues.lang.value,
            quize_and_answer: JSON.stringify(inputValues.quize_and_answer),
            prerequisites: JSON.stringify(inputValues.prerequisites.map(item => item.value))
        };

        setLoader(true);
        Object.keys(newVal).forEach(item => {
            formData.append(item, newVal[item]);
        });

        AddNewmedia(formData)
            .then(() => {
                toast.success('ویدیو با موفقیت اضافه شد !');
                setInputValued({
                    lang: '',
                    title: '',
                    description: '',
                    short_description: '',
                    cover: '',
                    file: '',
                    media_type: '',
                    category: '',
                    period_of_time: '',
                    tags: [],
                    prerequisites: [],
                    quize_and_answer: []
                });
            })
            .catch(() => {
                toast.error(t('Please enter all entries!'));
            })
            .finally(() => {
                setLoader(false);
            });
    };

    useEffect(() => {
        GetCategoriesList(lang)
            .then(res => {
                selectListProvider(res.results, 'title', 'category');
            })
            .catch(() => {});

        GetTagsList(lang)
            .then(res => {
                selectListProvider(res.results, 'title', 'tags');
            })
            .catch(() => {});

        if (role === 'SuperAdminAcademy') {
            GetAllMedia(lang)
                .then(res => {
                    selectListProvider(res.results, 'title', 'prerequisites');
                })
                .catch(() => {});
        }

        if (role === 'AgentAcademy') {
            GetMyMediaList(lang)
                .then(res => {
                    selectListProvider(res.results, 'title', 'prerequisites');
                })
                .catch(() => {});
        }
    }, [lang, role]);

    const questionListProvider = inputValues.quize_and_answer.map((item, index) => (
        <div className='question_card' key={`question_lists_${index}`}>
            <small>سوال {index + 1}</small>
            <h4>{item.title}</h4>
            <RadioGroup className='four_choice'>
                {item.answers.map((data, count) => (
                    <FormControlLabel
                        control={
                            <IndexField currect={data.is_correct}>
                                <p>{count + 1}</p>
                            </IndexField>
                        }
                        label={data.value}
                        key={`question_answer_${count}`}
                    />
                ))}
            </RadioGroup>
        </div>
    ));

    return (
        <AddFormField>
            <div className='form_field'>
                <div className='header'>
                    <div className='title'>
                        <Image src={gallery} alt='gallery' />
                        {t('Media Type')}
                    </div>
                    <div className='checkbox_field'>
                        <RadioGroup row name='media_type' onChange={e => inputValueHandler(e)}>
                            <FormControlLabel value='pdf' control={<Radio size='small' />} label='PDF' />
                            <FormControlLabel value='video' control={<Radio size='small' />} label={t('Video')} />
                        </RadioGroup>
                    </div>
                </div>
                <div className='flex_field'>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.title}
                            name='title'
                            placeholder={t('Enter media title...')}
                            label={t('Title')}
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.the_number_of_tests}
                            name='the_number_of_tests'
                            placeholder={t('Enter number of questions...')}
                            label={t('Number of questions')}
                            type='number'
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.the_duration_of_the_test}
                            name='the_duration_of_the_test'
                            placeholder={t('Enter test answering time...')}
                            label={t('Test answering time')}
                            type='number'
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.duration}
                            name='period_of_time'
                            type='number'
                            placeholder={
                                inputValues.media_type === 'video' ? t('Enter video duration...') : t('Enter number of PDF pages...')
                            }
                            label={inputValues.media_type === 'video' ? t('Video duration (minutes)') : t('Number of pages')}
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-100'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.short_description}
                            name='short_description'
                            height='100px'
                            placeholder={t('Enter a short description')}
                            label={t('Short Description')}
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-100'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.description}
                            name='description'
                            height='100px'
                            placeholder={t('Enter description...')}
                            label={t('Description')}
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-50'>
                        <div className='multi_select'>
                            {lang !== 'en' ? (
                                <CacheProvider value={cacheRtl}>
                                    <Autocomplete
                                        multiple
                                        options={selectLists?.prerequisites}
                                        getOptionLabel={option => option?.label}
                                        renderInput={params => <TextField {...params} placeholder={t('Prerequisites')} />}
                                        onChange={(e, newValue) => autoCompleteHandler(newValue, 'prerequisites')}
                                        onKeyDown={addNewMediaHandler}
                                    />
                                </CacheProvider>
                            ) : (
                                <Autocomplete
                                    multiple
                                    options={selectLists?.prerequisites}
                                    getOptionLabel={option => option?.label}
                                    renderInput={params => <TextField {...params} placeholder={t('Prerequisites')} />}
                                    onChange={(e, newValue) => autoCompleteHandler(newValue, 'prerequisites')}
                                    onKeyDown={addNewMediaHandler}
                                />
                            )}
                        </div>
                    </div>
                    <div className='w-50'>
                        <AutoComplete
                            placeholder={t('lang')}
                            value={inputValues.lang}
                            name='lang'
                            valueHandler={autoCompleteHandler}
                            options={LangList}
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-50'>
                        <AutoComplete
                            placeholder={t('Select a category')}
                            value={inputValues?.category}
                            valueHandler={autoCompleteHandler}
                            options={selectLists?.category}
                            name='category'
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-50'>
                        <div className='multi_select'>
                            {lang !== 'en' ? (
                                <CacheProvider value={cacheRtl}>
                                    <Autocomplete
                                        multiple
                                        options={selectLists?.tags}
                                        getOptionLabel={option => option?.label}
                                        renderInput={params => <TextField {...params} placeholder={t('tags')} />}
                                        onChange={(e, newValue) => autoCompleteHandler(newValue, 'tags')}
                                        onKeyDown={addNewMediaHandler}
                                    />
                                </CacheProvider>
                            ) : (
                                <Autocomplete
                                    multiple
                                    options={selectLists?.tags}
                                    getOptionLabel={option => option?.label}
                                    renderInput={params => <TextField {...params} placeholder={t('tags')} />}
                                    onChange={(e, newValue) => autoCompleteHandler(newValue, 'tags')}
                                    onKeyDown={addNewMediaHandler}
                                />
                            )}
                        </div>
                    </div>
                    <div className='w-50'>
                        <label htmlFor='chose_file_cover' className='upload-file'>
                            {inputValues.cover?.name ?? t('Click to upload media cover')}
                        </label>
                        <input hidden type='file' name='cover' id='chose_file_cover' onChange={e => fileValueHandler(e)} />
                    </div>
                    <div className='w-50'>
                        <label htmlFor='chose_file' className='upload-file'>
                            {inputValues.file?.name ?? t('Click to upload media or file')}
                        </label>
                        <input hidden type='file' name='file' id='chose_file' onChange={e => fileValueHandler(e)} />
                    </div>
                    <div className='w-100'>
                        <div className='quiz-header'>
                            <h3>{t('Quiz')}</h3>
                            <Button handler={() => setOpen(true)} extraClass='add_question_btn'>
                                <p>{t('Add new question')}</p>
                                <KeyboardBackspaceIcon size='small' />
                            </Button>
                        </div>
                        <div className='quiz-container'>
                            {inputValues.quize_and_answer.length > 0 ? (
                                <QuestionsField>{questionListProvider}</QuestionsField>
                            ) : (
                                <>
                                    <Image src={QuestionEmptyIcon} alt='quiz-empty' />
                                    <h3>{t('No question has been asked!')}</h3>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <Button type='filled' color='primary' handler={addNewMediaHandler} loader={loader}>
                    {t('Add new video')}
                </Button>
            </div>
            <QuizForm open={open} setOpen={setOpen} setInputValued={setInputValued} inputValues={inputValues} />
        </AddFormField>
    );
}

export default AddForm;
