import styled from '@emotion/styled';
import { Dialog } from '@mui/material';

export const QuizFormField = styled(Dialog)(props => ({
    '& .MuiDialog-paper': {
        width: '70%',
        textAlign: 'right',
        padding: '30px',

        h3: {
            paddingBottom: '15px'
        },

        '& .border': {
            borderBottom: '1px solid rgba(228, 228, 228, 0.9)'
        },

        '& .flex_field': {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',

            '& .add-answer': {
                justifyContent: 'flex-end',
                display: 'flex',
                color: props.theme.palette.colors.primary,
                cursor: 'pointer',
                margin: '30px auto 30px 0',

                p: {
                    fontWeight: 'bold',
                    fontFamily: 'Vazirmatn'
                }
            }
        },

        '& .w-100': {
            width: '100%',
            padding: '20px 0'
        },

        '& .buttons': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '30px 0 0',

            '& .cancel-button': {
                border: '1px solid rgba(117, 27, 116, 1)',
                backgroundColor: 'white',
                color: 'rgba(117, 27, 116, 1)'
            },

            button: {
                width: '20%'
            }
        }
    },

    '@media(max-width : 600px)': {
        '& .buttons': {
            button: {
                width: '20%',
                flex: 1
            }
        }
    }
}));
