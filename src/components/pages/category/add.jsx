/* eslint-disable react/prop-types */
import Image from 'next/image';
import { toast } from 'react-hot-toast';

// Assets
import { useState } from 'react';
import { MainField } from './add.style';
import CategoryIcon from '@/assets/icons/sidebar/category.svg';

// Component
import Input from '@/components/form-group/input';
import HeaderField from '@/components/template/header';
import Button from '@/components/form-group/button';

// MUI
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

// APIs
import { CreateCategory } from '@/api-request/category';

const AddCategory = ({ setReaload, reload }) => {
    const formData = new FormData();
    const [loader, setLoader] = useState(false);
    const [inputValues, setInputValued] = useState({
        place: null,
        rank: null,
        title: '',
        description: '',
        file: '',
        is_public: false
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
            file: e.target.files[0]
        });
    };

    const submitHandler = () => {
        setLoader(true);
        Object.keys(inputValues).forEach(item => {
            formData.append(item, inputValues[item]);
        });

        CreateCategory(formData)
            .then(() => {
                setLoader(false);
                Object.keys(inputValues).forEach(item => formData.delete(item, inputValues[item]));
                toast.success('دسته بندی با موفقیت اضافه شد !');
                setReaload(!reload);
            })
            .catch(() => {
                toast.error('لطفا تمام ورودی ها را وارد کنید !');
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
                        <RadioGroup row name='is_public' onChange={inputValueHandler}>
                            <FormControlLabel value='true' control={<Radio />} label='عمومی' />
                            <FormControlLabel value='false' control={<Radio />} label='غیر عمومی' />
                        </RadioGroup>
                    </div>
                </div>
                <div className='flex_field'>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.rank}
                            name='rank'
                            placeholder='رنک دسته بندی را وارد کنید ...'
                            label='رنک'
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.place}
                            name='place'
                            placeholder='جایگاه دسته بندی را وارد کنید ...'
                            label='جایگاه'
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
                            name='description'
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
                <Button color='primary' type='filled' extraClass='submit_button' handler={submitHandler} loader={loader}>
                    افزودن دسته
                </Button>
            </div>
        </MainField>
    );
};

export default AddCategory;
