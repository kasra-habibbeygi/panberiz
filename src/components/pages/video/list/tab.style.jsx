import styled from '@emotion/styled';

export const TabField = styled.div(props => ({
    '& .button-container': {
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .buttons': {
            width: '600px',
            borderRadius: '15px',
            backgroundColor: props.theme.mode === 'light' ? 'white' : '#3B2D51',
            overflow: 'hidden',
            display: 'flex',
            boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.100)',

            button: {
                flex: 1,
                padding: '25px 0',
                backgroundColor: props.theme.mode === 'light' ? 'white' : '#3B2D51',
                color: 'rgba(166, 166, 167, 1)'
            },

            '& .selected-button': {
                backgroundColor: '#8C2DB9',
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
