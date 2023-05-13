import styled from '@emotion/styled';

export const ListVideoField = styled.div(() => ({
    display: 'flex',
    marginTop: '50px',
    alignItems: 'center',
    flexWrap: 'wrap',

    '& .card_field': {
        width: '33.33%',
        padding: '10px'
    },

    '@media(max-width : 900px)': {
        '& .card_field': {
            width: '50%'
        }
    },

    '@media(max-width : 600px)': {
        '& .card_field': {
            width: '100%'
        }
    }
}));
