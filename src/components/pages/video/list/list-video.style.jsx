import styled from '@emotion/styled';

export const ListVideoField = styled.div(props => ({
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

    '& .delete_modal_field': {
        padding: '40px',
        textAlign: props.theme.direction === 'rtl' ? 'right' : 'left',

        textarea: {
            height: '140px',
            backgroundColor: 'red',
            resize: 'none',
            width: '100%',
            borderRadius: '12px',
            background: '#F1F1F1',
            border: 'none',
            padding: '15px',
            color: '#000000',
            marginTop: '10px'
        },

        '& .button_group': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            button: {
                width: '100%',
                marginTop: '20px'
            }
        },

        h3: {
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '1.5rem'
        }
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
    },

    '& .loading': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0',
        borderRadius: '18px',
        margin: '10px 0'
    }
}));

export const SearchField = styled.div(props => ({
    flex: '3',
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
    },

    '@media(max-width : 650px)': {
        minWidth: 'unset',
        width: '100%',
        padding: '0'
    }
}));

export const FiltersWrapper = styled.div(props => ({
    '& .filters_title': {
        fontSize: '20px',
        fontWeight: 700,
        color: props.theme.mode === 'light' ? 'black' : 'white'
    },

    '& .selects_wrapper': {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '-30px',
        color: props.theme.mode === 'light' ? 'black' : 'white'
    },

    '& .options_wrapper': {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        width: '220px'
    },

    '@media(max-width : 800px)': {
        '& .selects_wrapper': {
            marginTop: '0'
        }
    },

    '@media(max-width : 500px)': {
        '& .options_wrapper': {
            width: '100%'
        }
    }
}));

export const PaginationWrapper = styled.div(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '40px'
}));
