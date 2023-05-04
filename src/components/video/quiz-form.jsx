/* eslint-disable react/prop-types */
import * as Style from './quiz-form.style';
import CustomInput from '../common/input';
import AnswerInput from './answer-input';

export const QuizForm = ({ open, setOpen }) => {
    return (
        <Style.QuizFormField
            onCancel={() => setOpen(!open)}
            closeIcon={() => null}
            className='modal'
            footer={null}
            centered
            open={open}
            width={1000}
        >
            <h1>طرح سوال</h1>
            <div className='form'>
                <div className='section-question'>
                    <h3>صورت سوال</h3>
                    <CustomInput placeholder='صورت سوال را وارد کنید ..' />
                </div>
                <div className='section-answer'>
                    <AnswerInput title='پاسخ اول' index={1} />
                    <AnswerInput title='پاسخ اول' index={1} />
                </div>
                <div className='buttons'>
                    <button className='cancel-button'>لغو</button>
                    <button>ثبت سوال</button>
                </div>
            </div>
        </Style.QuizFormField>
    );
};
