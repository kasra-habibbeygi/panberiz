import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    '& .MuiInputBase-root': {
        background: props.theme.palette.colors.input.primary,
        padding: '0 10px !important',
        // paddingLeft: '39px',
        borderRadius: '12px'
    },

    fieldset: {
        border: 'none'
    },

    input: {
        fontSize: '0.9rem',
        height: '25px',
        color: props.theme.palette.colors.text.blackAndWhite,

        '&::placeholder': {
            color: props.theme.palette.colors.text.blackAndWhite,
            fontWeight: 'bold'
        }
    },

    svg: {
        color: `${props.theme.palette.colors.text.blackAndWhite} !important`
    },

    '& .MuiPaper-root': {
        borderRadius: '10px',

        li: {
            fontSize: '0.9rem'
        }
    }
}));
