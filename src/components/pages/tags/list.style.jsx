import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    h4: {
        fontSize: '1.2rem',
        fontWeight: '500',
        marginBottom: '20px',
        color: props.theme.palette.colors.text.blackAndWhite
    },

    '& .main_field': {
        width: '100%',
        padding: '30px',
        border: `1px solid ${props.theme.mode === 'light' ? props.theme.palette.colors.border.primary : '#554A67'}`,
        borderRadius: '12px',
        background: props.theme.mode === 'light' ? 'white' : '#2D2140'
    },

    '& .pill_field': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        flexWrap: 'wrap',

        span: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '7px 15px',
            color: props.theme.mode === 'light' ? props.theme.palette.colors.primary : 'white',
            borderRadius: '12px',
            border: `1px dashed ${props.theme.mode === 'light' ? props.theme.palette.colors.primary : '#90899B'}`,
            background: props.theme.palette.colors.background.card
        }
    }
}));
