import styled from '@emotion/styled';

export const SelectField = styled.div(() => ({
    display: 'flex',
    '& .select': {
        flex: 1,
        height: '60px',
        margin: '5px',
        backgroundColor: 'rgba(241, 241, 241, 1)',
        borderRadius: '15px',
        padding: '5px 0',
        color: 'black'
    }
}));
