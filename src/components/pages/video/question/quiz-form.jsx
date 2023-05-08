/* eslint-disable react/prop-types */

import Input from '@/components/form-group/input';
import { QuizFormField } from './quiz-form.style';

export const QuizForm = ({ open, setOpen }) => {
    return (
        <QuizFormField open={open} onClose={() => setOpen(!open)}>
            <div className='form'>
                <div className='border'>
                    <h3>طرح سوال</h3>
                </div>
                <div className='flex_field'>
                    <div className='border w-100'>
                        <Input label='صورت سوال' />
                    </div>
                    <div className='w-100'>
                        <Input label='صورت سوال' />
                    </div>
                    <div className='w-100'>
                        <Input label='صورت سوال' />
                    </div>
                    <div className='w-100'>
                        <Input label='صورت سوال' />
                    </div>
                </div>
                <div className='buttons'>
                    <button className='cancel-button'>لغو</button>
                    <button>ثبت سوال</button>
                </div>
            </div>
        </QuizFormField>
    );
};
