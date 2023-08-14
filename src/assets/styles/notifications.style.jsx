import styled from '@emotion/styled';

export const NotificationsWrapper = styled.div(props => ({
    '& .title': {
        fontSize: '25px',
        fontWeight: '800',
        borderBottom: '1px solid black',
        width: 'fit-content',
        marginBottom: '70px',
        color: props.theme.mode === 'light' ? 'black' : 'white',
        borderColor: props.theme.mode === 'light' ? 'black' : 'white'
    },

    '& .item': {
        maxWidth: '500px',
        margin: '0 auto',
        borderBottom: props.theme.mode === 'light' ? '1px solid #e1e1e1' : '1px solid #464646',
        paddingBottom: '10px',
        marginTop: '20px',
        color: props.theme.mode === 'light' ? 'black' : 'white',

        '& .message': {
            fontSize: '14px',

            '&.header': {
                fontWeight: 'bold',
                fontSize: '1rem',
                marginBottom: '10px'
            }
        },

        '& .notifs_button': {
            display: 'block',
            fontSize: '11px',
            padding: '1px 10px',
            borderRadius: '10px',
            marginTop: '10px',

            ...(props.theme.direction === 'rtl' && {
                marginRight: 'auto'
            }),
            ...(props.theme.direction !== 'rtl' && {
                marginLeft: 'auto'
            })
        },

        '& .read': {
            fontSize: '11px',
            padding: '1px 10px',
            marginTop: '10px',
            width: 'fit-content',
            opacity: '0.7',

            ...(props.theme.direction === 'rtl' && {
                marginRight: 'auto'
            }),
            ...(props.theme.direction !== 'rtl' && {
                marginLeft: 'auto'
            })
        }
    },

    '& .pagination_wrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '40px'
    }
}));
