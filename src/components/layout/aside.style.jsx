import styled from '@emotion/styled';

export const AsideField = styled.aside(props => ({
    right: props.asideStatus ? '0' : '-300px',
    display: 'flex',
    transition: 'all cubic-bezier(0, 1, 1, 1) 0.8s',
    borderLeft: '1px solid #d9d9d9 !important',
    width: '300px',
    height: 'calc(100vh - 70px)',
    padding: '25px 0',
    flexDirection: 'column',
    position: 'fixed',
    background: 'white',
    zIndex: '10',

    '& .items': {
        ol: {
            listStyle: 'none',
            width: '100%',
            '& .night-mode': {
                justifyContent: 'space-between',
                display: 'flex'
            },
            li: {
                display: 'flex',
                padding: '10px 25px',
                alignItems: 'center',
                p: {
                    marginRight: 10
                }
            }
        }
    },
    hr: {
        width: '70%',
        alignSelf: 'center',
        margin: '15px 0',
        backgroundColor: '#9D9D9E'
    }
}));
