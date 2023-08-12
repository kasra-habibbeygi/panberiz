/* eslint-disable react/prop-types */
import Image from 'next/image';

// Assets
import { MainField } from './layout.style';
import RTLLogo from '@/assets/images/logo.svg';

const LoginLayout = ({ children, title }) => {
    return (
        <MainField>
            <div className='content'>
                <Image src={RTLLogo} alt='' className='main_logo' />
                <div className='children_field'>
                    <h3>{title}</h3>
                    {children}
                </div>
            </div>
            <small className='copy_right'>copyright @ PMLM 2003-2023</small>
        </MainField>
    );
};

export default LoginLayout;
