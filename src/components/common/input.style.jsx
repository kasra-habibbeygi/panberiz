import styled from '@emotion/styled';

export const InputField = styled.div(() => ({
    display: 'flex',
    '& .input': {
        flex: 1,
        width: '100%',
        height: '60px',
        margin: '5px',
        backgroundColor: 'rgba(241, 241, 241, 1)',
        borderRadius: '15px',
        padding: '15px 10px',
        color: 'black'
    }
}));
