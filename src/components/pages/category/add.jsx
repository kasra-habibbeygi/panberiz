import Image from 'next/image';

// Assets
import { useState } from 'react';
import { MainField } from './add.style';
import CategoryIcon from '../../../assets/icons/sidebar/category.svg';

// Component
import AutoComplete from '@/components/form-group/auto-complete';
import Input from '@/components/form-group/input';
import HeaderField from '@/components/template/header';

// MUI
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 }
];

const AddCategory = () => {
    const [inputValues, setInputValued] = useState({
        category: null,
        position: null,
        rank: null,
        title: '',
        description: '',
        file: ''
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
            file: e.target.files[0]
        });
    };

    return (
        <MainField>
            <HeaderField title='دسته بندی' />
            <div className='form_field'>
                <div className='header'>
                    <div className='title'>
                        <Image src={CategoryIcon} alt='' />
                        نوع دسته بندی :
                    </div>
                    <div className='checkbox_field'>
                        <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
                            <FormControlLabel value='general' control={<Radio />} label='عمومی' />
                        </RadioGroup>
                    </div>
                </div>
                <div className='flex_field'>
                    <div className='w-33'>
                        <AutoComplete
                            placeholder='انتخاب دسته بندی'
                            value={inputValues.category}
                            valueHandler={autoCompleteHandler}
                            options={top100Films}
                            name='category'
                        />
                    </div>
                    <div className='w-33'>
                        <AutoComplete
                            placeholder='جایگاه'
                            value={inputValues.position}
                            valueHandler={autoCompleteHandler}
                            options={top100Films}
                            name='position'
                        />
                    </div>
                    <div className='w-33'>
                        <AutoComplete
                            placeholder='رنک'
                            value={inputValues.rank}
                            valueHandler={autoCompleteHandler}
                            options={top100Films}
                            name='rank'
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.title}
                            name='title'
                            placeholder='عنوان دسته بندی را وارد کنید ...'
                            label='عنوان'
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.description}
                            name='title'
                            placeholder='توضیحات دسته بندی را وارد کنید ...'
                            label='توضیحات'
                        />
                    </div>
                </div>
                <div className='upload_field'>
                    <div className='right_field'>
                        <h3>آپلود فایل</h3>
                        <small>فایل مورد نظر خود را انتخاب کنید.</small>
                    </div>
                    <div className='left_field'>
                        <p>{inputValues?.file?.name ? inputValues?.file?.name : 'هیچ فایلی انتخاب نشده است'}</p>
                        <label htmlFor='chose_file'>انتخاب فایل</label>
                        <input type='file' name='file' id='chose_file' hidden onChange={e => fileValueHandler(e)} />
                    </div>
                </div>
            </div>
        </MainField>
    );
};

export default AddCategory;
