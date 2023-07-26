import styled from '@emotion/styled';

export const MainField = styled.header(props => ({
    h3: {
        fontSize: '1.5rem',
        marginBottom: '50px',
        color: props.theme.palette.colors.text.blackAndWhite
    },

    '@media(max-width : 700px)': {
        h3: {
            fontSize: '1.2rem',
            marginBottom: '20px'
        }
    }
}));
