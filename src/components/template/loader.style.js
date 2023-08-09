import styled from '@emotion/styled';

export const MainField = styled.header({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '500px',

    img: {
        filter: 'invert(13%) sepia(54%) saturate(4284%) hue-rotate(288deg) brightness(63%) contrast(66%)',
        animationName: 'loaderAnimation',
        animationDuration: '3s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        width: '250px',
        height: 'auto'
    }
});
