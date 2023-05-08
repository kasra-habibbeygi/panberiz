/* eslint-disable react/prop-types */

//Components
import Button from '@/components/form-group/button';

//Style
import { QuizFormField } from './quiz-form.style';
import AnswerInput from './answer-input';
import Input from '@/components/form-group/input';

//mui
import AddIcon from '@mui/icons-material/Add';

//assets

export const QuizForm = ({ open, setOpen }) => {
    return (
        <QuizFormField scroll='body' maxWidth='80%' disablePortal open={open} onClose={() => setOpen(!open)}>
            <div className='border'>
                <h3>طرح سوال</h3>
            </div>
            <div className='border flex_field'>
                <div className='border w-100'>
                    <Input label='صورت سوال' placeholder='صورت سوال را وارد کنید ...' index={1} />
                </div>
                <div className='w-100'>
                    <AnswerInput label='پاسخ اول' placeholder='پاسخ اول را وارد کنید ...' index={1} />
                </div>
                <div className='w-100 add-answer'>
                    <AddIcon />
                    <p>افزودن پاسخ جدید</p>
                </div>
            </div>
            <div className='buttons'>
                <Button type='outline' color='primary'>
                    لغو
                </Button>
                <Button color='primary'>ثبت سوال</Button>
            </div>
        </QuizFormField>
    );
};
