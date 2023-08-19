import styled from '@emotion/styled';

export const MobileNavbarMainField = styled.nav(props => ({
    display: 'none',
    width: '100%',
    height: '60px',
    background: props.theme.mode === 'light' ? 'white' : '#11011E',
    position: 'fixed',
    bottom: '0',
    right: '0',
    borderTop: props.theme.mode === 'light' ? '1px solid #EEEEEE' : '1px solid #2E1F45',
    zIndex: '200',

    img: {
        filter:
            props.theme.mode === 'light'
                ? 'none'
                : 'invert(99%) sepia(1%) saturate(418%) hue-rotate(131deg) brightness(118%) contrast(100%)'
    },

    '@media(max-width : 800px)': {
        display: 'flex',
        alignItems: 'center',

        ol: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            listStyle: 'none',
            width: '100%'
        },

        '& .middle_one': {
            width: '50px',
            height: '50px',
            backgroundColor: props.theme.palette.colors.primary,
            borderRadius: '50px',
            boxShadow: '0px 0px 11px 0px #751B74',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: '-20px',

            svg: {
                color: 'white'
            }
        }
    }
}));
