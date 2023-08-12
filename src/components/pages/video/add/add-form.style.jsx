import styled from '@emotion/styled';

export const AddFormField = styled.div(props => ({
    '& .form_field': {
        borderRadius: '10px',
        border: `1px solid ${props.theme.palette.colors.border.primary}`,
        padding: '20px',
        backgroundColor: props.theme.palette.colors.background.card,
        margin: '50px 0'
    },

    '& .flex_field': {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    '& .w-33': {
        width: '33.33%',
        padding: '15px 0'
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
        color: props.theme.palette.colors.text.blackAndWhite,
        fontWeight: 'bold',
        borderBottom: `1px dashed ${props.theme.palette.colors.border.primary}`,
        paddingBottom: '20px',
        marginBottom: '20px',
        gap: '10px',

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
        backgroundColor: props.theme.palette.colors.input.primary,
        display: 'flex',
        color: props.theme.palette.colors.text.blackAndWhite,
        justifyContent: 'center',
        alignItems: 'center'
    },

    '& .quiz-header': {
        display: 'flex',
        color: props.theme.palette.colors.text.blackAndWhite,
        padding: '20px 0',
        alignItems: 'center',
        justifyContent: 'space-between',
        button: {
            backgroundColor: 'transparent'
        }
    },

    '& .quiz-container': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: props.theme.mode === 'light' ? 'white' : props.theme.palette.colors.input.primary,
        padding: '20px',
        borderRadius: '15px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        border: `1px solid ${props.theme.palette.colors.border.primary}`
    },

    '& .multi_select': {
        '& .MuiInputBase-root': {
            background: props.theme.palette.colors.input.primary,
            padding: '0 10px !important',
            borderRadius: '12px'
        },

        fieldset: {
            border: 'none'
        },

        input: {
            fontSize: '0.9rem',
            height: '25px',
            color: props.theme.palette.colors.text.blackAndWhite,

            '&::placeholder': {
                color: props.theme.palette.colors.text.blackAndWhite,
                fontWeight: 'bold'
            }
        },

        svg: {
            color: `${props.theme.palette.colors.text.blackAndWhite} !important`
        },

        '& .MuiPaper-root': {
            borderRadius: '10px',

            li: {
                fontSize: '0.9rem'
            }
        },

        '& .MuiChip-deleteIcon': {
            margin: '0'
        }
    },

    '& .add_question_btn': {
        background: 'transparent !important',
        color: `${props.theme.palette.colors.text.blackAndWhite} !important`,

        p: {
            fontSize: '1rem'
        },

        svg: {
            transform: props.theme.direction === 'rtl' ? 'unset' : 'rotate(180deg)'
        }
    },

    '@media(max-width : 700px)': {
        '& .form_field': {
            '& .header': {
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }
        },
        '& .w-33': {
            width: '50%',
            padding: '15px 0'
        },

        '& .w-50': {
            width: '100%',
            padding: '15px'
        },

        '& .upload_field': {
            flexDirection: 'column',
            gap: '20px',

            '& .left_field': {
                width: '100%'
            }
        },

        '& .right_field': {
            width: '100%'
        }
    },

    '@media(max-width : 600px)': {
        '& .w-33': {
            width: '100%'
        },
        '& .upload_field': {
            '& .left_field': {
                flexDirection: 'column',
                alignItems: 'flex-start'
            }
        }
    },

    '@media(max-width : 400px)': {
        '& .form_field': {
            marginTop: '20px'
        }
    }
}));

export const IndexField = styled.div(props => ({
    marginLeft: '10px',
    backgroundColor: props.currect && 'rgba(99, 199, 170, 1)',
    padding: '10px',
    width: '35px',
    borderLeft: !props.currect && '1px solid rgba(172, 172, 172, 0.3)',
    borderRadius: props.currect ? '5px' : '0',
    color: props.currect ? 'white' : props.theme.palette.colors.text.blackAndWhite,
    display: 'flex',
    height: '35px',
    justifyContent: 'center',
    alignItems: 'center'
}));
