/* eslint-disable react/prop-types */
/* eslint-disable @next/next/next-script-for-ga */
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';

//Config
import { theme } from '../config/theme';

//Assets
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

export default function App({ Component, pageProps }) {
    const darkModeTheme = createTheme(theme('light'));
    return (
        <ThemeProvider theme={darkModeTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
