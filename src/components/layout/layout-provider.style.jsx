import styled from '@emotion/styled';

export const LayoutProviderField = styled.div(props => ({
    h1: {
        fontSize: '1.5rem'
    },

    div: {
        '& .children-field': {
            backgroundColor: props.theme.mode === 'light' ? '#FCFCFC' : '#11011E',
            width: props.asideStatus ? 'calc(100% - 300px)' : '100%',
            padding: '50px',
            margin: props.theme.direction === 'rtl' ? '0 auto 0 0' : '0 0  0 auto',
            transition: 'all cubic-bezier(0, 1, 1, 1) 0.8s',
            minHeight: 'calc(100vh - 70px)'
        }
    },

    '& .main_field': {
        paddingTop: '70px'
    },

    '@media (max-width : 1300px)': {
        div: {
            '& .children-field': {
                backgroundColor: props.theme.mode === 'light' ? '#FCFCFC' : '#11011E',
                width: '100%',
                padding: '30px',
                margin: '0'
            }
        }
    },

    '@media (max-width : 800px)': {
        '& .main_field': {
            paddingBottom: '80px'
        }
    },

    '@media (max-width : 400px)': {
        div: {
            '& .children-field': {
                padding: '30px 10px'
            }
        }
    }
}));
