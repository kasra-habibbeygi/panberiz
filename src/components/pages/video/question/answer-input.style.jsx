import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',

    label: {
        fontWeight: 'bold',
        color: props.theme.palette.colors.text.blackAndWhite,
        fontSize: '1rem'
    },

    '& .row-content': {
        alignItems: 'center',
        gap: '15px',
        display: 'flex',

        h3: {
            paddingBottom: '0px !important'
        },

        '& .icon': {
            position: 'absolute',
            left: props.theme.direction === 'rtl' ? '40px' : 'unset',
            right: props.theme.direction === 'ltr' ? '40px' : 'unset',
            alignItems: 'center',
            display: 'flex',
            gap: '5px',
            cursor: 'pointer',

            '& .tick': {
                width: ' 35px',
                height: '35px'
            }
        }
    },

    '@media(max-width : 600px)': {
        '& .row-content': {
            position: 'relative',
            gap: '8px',

            img: {
                width: '15px',
                height: '15px'
            },

            '& .icon': {
                left: '0px',
                top: '-45px',
                img: {
                    width: '25px',
                    height: 'auto'
                }
            }
        }
    }
}));
