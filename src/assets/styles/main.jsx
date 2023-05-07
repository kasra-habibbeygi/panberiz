import styled from '@emotion/styled';

export const TagsmainField = styled.div(props => ({
    width: '100%',
    padding: '35px',
    borderRadius: '12px',
    border: `1px solid ${props.theme.mode === 'light' ? '#EFEFEF' : '#554A67'}`,
    backgroundColor: props.theme.palette.colors.background.card
}));
