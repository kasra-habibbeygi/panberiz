/* eslint-disable react/prop-types */
import PulseLoader from 'react-spinners/PulseLoader';

// Assets
import * as S from './button.style';

// shadow?: boolean;
// radius?: 'half-rounded' | 'rounded';
// type?: 'text' | 'outline' | 'filled' | 'outline-filled';
// color?: 'white' | 'primary' | 'yellow' | 'green' | 'dark';
// loader?: boolean;
// disabled?: boolean;

const Button = ({
    children,
    shadow = false,
    radius = 'half-rounded',
    type = 'filled',
    color = 'white',
    handler,
    loader = false,
    loaderColor = '#ffffff',
    extraClass = '',
    disabled = false
}) => {
    return (
        <S.ButtonField
            onClick={() => handler && handler()}
            shadow={shadow}
            radius={radius}
            className={`${type} ${color} ${extraClass}`}
            disabled={disabled || loader}
        >
            {loader ? <PulseLoader loading={loader} color={loaderColor} size={10} /> : children}
        </S.ButtonField>
    );
};

export default Button;
