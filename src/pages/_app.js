/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable @next/next/next-script-for-ga */
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';
import { Provider } from 'react-redux';
import Store from '../state-manager/store';

//Config
import { theme } from '../config/theme';

//Assets
import '../assets/styles/global/general.css';
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

export default function App({ Component, pageProps }) {
    const themeStatus = typeof window !== 'undefined' && localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    const darkModeTheme = createTheme(theme(themeStatus));

    useEffect(() => {
        if (!themeStatus) {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    return (
        <Provider store={Store}>
            <ThemeProvider theme={darkModeTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}
