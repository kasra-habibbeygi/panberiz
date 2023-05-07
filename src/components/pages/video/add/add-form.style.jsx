import styled from '@emotion/styled';

export const AddFormField = styled.div(() => ({
    '& .form_field': {
        borderRadius: '10px',
        border: '1px solid #F3F3F3',
        padding: '20px',
        background: 'white',
        marginBottom: '50px'
    },

    '& .flex_field': {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    '& .w-33': {
        width: '33.33%',
        padding: '15px'
    },

    '& .w-50': {
        width: '50%',
        padding: '15px'
    },
    '& .w-100': {
        width: '100%',
        padding: '15px'
    },

    '& .header': {
        display: 'flex',
        alignItems: 'center',
        color: '#170128',
        fontWeight: 'bold',
        borderBottom: '1px dashed #EFEFEF',
        paddingBottom: '20px',
        marginBottom: '20px',

        '& .title': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            img: {
                width: '20px',
                height: 'auto'
            }
        }
    },

    '& .checkbox_field': {
        '& .MuiTypography-root': {
            fontFamily: 'Vazirmatn'
        }
    },
    '& .upload-file': {
        width: '100%',
        height: '150px',
        borderRadius: '20px',
        backgroundColor: '#F1F1F1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '& .quiz-header': {
        display: 'flex',
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        button: {
            backgroundColor: 'transparent'
        },
        '& .left': {
            display: 'flex',
            color: 'rgba(117, 27, 116, 1)',
            alignItems: 'center',
            h3: {
                margin: '0 15px'
            }
        }
    },
    '& .quiz-container': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '350px',
        borderRadius: '15px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: '1px solid rgba(239, 239, 239, 1)'
    }
}));
