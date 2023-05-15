/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { loginStatushandler, roleHandler } from '@/state-manager/reducer/user';
import { useDispatch } from 'react-redux';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// Assets
import { NationalCodeField, VerifyCodeField } from '@/assets/styles/login';

// Component
import Button from '@/components/form-group/button';
import LoginLayout from '@/components/pages/login/layout';
import Input from '@/components/form-group/input';

// Hooks
import useTimer from '@/hooks/use-timer';

// APIs
import { GetVerifyCode, GetToken, LoginWithQuery } from '@/api-request/auth';

const Login = () => {
    const { t } = useTranslation('common');
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
                toast.success(t('The code has been sent successfully'));
            })
            .catch(() => {
                toast.error(t('The entered national code is not correct!'));
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
                toast.error(t('The entered code is wrong!'));
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

        if (router.query.token) {
            LoginWithQuery({ token: router.query.token })
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
                    toast.error(t('The entered code is wrong!'));
                });
        }
    }, []);

    return (
        <LoginLayout title={loginState === 0 ? t('login') : t('enter verify code')}>
            {loginState === 0 ? (
                <NationalCodeField>
                    <Input
                        valueHandler={inputValueHandler}
                        value={inputValues.codemeli}
                        name='codemeli'
                        placeholder={t('enter national code')}
                        label={t('natinal code')}
                    />
                    <Button type='filled' color='primary' handler={getCodeHandler}>
                        {t('login')}
                    </Button>
                </NationalCodeField>
            ) : (
                <VerifyCodeField>
                    <Input
                        valueHandler={inputValueHandler}
                        value={inputValues.code}
                        name='code'
                        placeholder={t('enter verify code')}
                        label={t('verify code')}
                    />
                    <p className='timer'>
                        {minutes !== 0 && seconds !== 0 ? (
                            <>
                                {seconds} : {minutes} {t('Remaining until resend')}
                            </>
                        ) : (
                            <p onClick={getCodeHandler} className='get_code'>
                                {t('Get the verify code again')}
                            </p>
                        )}
                    </p>
                    <Button type='filled' color='primary' handler={getTokenhandler}>
                        {t('verify')}
                    </Button>
                </VerifyCodeField>
            )}
        </LoginLayout>
    );
};

export default Login;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
