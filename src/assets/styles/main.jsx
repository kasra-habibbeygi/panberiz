import styled from '@emotion/styled';

export const TagsmainField = styled.div(props => ({
    width: '100%',
    padding: '35px',
    borderRadius: '12px',
    border: `1px solid ${props.theme.mode === 'light' ? '#EFEFEF' : '#554A67'}`,
    backgroundColor: props.theme.palette.colors.background.card,
    '@media(max-width : 650px)': {
        padding: '15px'
    }
}));

export const AuthMainField = styled.div(() => ({
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    '@media(max-width: 600px)': {
        '& .login': {
            width: '90%',
            height: '90%',
            border: '0px'
        }
    },
    '@media(max-width: 800px)': {
        '& .login': {
            width: '90%',
            height: '70%',
            border: '0px'
        }
    }
}));
