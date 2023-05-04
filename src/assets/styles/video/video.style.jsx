import styled from '@emotion/styled';

export const VideoField = styled.div(() => ({
    '& .switch-buttons': {
        flex: 1,
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .buttons': {
            width: '60%',
            borderRadius: '15px',
            overflow: 'hidden',
            display: 'flex',
            boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.100)',
            button: {
                flex: 1,
                padding: '25px 0',
                backgroundColor: 'white',
                color: 'rgba(166, 166, 167, 1)'
            },
            '& .selected-button': {
                backgroundColor: 'rgba(117, 27, 116, 1)',
                borderRadius: '15px',
                color: 'white'
            }
        }
    },
    '& .empty-container': {
        margin: '50px 0',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    '& .content-container': {
        display: 'flex',
        marginTop: '50px',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}));
