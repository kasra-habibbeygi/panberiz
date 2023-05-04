import styled from '@emotion/styled';

export const Navbar = styled.nav(() => ({
    display: 'flex',
    height: '70px',
    justifyContent: 'space-between',
    border: '1px solid #d9d9d9',
    position: 'fixed',
    top: '0',
    width: '100%',
    background: 'white',
    zIndex: '10',
    padding: '0 30px',

    '& .left': {
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '20px',
        display: 'flex',
        width: '100%',

        '& .button_link': {
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
        display: 'flex',
        alignItems: 'center',
        minWidth: '600px',
        position: 'relative',

        input: {
            width: '100%',
            backgroundColor: '#F1F1F1',
            borderRadius: '8px',
            border: 'none',
            height: '40px',
            padding: '20px',
            paddingRight: '50px'
        },

        '& .search_icon': {
            position: 'absolute',
            right: '10px',
            color: '#b8b8b8',
            width: '30px',
            height: 'auto'
        }
    },

    '& .right': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%',

        img: {
            width: '90px',
            height: 'auto'
        },

        svg: {
            cursor: 'pointer'
        }
    },

    '& .profile_dropdown_field': {
        position: 'relative',

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
            left: '0',
            opacity: '0',
            transition: 'all linear 0.1s',
            pointerEvents: 'none',

            '&.active': {
                opacity: '1',
                pointerEvents: 'initial',
                top: '70px'
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

            a: {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'black',

                img: {
                    height: 'auto',
                    width: '25px'
                }
            }
        }
    }
}));
