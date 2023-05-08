import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ButtonField = styled(Button)(props => ({
    padding: '12px 20px',
    minHeight: '45px',
    fontWeight: '400',
    boxShadow: props.shadow ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px' : '',
    borderRadius: props.radius === 'half-rounded' ? '12px' : props.radius === 'rounded' ? '50px' : '0',
    lineHeight: '0px',
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    fontSize: '1rem',
    transition: 'all linear 0.2s',

    a: {
        color: 'inherit',
        fontSize: 'inherit'
    },

    img: {
        width: '20px',
        height: 'auto'
    },

    '& [disabled]': {
        opacity: '0.4'
    },

    '&.text': {
        background: 'transparent',
        border: 'none',

        '& .primary': {
            color: props.theme.palette.colors.primary
        },

        '&.yellow': {
            color: props.theme.palette.colors.yellow
        },

        '&.green': {
            color: props.theme.palette.colors.green
        },

        '&.white': {
            color: props.theme.palette.colors.text.primary
        }
    },

    '&.outline': {
        '&.primary': {
            border: `1px solid ${props.theme.palette.colors.primary}`,
            color: props.theme.palette.colors.primary
        },

        '&.yellow': {
            border: `1px solid ${props.theme.palette.colors.yellow}`,
            color: props.theme.palette.colors.yellow
        },

        '&.green': {
            border: `1px solid ${props.theme.palette.colors.green}`,
            color: props.theme.palette.colors.green
        },
        '&.white': {
            border: `1px solid ${props.theme.palette.colors.text.primary}`,
            color: props.theme.palette.colors.text.primary
        }
    },

    '&.filled': {
        '&.primary': {
            background: props.theme.palette.colors.primary,
            color: 'white'
        },

        '&.yellow': {
            background: props.theme.palette.colors.yellow,
            color: 'white'
        },

        '&.green': {
            background: props.theme.palette.colors.green,
            color: 'white'
        },

        '&.white': {
            background: 'white',
            color: 'black'
        },
        '&.dark': {
            background: '#585858',
            color: 'white'
        }
    },

    '&.outline-filled': {
        '&.primary': {
            background: 'white',
            border: `1px solid ${props.theme.palette.colors.primary}`
        },

        '&.yellow': {
            background: 'white',
            border: `1px solid ${props.theme.palette.colors.yellow}`
        },

        '&.green': {
            background: 'white',
            border: `1px solid ${props.theme.palette.colors.green}`
        }
    }
}));
