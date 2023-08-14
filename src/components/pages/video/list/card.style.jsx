import styled from '@emotion/styled';

export const CardField = styled.div(props => ({
    width: '100%',
    borderRadius: '20px',
    position: 'relative',
    cursor: props.pointer ? 'pointer' : 'initial',

    '& .media_status_pill': {
        position: 'absolute',
        top: '10px',
        left: '10px',
        background: props.status === 'pending' ? '#ffdeb5' : props.status === 'failed' ? '#ffc7c1' : '#c1ffd4',
        color: props.status === 'pending' ? '#ff7800' : props.status === 'failed' ? 'red' : '#11ad00',
        borderRadius: '50px',
        padding: '1px 10px',
        fontSize: '0.9rem'
    },

    '& .card_details': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: '10px',
        position: 'relative',
        zIndex: '20',

        '& .right_field': {
            color: props.theme.palette.colors.text.blackAndWhite,
            p: {
                color: props.theme.palette.colors.text.light
            }
        },

        '& .left_field': {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            gap: '10px',

            div: {
                display: 'flex',
                gap: '5px',
                alignItems: 'center'
            },

            p: {
                position: 'relative',
                top: '3px',
                fontWeight: 'bold'
            },

            '& .deletemedia': {
                color: '#c2c2c2',
                cursor: 'pointer'
            }
        }
    },

    small: {
        color: props.theme.palette.colors.text.light,
        fontSize: '0.9rem'
    },

    '& .accept_button': {
        padding: '5px 10px',
        marginTop: '10px',
        borderRadius: '5px'
    },

    '& .video_image': {
        width: '100%',
        height: '18vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& .video_banner': {
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            objectFit: 'fill'
        },

        '& .play': {
            alignSelf: 'center',
            top: '32%',
            left: '43%'
        },

        '& .float': {
            position: 'absolute',
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 'inherit',

            '& .icon': {
                margin: '5px',
                cursor: 'pointer'
            },

            '& .deletemedia': {
                position: 'absolute',
                top: '10px',
                right: '10px',
                filter: 'invert(99%) sepia(2%) saturate(138%) hue-rotate(212deg) brightness(114%) contrast(89%)',
                cursor: 'pointer'
            }
        }
    },

    '@media(max-width : 900px)': {
        '& .video_image': {
            height: '30vw'
        }
    },

    '@media(max-width : 600px)': {
        '& .video_image': {
            height: '55vw'
        }
    }
}));

export const TagsList = styled.div(props => {
    console.log(props);
    return {
        marginTop: '50px',

        p: {
            color: props.theme.palette.colors.text.blackAndWhite
        },

        '& .tags_field': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '10px',
            gap: '10px'
        },

        a: {
            display: 'flex',
            boxAlign: 'center',
            alignItems: 'center',
            boxPack: 'center',
            justifyContent: 'center',
            padding: '7px 15px',
            color: props.theme.mode === 'light' ? 'rgb(117, 27, 116)' : '#a343a2',
            borderRadius: '12px',
            border: props.theme.mode === 'light' ? '1px dashed rgb(117, 27, 116)' : '1px dashed #a343a2',
            background: props.theme.mode === 'light' ? 'white' : '#11011e',
            gap: '5px'
        },

        '& .active_tag': {
            background: '#69127729'
        }
    };
});

export const PaginationField = styled.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px'
});
