import styled from '@emotion/styled';

export const MainField = styled.div({
    button: {
        width: '100%',
        marginTop: '20px'
    },

    input: {
        background: 'white',
        border: '1px solid #4D9AAA',
        color: '#4D9AAA',

        '&::placeholder': {
            color: '#4D9AAA'
        }
    },

    '& .timer': {
        width: '100%',
        textAlign: 'center',
        marginTop: '20px'
    }
});
