/* eslint-disable prettier/prettier */
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
        marginTop: '20px',

        '& .progress': {
            width: '100%',
            borderRadius: '50px',
            background: '#f4f4f4',
            height: '15px',
            position: 'relative',

            span: {
                borderRadius: '50px',
                position: 'absolute',
                right: '0',
                height: '100%',
                width: `${props.progressPercent}%`,
                background:
                    props.progressPercent <= 40
                        ? '#63C7AA'
                        : props.progressPercent >= 40 && props.progressPercent <= 80
                            ? '#E29B00'
                            : props.progressPercent >= 80
                                ? '#BF0000'
                                : '',
                display: 'block',
                transition: 'all linear 0.2s'
            }
        },

        p: {
            minWidth: 'max-content'
        }
    },
    
    '@media(max-width : 700px)': {
        '& .title': {
    
            h3: {
                fontSize: '1.1rem'
            },
    
            p: {
                fontWeight: 'bold',
                fontSize: '0.9rem'
            }
        }
    }
}));

export const QuestionsField = styled.div(props => ({
    width : '100%',

    '& .four_choice': {
        display : 'flex',
        flexDirection : 'column',
        gap : '30px',
        marginTop : '30px',

        span: {
            fontFamily: 'Vazirmatn',
            lineHeight : '30px'
        }
    },

    '& .question_card': {
        border: `1px solid ${props.theme.palette.colors.border.primary}`,
        borderRadius: '12px',
        padding: '15px',
        color:props.theme.palette.colors.text.blackAndWhite,
        marginTop: '20px',
        small: {
            color: props.theme.palette.colors.text.light,
            fontSize: '1rem'
        },

        h4: {
            color: props.theme.palette.colors.text.blackAndWhite,
            fontSize: '1rem',
            marginBottom: '20px',
            marginTop: '20px',
            lineHeight : '30px'
        }
    },

    '& .submit_btn': {
        margin: '20px auto 0 0 ',
        width: '180px'
    },
        
    '@media(max-width : 700px)': {
        '& .four_choice': {    
            span: {
                fontSize : '0.9rem'
            }
        },

        
        '& .question_card': {

            h4: {
                fontSize: '0.9rem'
            }
        }
    
    }
}));
