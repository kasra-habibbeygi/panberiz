import styled from '@emotion/styled';

export const Navbar = styled.nav(() => ({
    display: 'flex',
    height: '70px',
    justifyContent: 'space-between',
    border: '1px solid #d9d9d9 !important',
    '& .left': {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        display: 'flex',
        button: {
            display: 'flex',
            alignItems: 'center',
            padding: '10px 25px',
            backgroundColor: 'transparent',
            border: '1px solid !important',
            borderRadius: 15,
            borderColor: '#751B74',
            color: '#751B74'
        }
    },
    '& .middle': {
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        input: {
            flex: 1,
            padding: 10,
            fontSize: 20,
            border: 0,
            backgroundColor: '#F1F1F1',
            borderRadius: 10
        }
    },
    '& .right': {
        flex: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
}));
