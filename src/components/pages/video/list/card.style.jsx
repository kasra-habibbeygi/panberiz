import styled from '@emotion/styled';

export const CardField = styled.div(props => ({
    width: '100%',
    borderRadius: '20px',
    margin: '10px',
    position: 'relative',
    cursor: props.pointer ? 'pointer' : 'normalize',
    opacity: props.status ? '1' : '0.5',
    pointerEvents: props.status ? 'initial' : 'none',

    '& .card_details': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: '10px',

        '& .right_field': {
            color: props.theme.palette.colors.text.blackAndWhite,
            p: {
                color: props.theme.palette.colors.text.light
            }
        },

        '& .left_field': {
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'flex-end',

            div: {
                display: 'flex',
                gap: '10px',
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
        height: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& .video_banner': {
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            objectFit: 'cover'
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
            height: '100%',

            '& .icon': {
                margin: '5px',
                cursor: 'pointer'
            }
        }
    }
}));

export const TagsList = styled.div(props => ({
    marginTop: '50px',

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
        color: 'rgb(117, 27, 116)',
        borderRadius: '12px',
        border: '1px dashed rgb(117, 27, 116)',
        background: 'white',
        gap: '5px'
    }
}));
