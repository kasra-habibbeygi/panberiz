import styled from '@emotion/styled';

export const MainField = styled.div({
    backgroundColor: 'white',
    width: '30%',
    height: '60%',
    border: '1px solid rgba(157, 157, 158, 0.53)',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    '& .logo': {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '& .field': {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '0 25px',
        input: {
            backgroundColor: 'white',
            border: '1px solid #E3E2E6',
            boxShadow: '-2px 3px 29px -30px rgba(0,0,0,0.75) inset'
        }
    },
    '& .button': {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        button: {
            width: '80%'
        }
    }
});
