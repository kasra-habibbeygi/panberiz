import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    h3: {
        fontSize: '1.5rem',
        marginBottom: '50px'
    },

    '& .table_field': {
        width: '100%',
        overflow: 'auto'
    },

    '& .card_parent_field': {
        width: '100%',
        overflow: 'auto'
    },

    '& .cards_field': {
        minWidth: '800px',
        width: '100%'
    },

    '& .item': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 14px 0 rgb(0 0 0 / 7%)',
        height: '76px',
        padding: '0 30px',
        borderRadius: '10px',
        marginBottom: '25px',
        backgroundColor: props.theme.palette.colors.background.card,
        p: {
            width: '100%',
            textAlign: 'right',
            display: 'flex',
            alignItems: 'center',
            color: props.theme.palette.colors.text.blackAndWhite,
            '&:last-child': {
                justifyContent: 'flex-end'
            }
        }
    },

    '& .header_field': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        color: '#9D9D9E',
        marginBottom: '20px',

        span: {
            width: '100%',
            textAlign: 'right',

            '&:last-child': {
                textAlign: 'left'
            }
        }
    }
}));
