import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    borderTop: '1px solid #F0F0F0',
    marginTop: '20px',
    paddingTop: '20px',

    '& .text': {
        lineHeight: '34px'
    },

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
        flexWrap: 'wrap',

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
    },

    '@media(max-width : 800px)': {
        '& .video_image': {
            width: '100%',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },

    '@media(max-width : 600px)': {
        '& .footer_field': {
            flexDirection: 'column-reverse',
            gap: '20px',

            button: {
                width: '100%',
                marginTop: '20px'
            }
        }
    }
}));
