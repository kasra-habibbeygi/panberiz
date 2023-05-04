/* eslint-disable react/prop-types */
import { Input } from 'antd';
import * as Style from './area-input.style';
const { TextArea } = Input;

function CustomAreaInput({ placeholder }) {
    return (
        <Style.AreaInputField>
            <TextArea
                bordered={false}
                className='area-input'
                placeholder={placeholder}
                autoSize={{
                    minRows: 3,
                    maxRows: 5
                }}
            />
        </Style.AreaInputField>
    );
}

export default CustomAreaInput;
