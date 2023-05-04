import styled from '@emotion/styled';

export const UploadField = styled.div(() => ({
    '& .upload': {
        flex: 1,
        margin: '5px',
        display: 'flex',
        height: '150px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(241, 241, 241, 1)',
        borderRadius: '15px',
        padding: '15px 10px',
        color: 'black'
    }
}));
