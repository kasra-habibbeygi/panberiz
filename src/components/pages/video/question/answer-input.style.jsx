import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    label: {
        fontWeight: 'bold',
        color: props.theme.palette.colors.text.blackAndWhite,
        fontSize: '1rem'
    },
    '& .row-content': {
        alignItems: 'center',
        gap: '15px',
        display: 'flex',
        h3: {
            paddingBottom: '0px'
        },
        '& .icon': {
            position: 'absolute',
            left: '40px',
            alignItems: 'center',
            display: 'flex',
            gap: '5px'
        }
    },
    input: {
        width: '100%',
        borderRadius: '12px',
        background: props.theme.palette.colors.input.primary,
        border: 'none',
        height: '43px',
        padding: '15px',
        color: props.theme.palette.colors.text.blackAndWhite,
        '&::placeholder': {
            color: props.theme.mode === 'light' ? '#8C8C8C' : 'white'
        }
    }
}));
