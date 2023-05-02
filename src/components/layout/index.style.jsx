import styled from '@emotion/styled';

export const LayoutProviderField = styled.div(() => ({
    div: {
        display: 'flex',
        '& .children-field': {
            backgroundColor: '#FCFCFC',
            width: '100%',
            padding: '50px'
        }
    }
}));
