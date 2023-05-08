import styled from '@emotion/styled';

export const TabField = styled.div(() => ({
    '& .button-container': {
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .buttons': {
            width: '600px',
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

    '@media(max-width : 650px)': {
        '& .button-container': {
            '& .buttons': {
                width: '100%',

                button: {
                    padding: '13px 0'
                }
            }
        }
    }
}));
