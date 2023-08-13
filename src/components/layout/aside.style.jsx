import styled from '@emotion/styled';

export const AsideField = styled.aside(props => ({
    right: props.asideStatus ? (props.theme.direction === 'rtl' ? '0' : 'unset') : '-300px',
    left: props.asideStatus ? (props.theme.direction === 'ltr' ? '0' : 'unset') : '-300px',
    display: 'flex',
    transition: 'all cubic-bezier(0, 1, 1, 1) 0.8s',
    borderLeft: props.theme.direction === 'rtl' ? (props.theme.mode === 'light' ? '1px solid #d9d9d9' : '1px solid #342342') : 'unset',
    borderRight: props.theme.direction === 'ltr' ? (props.theme.mode === 'light' ? '1px solid #d9d9d9' : '1px solid #342342') : 'unset',
    width: '300px',
    height: 'calc(100vh - 70px)',
    padding: '25px 0',
    flexDirection: 'column',
    position: 'fixed',
    background: props.theme.palette.colors.background.layout,
    zIndex: '700',
    overflow: 'auto',

    '& .items': {
        ol: {
            listStyle: 'none',
            width: '100%',

            '& .night-mode': {
                justifyContent: 'space-between',
                display: 'flex',
                padding: '2px 32px',
                alignItems: 'center',
                color: props.theme.palette.colors.text.blackAndWhite,

                div: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '19px'
                }
            },

            a: {
                display: 'flex',
                padding: '10px 25px',
                alignItems: 'center',
                color: props.theme.palette.colors.text.blackAndWhite,
                gap: '10px',
                borderRight: '6px solid transparent',

                p: {
                    marginRight: '10px'
                }
            }
        }
    },

    '& .collapse_title': {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        gap: '10px'
    },

    '& .active': {
        background: props.theme.mode === 'light' ? '#FAF6FA' : '#28073C',
        borderRight: '6px solid #751B74 !important',

        img: {
            filter:
                props.theme.mode === 'light'
                    ? 'invert(285%) sepia(374%) saturate(23498%) hue-rotate(1383deg) brightness(61%)'
                    : 'invert(21%) sepia(93%) saturate(2352%) hue-rotate(270deg) brightness(85%) contrast(91%)'
        }
    },

    '& .sidebar_icon': {
        width: '30px',
        height: 'auto'
    },

    '& .seprator': {
        height: '1px',
        width: '80%',
        background: props.theme.mode === 'light' ? '#e5e5e5' : '#271436',
        margin: '20px auto'
    },

    '& .collapse_field': {
        display: 'flex',
        padding: '10px 25px',
        color: props.theme.palette.colors.text.blackAndWhite,
        gap: '10px',
        borderRight: '6px solid transparent',
        flexDirection: 'column',
        cursor: 'pointer',

        '& .collapse_menu': {
            maxHeight: `calc(${props.categoriesListLength} * 55px)`,
            overflow: 'hidden',

            p: {
                cursor: 'pointer'
            },

            '& .disabled': {
                opacity: '0.5',
                pointerEvents: 'none',

                span: {
                    color: 'red',
                    fontSize: '0.9rem'
                }
            },

            img: {
                width: '30px'
            },

            '&.open': {
                maxHeight: '0'
            }
        },

        p: {
            marginRight: '10px'
        }
    },

    '& .submenu_active': {
        background: '#751b7424',
        borderRadius: '15px'
    }
}));

export const Layer = styled.div(props => ({
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    background: 'black',
    opacity: '0',
    zIndex: '600',
    display: 'none',
    pointerEvents: 'none',
    transition: 'all cubic-bezier(0, 1, 1, 1) 0.8s',
    cursor: 'pointer',

    '@media (max-width : 1300px)': {
        display: 'block',
        opacity: props.asideStatus ? '0.5' : '0',
        pointerEvents: props.asideStatus ? 'initial' : 'none'
    }
}));
