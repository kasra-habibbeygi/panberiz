import Image from 'next/image';
import { AddFormField } from './add-form.style';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import AutoComplete from '@/components/form-group/auto-complete';
import { useState } from 'react';
import gallery from '@/assets/icons/gallery.svg';
import Input from '@/components/form-group/input';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import quizEmpty from '../../../../assets/images/video/quiz-empty.png';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 }
];

function AddForm() {
    const [open, setOpen] = useState(false);
    const [inputValues, setInputValued] = useState({
        category: null,
        position: null,
        rank: null,
        title: '',
        duration: 0,
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
        <AddFormField>
            <h1>افزودن مدیا</h1>
            <div className='form_field'>
                <div className='header'>
                    <div className='title'>
                        <Image src={gallery} alt='gallery' />
                        نوع مدیا :
                    </div>
                    <div className='checkbox_field'>
                        <RadioGroup row>
                            <FormControlLabel value='pdf' control={<Radio size='small' />} label='PDF' />
                            <FormControlLabel value='video' control={<Radio size='small' />} label='ویدئو' />
                        </RadioGroup>
                    </div>
                </div>
                <div className='flex_field'>
                    <div className='w-50'>
                        <AutoComplete
                            placeholder='انتخاب دسته بندی'
                            value={inputValues.category}
                            valueHandler={autoCompleteHandler}
                            options={top100Films}
                            name='category'
                        />
                    </div>
                    <div className='w-50'>
                        <AutoComplete
                            placeholder='جایگاه'
                            value={inputValues.position}
                            valueHandler={autoCompleteHandler}
                            options={top100Films}
                            name='position'
                        />
                    </div>
                    <div className='w-100'>
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
                            placeholder='عنوان مدیا را وارد کنید ...'
                            label='عنوان'
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.duration}
                            name='duration'
                            type='number'
                            placeholder='انتخاب محدوده زمان'
                            label='مدت زمان (دقیقه)'
                        />
                    </div>
                    <div className='w-100'>
                        <Input
                            valueHandler={inputValueHandler}
                            value={inputValues.description}
                            name='description'
                            height='100px'
                            placeholder='توضیحات را وارد کنید ...'
                            label='توضیحات'
                        />
                    </div>
                    <div className='w-50'>
                        <div className='upload-file'>
                            <label htmlFor='chose_file'>برای آپلود کاور مدیا کلیک کنید</label>
                            <input hidden type='file' name='file' id='chose_file' onChange={e => fileValueHandler(e)} />
                        </div>
                    </div>
                    <div className='w-50'>
                        <div className='upload-file'>
                            <label htmlFor='chose_file'>برای آپلود کاور مدیا کلیک کنید</label>
                            <input hidden type='file' name='file' id='chose_file' onChange={e => fileValueHandler(e)} />
                        </div>
                    </div>
                    <div className='w-100'>
                        <div className='quiz-header'>
                            <h3>کوییز</h3>
                            <button onClick={() => setOpen(!open)} className='left'>
                                <h3>طرح سوال جدید</h3>
                                <KeyboardBackspaceIcon size='small' />
                            </button>
                        </div>
                        <div className='quiz-container'>
                            <Image src={quizEmpty} alt='quiz-empty' />
                            <h3>سوالی طرح نشده است</h3>
                        </div>
                    </div>
                </div>
            </div>
        </AddFormField>
    );
}

export default AddForm;
