import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    marginBottom: '30px',
    paddingBottom: '30px',
    borderBottom: `1px dashed ${props.theme.palette.colors.border.secondary}`,

    button: {
        margin: '30px auto 0 0 '
    }
}));
