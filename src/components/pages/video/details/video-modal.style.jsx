import styled from '@emotion/styled';

export const MainField = styled.div({
    '& .MuiPaper-root': {
        background: 'transparent',
        boxShadow: 'none'
    },

    video: {
        width: '100%',
        height: '500px',
        border: 'none'
    },

    button: {
        margin: '20px auto',
        width: '300px'
    },

    '@media(max-width : 700px)': {
        video: {
            height: '200px'
        }
    }
});
