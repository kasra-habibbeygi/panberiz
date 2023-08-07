import styled from '@emotion/styled';

export const MobileNavbarMainField = styled.nav(props => ({
    display: 'none',
    width: '100%',
    height: '80px',
    background: 'white',
    position: 'fixed',
    bottom: '0',
    right: '0',
    borderTop: '1px solid #EEEEEE',
    zIndex: '200',

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
            width: '64px',
            height: '64px',
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
