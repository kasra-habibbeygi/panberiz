import styled from '@emotion/styled';
import { Modal } from '@mui/material';

export const QuizFormField = styled(Modal)(() => ({
    '& .form': {
        position: 'absolute',
        overflowY: 'scroll',
        borderRadius: '20px',
        backgroundColor: 'white',
        width: '70%',
        height: '85%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
            flexWrap: 'wrap'
        },
        '& .w-100': {
            width: '100%',
            padding: '20px 0'
        },
        '& .buttons': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '70px 0 0',
            '& .cancel-button': {
                border: '1px solid rgba(117, 27, 116, 1)',
                backgroundColor: 'white',
                color: 'rgba(117, 27, 116, 1)'
            },
            button: {
                width: '20%',
                height: '50px',
                margin: '5px',
                borderRadius: '10px',
                backgroundColor: 'rgba(117, 27, 116, 0.5)',
                color: 'white'
            }
        }
    }
}));
