import styled from '@emotion/styled';

export const SearchResultWrapper = styled.div(props => ({
    padding: '30px',
    color: props.theme.palette.colors.text.blackAndWhite,
    backgroundColor: props.theme.palette.colors.input.primary,

    '& .title': {
        fontSize: '25px',
        width: 'fit-content',
        margin: '0 auto 40px auto',
        borderBottom: '1px solid gray',
        paddingBottom: '10px'
    },

    '& .container': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',

        '& .item': {
            display: 'flex',
            gap: '10px',
            borderBottom: '1px solid',
            borderColor: props.theme.palette.colors.border.primary,
            paddingBottom: '10px',

            '& .question': {
                whiteSpace: 'nowrap',
                fontWeight: 700
            },

            '& .answer': {
                //
            }
        }
    }
}));
