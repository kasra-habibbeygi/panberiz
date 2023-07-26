import styled from '@emotion/styled';

export const NationalCodeField = styled.div({
    button: {
        width: '100%',
        marginTop: '20px'
    },

    input: {
        boxShadow: 'inset 0px 8px 7px -3px rgba(0, 0, 0, 0.04)',
        background: 'white',
        border: '1px solid #E3E2E6'
    }
});

export const VerifyCodeField = styled.div({
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
    },

    '& .get_code': {
        cursor: 'pointer'
    }
});
