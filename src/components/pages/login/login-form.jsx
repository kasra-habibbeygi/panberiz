// Assets
import { useState } from 'react';
import { MainField } from './login-form.style';

// Component
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

const LoginForm = () => {
    const [inputValues, setInputValued] = useState('');

    const inputValueHandler = e => {
        setInputValued(e.target.value);
    };

    return (
        <MainField>
            <Input valueHandler={inputValueHandler} value={inputValues} placeholder='کدملی خود را وارد کنید' label='کد ملی' />
            <Button type='filled' color='primary'>
                ورود
            </Button>
        </MainField>
    );
};

export default LoginForm;
