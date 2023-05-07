import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    borderTop: '1px solid #F0F0F0',
    marginTop: '20px',
    paddingTop: '20px',

    p: {
        color: props.theme.palette.colors.text.blackAndWhite
    },

    '& .footer_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    '& .info': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',

        span: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            color: props.theme.palette.colors.text.light,
            fontSize: '0.8rem'
        },

        img: {
            width: '18px',
            height: 'auto'
        }
    }
}));
