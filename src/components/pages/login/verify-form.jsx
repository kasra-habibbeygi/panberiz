/* eslint-disable no-unused-vars */
// Assets
import { useState } from 'react';
import { MainField } from './verify-form.style';

// Component
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

// Hooks
import useTimer from '@/hooks/use-timer';

const VerifyForm = () => {
    const [inputValues, setInputValued] = useState('');
    const [days, hours, minutes, seconds, countDown, setNewCountDown] = useTimer(200000);

    const inputValueHandler = e => {
        setInputValued(e.target.value);
    };

    console.log(minutes, seconds);

    return (
        <MainField>
            <Input valueHandler={inputValueHandler} value={inputValues} placeholder='کد تایید را وارد کنید' label='کد تایید' />
            <p className='timer'>
                {minutes !== 0 && seconds !== 0 ? (
                    <>
                        {seconds} : {minutes} مانده تا ارسال مجدد
                    </>
                ) : (
                    'دریافت مجدد کد تایید'
                )}
            </p>
            <Button type='filled' color='primary'>
                تایید
            </Button>
        </MainField>
    );
};

export default VerifyForm;
