/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head';
import NProgress from 'nprogress';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from '../state-manager/store';
import { appWithTranslation } from 'next-i18next';
import Router, { useRouter } from 'next/router';
import { langHandler } from '@/state-manager/reducer/user';
import { themeStateHandler } from '@/state-manager/reducer/user';
import 'nprogress/nprogress.css';

//Config
import { theme } from '../config/theme';
import '../assets/styles/global/general.css';

NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false
});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    const themeStatus = useSelector(state => state.UserInfo.theme);
    const lang = useSelector(state => state.UserInfo.lang);
    const darkModeTheme = createTheme(theme(themeStatus, 'rtl'));

    useEffect(() => {
        localStorage.setItem('pmlmLang', locale);
        document.documentElement.lang = localStorage.getItem('pmlmLang');
        dispatch(themeStateHandler(localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'light'));
        dispatch(langHandler(localStorage.getItem('pmlmLang')));
    }, [lang]);

    return (
        <ThemeProvider theme={darkModeTheme}>
            <Head>
                <title>اکادمی پنبه ریز</title>
            </Head>
            <Toaster
                position='bottom-left'
                containerStyle={{
                    zIndex: 9999,
                    textAlign: 'right',
                    direction: lang
                }}
            />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default wrapper.withRedux(appWithTranslation(App));
