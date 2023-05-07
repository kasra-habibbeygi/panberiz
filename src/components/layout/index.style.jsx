import styled from '@emotion/styled';

export const LayoutProviderField = styled.div(props => ({
    h1: {
        fontSize: '1.5rem',
        marginBottom: '50px'
    },
    div: {
        '& .children-field': {
            backgroundColor: '#FCFCFC',
            width: props.asideStatus ? 'calc(100% - 300px)' : '100%',
            padding: '50px',
            margin: '0 auto 0 0',
            transition: 'all cubic-bezier(0, 1, 1, 1) 0.8s',
            minHeight: 'calc(100vh - 70px)'
        }
    },

    '& .main_field': {
        paddingTop: '70px'
    }
}));
