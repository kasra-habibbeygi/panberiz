import styled from '@emotion/styled';

export const MainField = styled.div(() => ({
    marginTop: '40px',

    h3: {
        marginBottom: '20px'
    },

    '& .main_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingTop: '0'
    },

    '& .card_field': {
        width: '33.33%',
        padding: '10px'
    }
}));
