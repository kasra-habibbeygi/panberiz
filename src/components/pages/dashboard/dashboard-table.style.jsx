import styled from '@emotion/styled';

export const DashboardTableWrapper = styled.div(props => ({
    overflow: 'auto',
    marginTop: '70px',

    table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: '0 10px',
        color: props.theme.palette.colors.text.blackAndWhite,

        tr: {
            backgroundColor: props.theme.palette.colors.input.primary,
            marginBottom: '10px',
            whiteSpace: 'nowrap'
        },

        '& td, th': {
            padding: '15px',
            textAlign: ' center',

            a: {
                color: 'inherit'
            }
        },

        '& .eye_icon': {
            ...(props.theme.direction === 'rtl' && {
                marginRight: '10px'
            }),

            ...(props.theme.direction === 'ltr' && {
                marginLeft: '10px'
            })
        }
    },

    '& .empty_field': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        fontSize: '1.2rem',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    }
}));

export const VideoListWrapper = styled.div(props => {
    return {
        background: props.theme.palette.colors.background.layout,
        padding: '0 50px 50px 50px'
    };
});
