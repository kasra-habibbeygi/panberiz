import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    width: '100%',
    height: 'max-content',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '40px',

    img: {
        width: '500px',
        height: 'auto'
    },

    p: {
        fontWeight: 'bold',
        fontSize: '1.1rem',
        color: props.theme.palette.colors.text.blackAndWhite
    }
}));
