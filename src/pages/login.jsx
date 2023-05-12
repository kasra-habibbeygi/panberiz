/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { loginStatushandler, roleHandler } from '@/state-manager/reducer/user';
import { useDispatch } from 'react-redux';

// Assets
import { NationalCodeField, VerifyCodeField } from '@/assets/styles/login';

// Component
import Button from '@/components/form-group/button';
import LoginLayout from '@/components/pages/login/layout';
import Input from '@/components/form-group/input';

// Hooks
import useTimer from '@/hooks/use-timer';

// APIs
import { GetVerifyCode, GetToken } from '@/api-request/auth';

const Login = () => {
    const dispatch = useDispatch();
    const [days, hours, minutes, seconds, countDown, setNewCountDown] = useTimer(200000);
    const [loginState, setLoginState] = useState(0);
    const router = useRouter();
    const [inputValues, setInputValued] = useState({
        codemeli: '',
        code: ''
    });

    const getCodeHandler = () => {
        GetVerifyCode(inputValues.codemeli)
            .then(() => {
                setLoginState(1);
                toast.success('کد با موفقیت ارسال شد !');
            })
            .catch(() => {
                toast.error('کد ملی وارد شده صحیح نمیباشد !');
            });
    };

    const getTokenhandler = () => {
        GetToken(inputValues)
            .then(res => {
                localStorage.setItem(
                    'pmlmToken',
                    JSON.stringify({
                        access: res.access,
                        refresh: res.refresh,
                        role: res.user_role,
                        accessTokenExpireAt: Date.now() + 1200000
                    })
                );
                dispatch(loginStatushandler(true));
                dispatch(roleHandler(res.user_role));
                router.push('/dashboard');
            })
            .catch(() => {
                toast.error('کد وارد شده اشتباه است !');
            });
    };

    const inputValueHandler = e => {
        setInputValued({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('pmlmToken') !== null) {
            router.push('/dashboard');
        }
    }, []);

    return (
        <LoginLayout title={loginState === 0 ? 'ورود' : 'کد تایید را وارد کنید'}>
            {loginState === 0 ? (
                <NationalCodeField>
                    <Input
                        valueHandler={inputValueHandler}
                        value={inputValues.codemeli}
                        name='codemeli'
                        placeholder='کدملی خود را وارد کنید'
                        label='کد ملی'
                    />
                    <Button type='filled' color='primary' handler={getCodeHandler}>
                        ورود
                    </Button>
                </NationalCodeField>
            ) : (
                <VerifyCodeField>
                    <Input
                        valueHandler={inputValueHandler}
                        value={inputValues.code}
                        name='code'
                        placeholder='کد تایید را وارد کنید'
                        label='کد تایید'
                    />
                    <p className='timer'>
                        {minutes !== 0 && seconds !== 0 ? (
                            <>
                                {seconds} : {minutes} مانده تا ارسال مجدد
                            </>
                        ) : (
                            <p onClick={getCodeHandler} className='get_code'>
                                دریافت مجدد کد تایید
                            </p>
                        )}
                    </p>
                    <Button type='filled' color='primary' handler={getTokenhandler}>
                        تایید
                    </Button>
                </VerifyCodeField>
            )}
        </LoginLayout>
    );
};

export default Login;
