import styled from '@emotion/styled';

export const TitleField = styled.div(props => ({
    color: props.theme.palette.colors.text.blackAndWhite,
    padding: '20px 0',

    '& .title': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'white',

        h3: {
            fontSize: '1.3rem'
        },

        p: {
            fontWeight: 'bold',
            fontSize: '1.1rem'
        }
    },

    '& .progress_field': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',

        '& .progress': {
            width: '100%',

            span : {
                
            }
        },

        p: {
            width: 'max-content'
        }
    }
}));

export const QuestionsField = styled.div(props => ({}));
