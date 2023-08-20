/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Autocomplete, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// MUI
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';

// Assets
import { EditFormField } from './edit-form.style';
import gallery from '@/assets/icons/gallery.svg';

// Components
import { QuizForm } from '../question/quiz-form';
import AutoComplete from '@/components/form-group/auto-complete';
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

// APIs
import { GetCategoriesList } from '@/api-request/category';
import { GetTagsList } from '@/api-request/tags';
import { EditMedia } from '@/api-request/media/add';
import { GetAllMedia, GetMyMediaList } from '@/api-request/media/list';
import { toast } from 'react-hot-toast';
import { GetMediaDetails } from '@/api-request/media/details';

const LangList = [
    { label: 'english', value: 'en' },
    { label: 'فارسی', value: 'fa' },
    { label: 'عربی', value: 'ar' }
];

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
});

function EditForm() {
    const { t } = useTranslation('common');
    const router = useRouter();
    const formData = new FormData();
    const lang = useSelector(state => state.UserInfo.lang);
    const role = useSelector(state => state.UserInfo.role);
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
        full_description: '',
        summary_description: '',
        ordering_number: '',
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
            quize_and_answer: JSON.stringify(inputValues.quize_and_answer)
        };

        setLoader(true);
        Object.keys(newVal).forEach(item => {
            formData.append(item, newVal[item]);
        });

        EditMedia(router.query.id, formData, role)
            .then(() => {
                toast.success(t('The video has been successfully added!'));
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

    useEffect(() => {
        if (role) {
            GetMediaDetails(router.query.id, lang, role)
                .then(res => {
                    const prerequisites = res.results[0].prerequisites_info.map(item => ({
                        value: item.id,
                        label: item.title
                    }));

                    setInputValued({
                        lang: LangList.filter(item => item.value === res.results[0].lang)[0],
                        title: res.results[0].title,
                        full_description: res.results[0].full_description,
                        summary_description: res.results[0].summary_description,
                        ordering_number: res.results[0].ordering_number,
                        cover: '',
                        the_number_of_tests: res.results[0].the_number_of_tests,
                        the_duration_of_the_test: res.results[0].the_duration_of_the_test,
                        media_type: res.results[0].media_type,
                        period_of_time: res.results[0].period_of_time,
                        prerequisites,
                        category: selectLists?.category.filter(item => item.value === res.results[0].category)[0],
                        tags: selectLists.tags.filter(item => res.results[0].tags_name.includes(item.label))
                    });
                })
                .catch(() => {})
                .finally(() => {});
        }
    }, [router.query.id, lang, role, selectLists?.category]);

    return (
        <EditFormField>
            <div className='form_field'>
                <div className='header'>
                    <div className='title'>
                        <Image src={gallery} alt='gallery' />
                        {t('Media Type')}
                    </div>
                    <div className='checkbox_field'>
                        <RadioGroup row name='media_type' value={inputValues.media_type} onChange={e => inputValueHandler(e)}>
                            <FormControlLabel value='pdf' control={<Radio size='small' disabled />} label='PDF' />
                            <FormControlLabel value='video' control={<Radio size='small' disabled />} label={t('Video')} />
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
                            value={inputValues.period_of_time}
                            name='period_of_time'
                            type='number'
                            placeholder={t('Enter video duration...')}
                            label={t('Video duration (minutes)')}
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-100'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.summary_description}
                            name='summary_description'
                            height='100px'
                            placeholder={t('Enter summary description')}
                            label={t('Summary description')}
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-100'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.full_description}
                            name='full_description'
                            height='100px'
                            placeholder={t('Enter full description')}
                            label={t('Full description')}
                            onKeyDown={addNewMediaHandler}
                        />
                    </div>
                    <div className='w-100'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.ordering_number}
                            type='number'
                            name='ordering_number'
                            height='100px'
                            placeholder={t('Enter order number')}
                            label={t('Order Number')}
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
                                        value={inputValues.prerequisites}
                                        onChange={(_, newValue) => autoCompleteHandler(newValue, 'prerequisites')}
                                        onKeyDown={addNewMediaHandler}
                                    />
                                </CacheProvider>
                            ) : (
                                <Autocomplete
                                    multiple
                                    options={selectLists?.prerequisites}
                                    getOptionLabel={option => option?.label}
                                    value={inputValues.prerequisites}
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
                                        onChange={(_, newValue) => autoCompleteHandler(newValue, 'tags')}
                                        onKeyDown={addNewMediaHandler}
                                        value={inputValues.tags}
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
                                    value={inputValues.tags}
                                />
                            )}
                        </div>
                    </div>
                    <div className='w-100'>
                        <label htmlFor='chose_file_cover' className='upload-file'>
                            {inputValues.cover?.name ?? t('Click to upload media cover')}
                        </label>
                        <input hidden type='file' name='cover' id='chose_file_cover' onChange={e => fileValueHandler(e)} />
                    </div>
                </div>
                <Button type='filled' color='primary' handler={addNewMediaHandler} loader={loader}>
                    {t('Add new video')}
                </Button>
            </div>
            <QuizForm open={open} setOpen={setOpen} setInputValued={setInputValued} inputValues={inputValues} />
        </EditFormField>
    );
}

export default EditForm;
