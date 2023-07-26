import styled from '@emotion/styled';

export const ListVideoField = styled.div(() => ({
    display: 'flex',
    marginTop: '50px',
    alignItems: 'center',
    flexWrap: 'wrap',

    '& .accept_button': {
        background: 'red'
    },

    '& .card_field': {
        width: '33.33%',
        padding: '10px'
    },

    '@media(max-width : 900px)': {
        '& .card_field': {
            width: '50%'
        }
    },

    '@media(max-width : 600px)': {
        '& .card_field': {
            width: '100%'
        }
    }
}));

export const SearchField = styled.div(props => ({
    flex: 3,
    display: 'flex',
    padding: '0 15px',
    alignItems: 'center',
    minWidth: '600px',
    position: 'relative',
    marginBottom: '30px',

    input: {
        width: '100%',
        backgroundColor: props.theme.mode === 'light' ? '#F1F1F1' : '#2E1F45',
        borderRadius: '8px',
        border: 'none',
        height: '40px',
        padding: '20px',
        paddingRight: '50px',
        color: props.theme.palette.colors.text.blackAndWhite,

        '&::placeholder': {
            color: props.theme.mode === 'light' ? '#8C8C8C' : 'white'
        }
    },

    '& .search_icon': {
        position: 'absolute',
        right: '20px',
        color: props.theme.mode === 'light' ? '#b8b8b8' : 'white',
        width: '30px',
        height: 'auto'
    }
}));
