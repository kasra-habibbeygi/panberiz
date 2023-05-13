/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable @next/next/next-script-for-ga */
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import 'nprogress/nprogress.css';
import { useSelector } from 'react-redux';
import { wrapper } from '../state-manager/store';
import { appWithTranslation } from 'next-i18next';

//Config
import { theme } from '../config/theme';

//Assets
import '../assets/styles/global/general.css';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

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
    const { locale } = useRouter();
    const themeStatus = useSelector(state => state.UserInfo.theme);
    const directionStatus = useSelector(state => state.UserInfo.dir);
    const darkModeTheme = createTheme(theme(themeStatus, directionStatus));

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('pmlmLang') === null) {
                localStorage.setItem('pmlmLang', locale);
            }
        }
        document.dir = directionStatus;
    }, [directionStatus]);

    return (
        <ThemeProvider theme={darkModeTheme}>
            <Toaster
                position='bottom-left'
                containerStyle={{
                    zIndex: 9999,
                    textAlign: 'right',
                    direction: directionStatus
                }}
            />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default wrapper.withRedux(appWithTranslation(App));
