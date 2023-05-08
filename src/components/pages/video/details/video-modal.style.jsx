import styled from '@emotion/styled';

export const MainField = styled.div({
    '& .MuiPaper-root': {
        background: 'transparent',
        boxShadow: 'none'
    },

    iframe: {
        width: '100%',
        height: '500px',
        border: 'none'
    },

    button: {
        margin: '20px auto',
        width: '300px'
    }
});
