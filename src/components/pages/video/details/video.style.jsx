import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    width: '100%',
    borderRadius: '20px',
    margin: '10px',
    position: 'relative',

    '& .download_field': {
        textAlign: 'center',
        width: '100%',
        height: '50px',
        background: '#751B74',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.2rem'
    },

    '& .red_heart': {
        filter: 'invert(33%) sepia(81%) saturate(2399%) hue-rotate(337deg) brightness(106%) contrast(110%)'
    },

    iframe: {
        border: 'none',
        height: '700px',
        borderRadius: '10px'
    },

    '& .r1_iframe_embed': {
        position: 'relative',
        overflow: 'hidden',
        width: '1110px',
        height: 'auto',
        paddingTop: '70vh'
    },

    '& .r1_iframe_embed iframe': {
        position: 'absolute',
        top: '0',
        left: '0',
        border: '0',
        height: '600px',
        borderRadius: '20px',
        margin: '0 auto',
        width: '100%'
    },

    '& .card_details': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: '20px',

        '& .right_field': {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            color: props.theme.palette.colors.text.blackAndWhite,
            p: {
                color: props.theme.palette.colors.text.light,
                fontSize: '0.9rem'
            }
        },

        '& .left_field': {
            display: 'flex',
            gap: '20px',
            alignItems: 'center',

            '& .like': {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',

                img: {
                    cursor: 'pointer',
                    filter: 'invert(55%) sepia(0%) saturate(1107%) hue-rotate(144deg) brightness(90%) contrast(82%)'
                }
            },

            '& .rate': {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: props.theme.palette.colors.text.blackAndWhite
            },

            p: {
                position: 'relative',
                top: '3px',
                fontWeight: 'bold'
            }
        }
    },

    '& .video_image': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',

        '& .video_banner': {
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            objectFit: 'cover'
        },

        '& .float': {
            position: 'absolute',
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',

            '& .icon': {
                margin: '5px',
                cursor: 'pointer'
            }
        }
    },

    '@media(max-width : 1200px)': {
        '& .r1_iframe_embed': {
            width: '100%'
        }
    },

    '@media(min-width : 800px)': {
        '& .r1_iframe_embed': {
            height: '650px'
        }
    },

    '@media(max-width : 800px)': {
        margin: '0',

        '& .video_image': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

        '& .r1_iframe_embed iframe': {
            height: '300px'
        },

        '& .r1_iframe_embed': {
            paddingTop: '40vh'
        },

        iframe: {
            height: '400px'
        }
    },

    '@media(max-width : 500px)': {
        '& .r1_iframe_embed iframe': {
            height: '200px'
        },

        '& .r1_iframe_embed': {
            paddingTop: '220px'
        },

        '& .card_details': {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginTop: '20px',
            flexDirection: 'column-reverse',
            gap: '20px',

            '& .right_field': {
                width: '100%'
            },

            '& .left_field': {
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',

                '& .like': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',

                    img: {
                        filter: 'invert(55%) sepia(0%) saturate(1107%) hue-rotate(144deg) brightness(90%) contrast(82%)'
                    }
                },

                '& .rate': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                },

                p: {
                    position: 'relative',
                    top: '3px',
                    fontWeight: 'bold'
                }
            }
        }
    }
}));
