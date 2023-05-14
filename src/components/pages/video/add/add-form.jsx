/* eslint-disable react/prop-types */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Autocomplete, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useTranslation } from 'next-i18next';

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

const LangList = [
    { label: 'english', value: 'en' },
    { label: 'فارسی', value: 'pr' },
    { label: 'عربی', value: 'ar' }
];

function AddForm() {
    const { t } = useTranslation('common');
    const formData = new FormData();
    const [open, setOpen] = useState(false);
    const [loader, setLoader] = useState(false);

    const [selectLists, setSelectLists] = useState({
        category: [],
        tags: [],
        prerequisites: []
    });

    const [inputValues, setInputValued] = useState({
        lang: '',
        title: '',
        description: '',
        cover: '',
        file: '',
        media_type: '',
        category: '',
        period_of_time: '',
        tags: [],
        prerequisites: [1, 2],
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
            tags: inputValues.tags.map(item => item.value),
            lang: inputValues.lang.value
        };

        setLoader(true);
        Object.keys(newVal).forEach(item => {
            formData.append(item, newVal[item]);
        });

        AddNewmedia(formData)
            .then(() => {})
            .catch(() => {})
            .finally(() => {
                setLoader(false);
            });
    };

    useEffect(() => {
        GetCategoriesList()
            .then(res => {
                selectListProvider(res.results, 'title', 'category');
            })
            .catch(() => {});

        GetTagsList()
            .then(res => {
                selectListProvider(res.results, 'title', 'tags');
            })
            .catch(() => {});
    }, []);

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
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.the_number_of_tests}
                            name='the_number_of_tests'
                            placeholder={t('Enter number of questions...')}
                            label={t('Number of questions')}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.the_duration_of_the_test}
                            name='the_duration_of_the_test'
                            placeholder={t('Enter test answering time...')}
                            label={t('Test answering time')}
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
                        />
                    </div>
                    <div className='w-50'>
                        <AutoComplete
                            placeholder={t('Prerequisites')}
                            value={inputValues.prerequisites}
                            valueHandler={autoCompleteHandler}
                            options={LangList}
                            name='prerequisites'
                        />
                    </div>
                    <div className='w-50'>
                        <AutoComplete
                            placeholder={t('lang')}
                            value={inputValues.lang}
                            name='lang'
                            valueHandler={autoCompleteHandler}
                            options={LangList}
                        />
                    </div>
                    <div className='w-50'>
                        <AutoComplete
                            placeholder={t('Select a category')}
                            value={inputValues?.category}
                            valueHandler={autoCompleteHandler}
                            options={selectLists?.category}
                            name='category'
                        />
                    </div>
                    <div className='w-50'>
                        <div className='multi_select'>
                            <Autocomplete
                                multiple
                                options={selectLists?.tags}
                                getOptionLabel={option => option?.label}
                                renderInput={params => <TextField {...params} placeholder={t('tags')} />}
                                onChange={(e, newValue) => autoCompleteHandler(newValue, 'tags')}
                            />
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
                            {inputValues.file?.name ?? t('Click to upload media cover')}
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
                        {!inputValues.quize_and_answer.length && (
                            <div className='quiz-container'>
                                <QuestionsField>{questionListProvider}</QuestionsField>
                                <Image src={QuestionEmptyIcon} alt='quiz-empty' />
                                <h3>{t('No question has been asked!')}</h3>
                            </div>
                        )}
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
