import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',

    '& .title': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #E6E6E6',
        paddingBottom: '30px',
        marginBottom: '30px',
        width: '100%',

        h3: {
            fontSize: '1.3rem'
        },

        p: {
            fontWeight: 'bold',
            fontSize: '1.1rem'
        }
    },

    img: {
        width: '400px',
        height: 'auto',
        marginTop: '50px'
    },

    button: {
        marginTop: '50px',
        width: '150px'
    }
});
