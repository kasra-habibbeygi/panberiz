/* eslint-disable react/prop-types */
import { Input } from 'antd';
import * as Style from './input.style';

function CustomInput({ placeholder }) {
    return (
        <Style.InputField>
            <Input className='input' size='large' placeholder={placeholder} bordered={false} />
        </Style.InputField>
    );
}

export default CustomInput;
