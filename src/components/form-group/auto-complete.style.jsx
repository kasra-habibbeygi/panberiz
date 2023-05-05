import styled from '@emotion/styled';

export const MainField = styled.div({
    '& .MuiInputBase-root': {
        background: '#F1F1F1',
        padding: '0 !important',
        paddingRight: '10px !important',
        paddingLeft: '39px',
        borderRadius: '12px'
    },

    '& .MuiAutocomplete-endAdornment': {
        left: '10px',
        right: 'unset !important'
    },

    fieldset: {
        border: 'none'
    },

    input: {
        fontSize: '0.9rem',
        height: '25px',

        '&::placeholder': {
            color: 'black',
            fontWeight: 'bold'
        }
    },

    '& .MuiPaper-root': {
        borderRadius: '10px',

        li: {
            fontSize: '0.9rem'
        }
    }
});
