// Components
import Image from 'next/image';
import { MainField } from './main.style';
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

//Assets
import logo from '../../../assets/images/logo.svg';

function NationalCode() {
    return (
        <MainField>
            <div className='logo'>
                <Image src={logo} alt='logo' />
            </div>
            <div className='field'>
                <h2>ورود</h2>
                <Input label='کد ملی' placeholder='کد ملی خود را وارد کنید' />
            </div>
            <div className='button'>
                <Button color='primary'>ورود</Button>
            </div>
        </MainField>
    );
}

export default NationalCode;
