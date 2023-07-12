import styled from '@emotion/styled';

export const CertificateField = styled.div({
    minWidth: '1200px',
    maxWidth: '1200px',
    position: 'relative',
    // display: 'none',

    img: {
        width: '100%',
        height: 'auto'
    },

    h3: {
        position: 'absolute',
        top: '365px',
        right: '500px',
        fontSize: '2.5rem',
        color: '#343434',
        fontWeight: '400'
    },

    '& .code_field': {
        position: 'absolute',
        top: '482px',
        right: '306px',
        fontSize: '1.1rem'
    },

    '& .rank': {
        position: 'absolute',
        top: '482px',
        right: '545px',
        fontSize: '1.1rem'
    },

    '& .time': {
        position: 'absolute',
        top: '482px',
        right: '740px',
        fontSize: '1.1rem'
    },

    '& .date': {
        position: 'absolute',
        top: '665px',
        right: '706px',
        fontSize: '1.1rem'
    }
});

export const GapField = styled.div({
    display: 'none'
});
