/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Select } from 'antd';
import * as Style from './select.style';

function CustomSelect({ placeholder, options }) {
    return (
        <Style.SelectField>
            <Select
                className='select'
                size='large'
                placeholder='انتخاب دسته بندی'
                bordered={false}
                options={[
                    {
                        value: 'jack',
                        label: 'Jack'
                    },
                    {
                        value: 'lucy',
                        label: 'Lucy'
                    },
                    {
                        value: 'Yiminghe',
                        label: 'yiminghe'
                    }
                ]}
            />
        </Style.SelectField>
    );
}

export default CustomSelect;
