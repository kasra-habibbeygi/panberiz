import styled from '@emotion/styled';
import { Modal } from 'antd';

export const QuizFormField = styled(Modal)(() => ({
    '& .form': {
        padding: '20px 0',
        '& .section-question': {
            padding: '20px 0',
            borderTop: '1px solid rgba(228, 228, 228, 0.9)',
            borderBottom: '1px solid rgba(228, 228, 228, 0.9)'
        },
        '& .section-answer': {
            padding: '20px 0',
            '& .row': {
                alignItems: 'center',
                color: 'rgba(117, 27, 116, 1)'
            }
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
