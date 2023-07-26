/* eslint-disable react/prop-types */
// Assets
import { MainField } from './input.style';

const Input = ({ placeholder, value, label, name, valueHandler, type = 'text', onKeyDown }) => {
    const keyDownHandler = e => {
        if (e.key === 'Enter') {
            onKeyDown();
        }
    };
    return (
        <MainField>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                name={name}
                id={name}
                type={type}
                value={value}
                onChange={e => valueHandler(e)}
                onKeyDown={e => onKeyDown && keyDownHandler(e)}
                placeholder={placeholder}
            />
        </MainField>
    );
};

export default Input;
