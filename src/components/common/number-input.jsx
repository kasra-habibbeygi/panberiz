/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { InputNumber } from 'antd';
import * as Style from './number-input.style';

function CustomNumberInput({ placeholder }) {
    return (
        <Style.NumberInputField>
            <InputNumber className='number-input' bordered={false} min={1} max={100000} defaultValue={3} />
        </Style.NumberInputField>
    );
}

export default CustomNumberInput;
