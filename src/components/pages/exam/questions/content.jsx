/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// Assets
import { TitleField, QuestionsField } from './content.style';

// MUI
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

// Hooks
import useTimer from '@/hooks/use-timer';

// Component
import Button from '@/components/form-group/button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// APIs
import { GetMediaDetails } from '@/api-request/media/details';
import { SubmitNewExam } from '@/api-request/exam';

const QuestionsContent = () => {
    const router = useRouter();
    const userInfo = useSelector(state => state.UserInfo);
    const [radiosValues, setRadioValues] = useState([]);
    const [mediaDetails, setMediaDetails] = useState([]);
    const [days, hours, minutes, seconds, countDown, setNewCountDown] = useTimer(0);
    const totalMiliSec = mediaDetails?.period_of_time * 60 * 1000;
    const progressPercent = ((countDown - totalMiliSec) / totalMiliSec) * 100;

    useEffect(() => {
        GetMediaDetails(router.query.id, userInfo.lang)
            .then(res => {
                setMediaDetails(res.results[0]);
                setNewCountDown(res.results[0].period_of_time * 60 * 1000);
            })
            .catch(() => {});
    }, [router.query.id, userInfo.lang]);

    const radioValuehandler = (e, id) => {
        setRadioValues(prev => {
            const idExists = prev.some(item => item.question_id === id);

            if (idExists) {
                const updatedValues = prev.map(item => {
                    if (item.question_id === id) {
                        return {
                            ...item,
                            answer_id: e.target.value
                        };
                    }
                    return item;
                });

                return updatedValues;
            }
            return [
                ...prev,
                {
                    question_id: id,
                    answer_id: e.target.value
                }
            ];
        });
    };

    const sumbitExamhandler = () => {
        SubmitNewExam({ answers: JSON.stringify(radiosValues) });
    };

    return (
        <>
            <TitleField progressPercent={Math.abs(progressPercent)}>
                <div className='title'>
                    <h3>کوییز {mediaDetails?.title}</h3>
                    <p>
                        {mediaDetails?.media_quiezes?.length} سوال - {mediaDetails?.period_of_time} دقیقه
                    </p>
                </div>
                <div className='progress_field'>
                    <div className='progress'>
                        <span></span>
                    </div>
                    <p>
                        {seconds} : {minutes}
                    </p>
                </div>
            </TitleField>
            <QuestionsField>
                {mediaDetails?.media_quiezes?.map((item, index) => (
                    <div className='question_card' key={`questions_${index}`}>
                        <small>سوال {index + 1}</small>
                        <h4>{item.title}</h4>
                        <RadioGroup name='radio-buttons-group' className='four_choice' onChange={e => radioValuehandler(e, item.id)}>
                            {item.quiz_answers.map(data => (
                                <FormControlLabel value={data.id} control={<Radio />} label={data.value} key={`checkbox_${data.id}`} />
                            ))}
                        </RadioGroup>
                    </div>
                ))}

                <Button color='primary' type='filled' extraClass='submit_btn' handler={sumbitExamhandler}>
                    ثبت آزمون
                </Button>
            </QuestionsField>
        </>
    );
};

export default QuestionsContent;
