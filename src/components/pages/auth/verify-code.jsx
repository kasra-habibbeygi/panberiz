// Components
import Image from 'next/image';
import { MainField } from './main.style';
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

//Assets
import logo from '../../../assets/images/logo.svg';

function VerifyCode() {
    return (
        <MainField>
            <div className='logo'>
                <Image src={logo} alt='logo' />
            </div>
            <div className='field'>
                <h3>کد تایید را وارد کنید</h3>
                <Input label='کد تایید' placeholder='کد تایید را وارد کنید' />
            </div>
            <div className='button'>
                <Button color='primary'>تایید</Button>
            </div>
        </MainField>
    );
}

export default VerifyCode;
