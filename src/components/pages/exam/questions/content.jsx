/* eslint-disable no-unused-vars */
// Assets
import { TitleField, QuestionsField } from './content.style';

// MUI
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

// Hooks
import useTimer from '@/hooks/use-timer';

// Component
import Button from '@/components/form-group/button';

const QuestionsContent = () => {
    const [days, hours, minutes, seconds, countDown] = useTimer(300000);

    const progressPercent = ((countDown - 300000) / 300000) * 100;
    return (
        <>
            <TitleField progressPercent={Math.abs(parseInt(progressPercent))}>
                <div className='title'>
                    <h3>کوییز ویدیو لورم ایپسوم</h3>
                    <p>12 سوال - 25 دقیقه</p>
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
                <div className='question_card'>
                    <small>سوال 1</small>
                    <h4>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </h4>
                    <RadioGroup name='radio-buttons-group' className='four_choice'>
                        <FormControlLabel
                            value='1'
                            control={<Radio />}
                            label='لورم اییپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                        <FormControlLabel
                            value='2'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                        <FormControlLabel
                            value='3'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده  طراحان گرافیک است'
                        />
                        <FormControlLabel
                            value='4'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                    </RadioGroup>
                </div>
                <div className='question_card'>
                    <small>سوال 1</small>
                    <h4>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </h4>
                    <RadioGroup name='radio-buttons-group' className='four_choice'>
                        <FormControlLabel
                            value='1'
                            control={<Radio />}
                            label='لورم اییپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                        <FormControlLabel
                            value='2'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                        <FormControlLabel
                            value='3'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده  طراحان گرافیک است'
                        />
                        <FormControlLabel
                            value='4'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                    </RadioGroup>
                </div>
                <div className='question_card'>
                    <small>سوال 1</small>
                    <h4>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </h4>
                    <RadioGroup name='radio-buttons-group' className='four_choice'>
                        <FormControlLabel
                            value='1'
                            control={<Radio />}
                            label='لورم اییپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                        <FormControlLabel
                            value='2'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                        <FormControlLabel
                            value='3'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده  طراحان گرافیک است'
                        />
                        <FormControlLabel
                            value='4'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                    </RadioGroup>
                </div>
                <div className='question_card'>
                    <small>سوال 1</small>
                    <h4>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </h4>
                    <RadioGroup name='radio-buttons-group' className='four_choice'>
                        <FormControlLabel
                            value='1'
                            control={<Radio />}
                            label='لورم اییپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                        <FormControlLabel
                            value='2'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                        <FormControlLabel
                            value='3'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده  طراحان گرافیک است'
                        />
                        <FormControlLabel
                            value='4'
                            control={<Radio />}
                            label='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده'
                        />
                    </RadioGroup>
                </div>
                <Button color='primary' type='filled' extraClass='submit_btn'>
                    ثبت آزمون
                </Button>
            </QuestionsField>
        </>
    );
};

export default QuestionsContent;
