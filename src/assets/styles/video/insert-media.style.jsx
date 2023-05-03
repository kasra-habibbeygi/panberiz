import styled from '@emotion/styled';

export const InsertMediaField = styled.div(() => ({
    flexDirection: 'column',
    flex: 1,
    '& .contentContainer': {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '25px',
        padding: '30px',
        margin: '30px 0',
        '& .type': {
            alignItems: 'center'
        },
        '& .form': {
            flexDirection: 'column',
            padding: '30px 0',
            '& .flex-1': {
                flex: 1
            },
            '& .flex-2': {
                flex: 2
            },
            '& .input': {
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(241, 241, 241, 1)',
                borderRadius: '15px',
                padding: '15px',
                marginTop: '8px',
                border: '0'
            },
            '& .input-container': {
                flexDirection: 'column',
                margin: '10px'
            },

            '& .select': {
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(241, 241, 241, 1)',
                borderRadius: '15px',
                padding: '10px',
                margin: '10px'
            },
            '& .select2': {
                flex: 2,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(241, 241, 241, 1)',
                borderRadius: '15px',
                padding: '10px',
                margin: '10px'
            },
            '& .section1': {
                flex: 1
            }
        }
    }
}));
