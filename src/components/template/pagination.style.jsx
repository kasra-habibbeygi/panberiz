import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '20px',
    width: '100%',

    li: {
        button: {
            color: props.theme.palette.colors.text.blackAndWhite
        },
        div: {
            color: props.theme.palette.colors.text.blackAndWhite
        }
    }
}));
