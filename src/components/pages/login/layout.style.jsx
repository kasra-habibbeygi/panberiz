import styled from '@emotion/styled';

export const MainField = styled.div({
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    '& .copy_right': {
        position: 'absolute',
        display: 'block',
        bottom: '20px',
        color: '#565656'
    },

    '& .content': {
        border: '1px solid #CBCBCC',
        borderRadius: '12px',
        width: '408px',
        height: 'max-content',
        padding: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    '& .main_logo': {
        width: '130px',
        height: 'auto',
        marginBottom: '30px'
    },

    '& .children_field': {
        width: '100%',

        h3: {
            fontSize: '1.3rem',
            color: '#170128',
            marginBottom: '20px'
        }
    }
});
