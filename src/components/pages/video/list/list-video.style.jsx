import styled from '@emotion/styled';

export const ListVideoField = styled.div(() => ({
    display: 'flex',
    marginTop: '50px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    '& .card_field': {
        width: '33.33%',
        padding: '10px'
    }
}));
