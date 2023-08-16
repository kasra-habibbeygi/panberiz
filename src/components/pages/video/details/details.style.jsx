import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    borderTop: props.theme.mode === 'light' ? '1px solid #dfdfdf' : '1px solid #464646',
    marginTop: '20px',
    paddingTop: '20px',

    '& .text': {
        lineHeight: '34px',
        display: 'flex',
        gap: '10px',

        span: {
            width: '10px',
            height: '10px',
            background: '#e3e3e3',
            borderRadius: '20px',
            position: 'relative',
            top: '10px'
        }
    },

    p: {
        color: props.theme.palette.colors.text.blackAndWhite
    },

    '& .footer_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px'
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
