import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',

    label: {
        fontWeight: 'bold',
        Color: '#170128',
        fontSize: '1rem'
    },

    input: {
        width: '100%',
        borderRadius: '12px',
        background: '#F1F1F1',
        border: 'none',
        height: '43px',
        padding: '15px',
        color: '#262626',

        '&::placeholder': {
            color: '#8C8C8C'
        }
    }
});
