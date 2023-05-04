import styled from '@emotion/styled';

export const NumberInputField = styled.div(() => ({
    display: 'flex',
    '& .number-input': {
        flex: 1,
        margin: '5px',
        height: '60px',
        backgroundColor: 'rgba(241, 241, 241, 1)',
        borderRadius: '15px',
        padding: '15px 10px',
        color: 'black'
    }
}));
