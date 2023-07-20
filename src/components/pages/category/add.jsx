/* eslint-disable react/prop-types */
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'next-i18next';

// Assets
import { useState } from 'react';
import { MainField } from './add.style';
import CategoryIcon from '@/assets/icons/sidebar/category.svg';

// Component
import Input from '@/components/form-group/input';
import HeaderField from '@/components/template/header';
import Button from '@/components/form-group/button';
import AutoComplete from '@/components/form-group/auto-complete';

// MUI
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

// APIs
import { CreateCategory } from '@/api-request/category';

const langList = [
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'فارسی',
        value: 'fa'
    },
    {
        label: 'العربية',
        value: 'ar'
    }
];

const AddCategory = ({ setReaload, reload }) => {
    const { t } = useTranslation('common');
    const formData = new FormData();
    const [loader, setLoader] = useState(false);
    const [inputValues, setInputValued] = useState({
        place: null,
        rank: null,
        title: '',
        description: '',
        image: '',
        is_public: false,
        lang: ''
    });

    const inputValueHandler = e => {
        setInputValued({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const fileValueHandler = e => {
        setInputValued({
            ...inputValues,
            image: e.target.files[0]
        });
    };

    const selectValueHandler = (value, name) => {
        setInputValued({
            ...inputValues,
            [name]: value.value
        });
    };

    const submitHandler = () => {
        setLoader(true);
        Object.keys(inputValues).forEach(item => {
            formData.append(item, inputValues[item]);
        });

        CreateCategory(formData)
            .then(() => {
                Object.keys(inputValues).forEach(item => formData.delete(item, inputValues[item]));
                toast.success(t('Category added successfully!'));
                setReaload(!reload);
                setInputValued({
                    place: null,
                    rank: null,
                    title: '',
                    description: '',
                    image: '',
                    is_public: false,
                    lang: ''
                });
            })
            .catch(() => {
                toast.error(t('Please enter all entries!'));
            })
            .finally(() => {
                setLoader(false);
            });
    };

    return (
        <MainField>
            <HeaderField title={t('Category')} />
            <div className='form_field'>
                <div className='header'>
                    <div className='title'>
                        <Image src={CategoryIcon} alt='' />
                        {t('Category type')}
                    </div>
                    <div className='checkbox_field'>
                        <RadioGroup row name='is_public' onChange={inputValueHandler}>
                            <FormControlLabel value='true' control={<Radio />} label={t('Public')} />
                            <FormControlLabel value='false' control={<Radio />} label={t('Not public')} />
                        </RadioGroup>
                    </div>
                </div>
                <div className='flex_field'>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.rank}
                            name='rank'
                            placeholder={t('Enter category rank')}
                            label={t('Rank')}
                            type='number'
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.place}
                            name='place'
                            placeholder={t('Enter the category position')}
                            label={t('position')}
                            type='number'
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.title}
                            name='title'
                            placeholder={t('Enter category title')}
                            label={t('Title')}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.description}
                            name='description'
                            placeholder={t('Enter category description')}
                            label={t('Description')}
                        />
                    </div>
                    <div className='w-50'>
                        <div className='lang_select'>
                            <AutoComplete
                                placeholder={t('lang')}
                                value={inputValues.lang}
                                valueHandler={selectValueHandler}
                                options={langList}
                                name='lang'
                            />
                        </div>
                    </div>
                </div>
                <div className='upload_field'>
                    <div className='right_field'>
                        <h3>{t('Chose image')}</h3>
                        <small>{t('Select the image you want.')}</small>
                    </div>
                    <div className='left_field'>
                        <p>{inputValues?.image?.name ? inputValues?.image?.name : t('no image selected')}</p>
                        <label htmlFor='chose_file'>{t('Chose image')}</label>
                        <input type='file' name='file' id='chose_file' hidden onChange={e => fileValueHandler(e)} />
                    </div>
                </div>
                <Button color='primary' type='filled' extraClass='submit_button' handler={submitHandler} loader={loader}>
                    {t('Add category')}
                </Button>
            </div>
        </MainField>
    );
};

export default AddCategory;
