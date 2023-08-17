import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    '& .comments_container': {
        width: '800px',
        margin: '40px auto'
    },

    '& .MuiRating-root': {
        direction: props.theme.direction
    },

    '& .rate': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',

        p: {
            color: props.theme.palette.colors.text.light
        },

        svg: {
            ...(props.theme !== 'light' && {
                fill: '#999999'
            })
        }
    },

    '& .send_comment_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '30px',
        width: '100%',

        '& .input_field': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            width: '100%',

            input: {
                paddingLeft: props.theme.direction === 'ltr' ? '50px' : '0'
            },

            svg: {
                position: 'absolute',
                left: '10px',
                cursor: 'pointer',
                transform: 'rotate(180deg)',
                color: '#7E7E7E'
            }
        }
    },

    '& .comments_list': {
        listStyle: 'none',
        marginTop: '40px',
        width: '100%',

        li: {
            borderBottom: '1px solid #F0F0F0',
            paddingBottom: '20px',
            marginBottom: '20px',
            display: 'flex',
            gap: '10px',
            width: '100%',

            '&:last-of-type': {
                borderBottom: 'none',
                paddingBottom: '0',
                marginBottom: '0'
            },

            '& .content': {
                width: '100%',
                color: props.theme.palette.colors.text.blackAndWhite
            },

            '& .info': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '10px',

                '& .rate': {
                    gap: '5px',

                    p: {
                        position: 'relative',
                        top: '3px'
                    }
                },

                '& .title': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',

                    small: {
                        color: props.theme.palette.colors.text.light
                    }
                }
            },

            '& .comment_text': {
                marginTop: '20px'
            }
        }
    },

    '& .comment_empty_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        padding: '30px',
        background: props.theme.mode === 'light' ? '#F1F1F1' : '#2D2140',
        color: props.theme.palette.colors.text.blackAndWhite,
        marginTop: '20px'
    },

    '& .pagination_wrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '20px'
    },

    '& .status_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '10px',

        button: {
            '&.accept': {
                background: '#e0fdd9 !important',
                color: '#009d56 !important',
                padding: '0 19px',
                minHeight: '33px',
                fontSize: '0.9rem',
                borderRadius: '7px'
            },

            '&.reject': {
                background: '#fdd9d9 !important',
                color: '#9d0000 !important',
                padding: '0 19px',
                minHeight: '33px',
                fontSize: '0.9rem',
                borderRadius: '7px'
            }
        },

        p: {
            fontSize: '0.9rem',

            '&.accept': {
                color: '#01b765 !important',
                fontSize: '0.9rem'
            },

            '&.reject': {
                color: '#f13b3b !important',
                fontSize: '0.9rem'
            }
        }
    },

    '@media(max-width : 900px)': {
        width: '100%',

        '& .comments_container': {
            width: '100%'
        }
    }
}));
