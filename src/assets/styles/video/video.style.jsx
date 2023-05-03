import styled from '@emotion/styled';

export const VideoField = styled.div(() => ({
    flexDirection: 'column',
    flex: 1,
    '& .switch-buttons': {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: '50%',
        display: 'flex',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.100)',
        button: {
            flex: 1,
            padding: '25px 0',
            backgroundColor: 'white'
        },
        '& .selected-button': {
            backgroundColor: 'rgba(117, 27, 116, 1)',
            borderRadius: '15px',
            color: 'white'
        }
    },
    '& .empty-container': {
        margin: '50px 0',
        justifyContent: 'center'
    },
    '& .content-container': {
        marginTop: '50px',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}));
