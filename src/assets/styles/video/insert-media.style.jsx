import styled from '@emotion/styled';

export const InsertMediaField = styled.div(() => ({
    flex: 1,
    '& .contentContainer': {
        backgroundColor: 'white',
        borderRadius: '25px',
        padding: '30px',
        margin: '30px 0',
        '& .type': {
            display: 'flex',
            alignItems: 'center'
        },
        '& .section': {
            padding: '20px 0',
            borderBottom: 'dotted 0.5px',
            borderColor: 'rgba(228, 228, 228, 0.59)',
            h1: {
                margin: '5px'
            },
            '& .quiz-header': {
                display: 'flex',
                padding: '20px',
                alignItems: 'center',
                justifyContent: 'space-between',
                button: {
                    backgroundColor: 'transparent'
                },
                '& .left': {
                    display: 'flex',
                    color: 'rgba(117, 27, 116, 1)',
                    alignItems: 'center',
                    h3: {
                        margin: '0 15px'
                    }
                }
            },
            '& .quiz-container': {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                height: '350px',
                borderRadius: '15px',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                border: '1px solid rgba(239, 239, 239, 1)'
            }
        }
    }
}));
