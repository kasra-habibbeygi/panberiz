/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

//Components
import Button from '@/components/form-group/button';

//Assets
import { QuizFormField } from './quiz-form.style';

//mui
import AddIcon from '@mui/icons-material/Add';

// Component
import Input from '@/components/form-group/input';
import AnswerInput from './answer-input';

export const QuizForm = ({ open, setOpen, setInputValued, inputValues }) => {
    const { t } = useTranslation('common');
    const [question, setQuestion] = useState({
        title: '',
        answers: [
            {
                value: '',
                is_correct: true
            }
        ]
    });

    const titleValueHandler = e => {
        setQuestion({
            ...question,
            title: e.target.value
        });
    };

    const handleAddNewInput = () => {
        setQuestion({
            ...question,
            answers: [
                ...question.answers,
                {
                    value: '',
                    is_correct: false
                }
            ]
        });
    };

    const handleSubmitNewQuestion = () => {
        setOpen(false);
        setInputValued({
            ...inputValues,
            quize_and_answer: [...inputValues.quize_and_answer, question]
        });
        setQuestion({
            title: '',
            answers: [
                {
                    value: '',
                    is_correct: true
                }
            ]
        });
    };

    return (
        <QuizFormField scroll='body' maxWidth='80%' disablePortal open={open} onClose={() => setOpen(false)}>
            <div className='border'>
                <h3>{t('Add new question')}</h3>
            </div>
            <div className='border flex_field'>
                <div className='border w-100'>
                    <Input
                        label={t('Please provide the question')}
                        placeholder={t('Enter the question statement...')}
                        value={question.title}
                        valueHandler={e => titleValueHandler(e)}
                    />
                </div>
                {question.answers.map((item, index) => (
                    <div className='w-100' key={`question_input_${index}`}>
                        <AnswerInput
                            label={`${t('Answer')} ${index + 1}`}
                            placeholder={t('Enter the answer')}
                            index={index + 1}
                            setQuestion={setQuestion}
                            question={question}
                            item={item}
                        />
                    </div>
                ))}
                <div className='add-answer' onClick={handleAddNewInput}>
                    <AddIcon />
                    <p>{t('Add new answer')}</p>
                </div>
            </div>
            <div className='buttons'>
                <Button type='outline' color='primary' handler={() => setOpen(false)}>
                    {t('Cancel')}
                </Button>
                <Button color='primary' handler={handleSubmitNewQuestion}>
                    {t('Submit question')}
                </Button>
            </div>
        </QuizFormField>
    );
};
