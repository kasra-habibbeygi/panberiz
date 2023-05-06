import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    h4: {
        fontSize: '1.2rem',
        fontWeight: '500',
        marginBottom: '20px'
    },

    '& .main_field': {
        width: '100%',
        padding: '30px',
        border: `1px solid ${props.theme.palette.colors.border.primary}`,
        borderRadius: '12px'
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
            color: props.theme.palette.colors.primary,
            borderRadius: '12px',
            border: `1px dashed ${props.theme.palette.colors.primary}`
        }
    }
}));
