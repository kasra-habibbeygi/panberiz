/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// Assets
import { TitleField, QuestionsField, AfterExam } from './content.style';
import { useTranslation } from 'next-i18next';

// Assets
import Rafiki from '../../../../assets/images/empty/rafiki.png';

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
import Image from 'next/image';

const QuestionsContent = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const userInfo = useSelector(state => state.UserInfo);
    const [radiosValues, setRadioValues] = useState([]);
    const [mediaDetails, setMediaDetails] = useState([]);
    const [score, setScore] = useState(0);
    const [examStatus, setExamStatus] = useState(false);
    const [days, hours, minutes, seconds, countDown, setNewCountDown] = useTimer(0);
    const totalMiliSec = mediaDetails?.period_of_time * 60 * 1000;
    const progressPercent = ((countDown - totalMiliSec) / totalMiliSec) * 100;

    console.log(mediaDetails);

    useEffect(() => {
        GetMediaDetails(router.query.id, userInfo.lang)
            .then(res => {
                setMediaDetails(res[0]);
                setNewCountDown(res[0].period_of_time * 60 * 1000);
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
        var score = '';

        radiosValues.map(checkbox => {
            mediaDetails.media_quiezes.map(mainData => {
                if (checkbox.question_id === mainData.id) {
                    mainData.quiz_answers.map(answer => {
                        if (parseInt(checkbox.answer_id) === parseInt(answer.id) && answer.is_correct) {
                            score++;
                        }
                    });
                }
            });
        });

        SubmitNewExam({
            answers: JSON.stringify(radiosValues),
            score: JSON.stringify(parseInt((score / mediaDetails?.media_quiezes?.length) * 100))
        }).then(() => {
            setExamStatus(true);
            setScore(parseInt((score / mediaDetails?.media_quiezes?.length) * 100));
        });
    };

    return (
        <>
            <TitleField progressPercent={Math.abs(progressPercent)}>
                <div className='title'>
                    <h3>
                        {t('Quiz')} {mediaDetails?.title}
                    </h3>
                    <p>
                        {mediaDetails?.media_quiezes?.length} {t('Minutes')} - {mediaDetails?.period_of_time} {t('Question')}
                    </p>
                </div>
                {!examStatus && (
                    <div className='progress_field'>
                        <div className='progress'>
                            <span></span>
                        </div>
                        <p>
                            {seconds} : {minutes} : {hours}
                        </p>
                    </div>
                )}
            </TitleField>
            <QuestionsField>
                {!examStatus ? (
                    <>
                        {mediaDetails?.media_quiezes?.map((item, index) => (
                            <div className='question_card' key={`questions_${index}`}>
                                <small>
                                    {t('Question')} {index + 1}
                                </small>
                                <h4>{item.title}</h4>
                                <RadioGroup
                                    name='radio-buttons-group'
                                    className='four_choice'
                                    onChange={e => radioValuehandler(e, item.id)}
                                >
                                    {item.quiz_answers.map(data => (
                                        <FormControlLabel
                                            value={data.id}
                                            control={<Radio />}
                                            label={data.value}
                                            key={`checkbox_${data.id}`}
                                        />
                                    ))}
                                </RadioGroup>
                            </div>
                        ))}

                        <Button color='primary' type='filled' extraClass='submit_btn' handler={sumbitExamhandler}>
                            {t('Test registration')}
                        </Button>
                    </>
                ) : (
                    <AfterExam>
                        <Image src={Rafiki} alt='' />
                        <p>{t('Your test is over.')}</p>
                        <p>
                            {t('Your score')} : {score} {t('from')} ۱۰۰
                        </p>
                    </AfterExam>
                )}
            </QuestionsField>
        </>
    );
};

export default QuestionsContent;
