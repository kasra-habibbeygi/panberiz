import styled from '@emotion/styled';

export const DashboardTableWrapper = styled.div(props => {
    return {
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
                textAlign: ' center'
            },

            '& .eye_icon': {
                marginRight: '10px'
            }
        },

        '& .pagination_wrapper': {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: '20px'
        }
    };
});

export const VideoListWrapper = styled.div(props => {
    return {
        background: props.theme.palette.colors.background.layout,
        padding: '0 50px 50px 50px'
    };
});
