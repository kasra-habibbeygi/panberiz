import styled from '@emotion/styled';

export const MainField = styled.div({
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
            fontFamily: 'Vazirmatn',
            fontWeight: 'bold'
        },

        '& .MuiRadio-root': {
            color: '#751B74'
        }
    },

    '& .upload_field': {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        borderTop: '1px dashed #EFEFEF',
        paddingTop: '20px',
        marginTop: '20px',

        h3: {
            fontWeight: 'bold',
            fontSize: '1.1rem',
            margin: '10px'
        },

        small: {
            fontSize: '0.9rem',
            color: '#9D9D9E'
        },

        label: {
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            padding: '5px 20px',
            fontWeight: '500',
            borderRadius: '7px',
            color: '#000000',
            fontSize: '0.8rem',
            cursor: 'pointer'
        },

        '& .left_field': {
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
        },

        p: {
            fontSize: '0.9rem'
        }
    }
});
