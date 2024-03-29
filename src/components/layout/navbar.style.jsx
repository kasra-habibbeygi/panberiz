import styled from '@emotion/styled';

export const Navbar = styled.nav(props => ({
    display: 'flex',
    height: '70px',
    justifyContent: 'space-between',
    borderBottom: props.theme.mode === 'light' ? '1px solid #d9d9d9' : '1px solid #342342',
    position: 'fixed',
    top: '0',
    width: '100%',
    background: props.theme.palette.colors.background.layout,
    zIndex: '650',
    padding: '0 30px',

    '& .left': {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '20px',
        display: 'flex',
        width: '100%',

        '& .button_link': {
            textTransform: 'capitalize',
            a: {
                color: props.theme.mode === 'light' ? '#751B74' : 'white'
            }
        }
    },

    '& .lang_select': {
        width: '100px',

        '& .MuiAutocomplete-clearIndicator': {
            display: 'none'
        }
    },

    '& .middle': {
        flex: 3,
        display: 'flex',
        padding: '0 15px',
        alignItems: 'center',
        minWidth: '600px',
        position: 'relative',

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
    },

    '& .right': {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%',

        img: {
            width: '90px',
            height: 'auto'
        },

        svg: {
            cursor: 'pointer',
            color: props.theme.palette.colors.text.blackAndWhite
        }
    },

    '& .profile_dropdown_field': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',

        '& >img': {
            cursor: 'pointer'
        },

        '& .dropdown_field': {
            padding: '15px',
            borderRadius: '12px',
            width: '250px',
            background: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            position: 'absolute',
            top: '60px',
            left: props.theme.direction === 'rtl' ? '0' : 'unset',
            right: props.theme.direction === 'ltr' ? '0' : 'unset',
            opacity: '0',
            transition: 'all linear 0.1s',
            pointerEvents: 'none',

            '&.active': {
                opacity: '1',
                pointerEvents: 'initial',
                top: '70px'
            },

            '& .notifs_list': {
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            },

            '& .notifs_item': {
                borderBottom: '1px solid #e1e1e1',
                paddingBottom: '10px',

                '& .message': {
                    fontSize: '14px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
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
                }
            },

            '& .notifs_showAll': {
                ...(props.theme.direction === 'rtl' && {
                    marginRight: 'auto'
                }),
                ...(props.theme.direction !== 'rtl' && {
                    marginLeft: 'auto'
                }),

                a: {
                    backgroundColor: '#8C2DB9',
                    color: 'white',
                    fontSize: '12px',
                    padding: '3px 10px',
                    borderRadius: '10px'
                }
            }
        },

        '& .header': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderBottom: '1px solid #e1e1e1',
            paddingBottom: '15px',
            marginBottom: '15px',

            '& .content': {
                h5: {
                    fontWeight: 'bold',
                    fontSize: '1rem'
                },

                small: {
                    color: '#9D9D9E',
                    textTransform: 'capitalize'
                },

                p: {
                    fontSize: '0.9rem'
                }
            }
        },

        ol: {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',

            '& a,div': {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'black',
                cursor: 'pointer',

                img: {
                    height: 'auto',
                    width: '25px'
                }
            }
        },

        '& .notification': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            cursor: 'pointer',
            backgroundColor: props.theme.mode === 'light' ? '#f1f1f1' : '#2E1F45',
            ...(props.theme.direction === 'rtl' && {
                marginRight: '10px'
            }),
            ...(props.theme.direction !== 'rtl' && {
                marginLeft: '10px'
            })
        }
    },

    '& .favorit_link': {
        display: 'none'
    },

    '& .show': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    '& .mobile_search_field': {
        display: 'none'
    },

    '& .hearth_icon': {
        filter:
            props.theme.mode === 'light' ? '' : 'invert(21%) sepia(93%) saturate(2352%) hue-rotate(270deg) brightness(85%) contrast(91%)'
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
    },

    '@media(max-width : 1500px)': {
        '& .middle': {
            minWidth: '200px'
        }
    },

    '@media(max-width : 1200px)': {
        '& .right': {
            width: 'max-content',
            marginLeft: '20px'
        }
    },

    '@media(max-width : 800px)': {
        '& .favorit_link': {
            display: 'none'
        },
        '& .button_link': {
            display: 'none'
        },

        '& .middle': {
            display: 'none'
        },

        '& .mobile_search_field': {
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',

            svg: {
                fontSize: '2.2rem'
            }
        }
    },

    '@media(max-width : 500px)': {
        '& .lang_select': {
            display: 'none'
        }
    }
}));
