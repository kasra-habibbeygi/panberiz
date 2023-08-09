import Image from 'next/image';

// Assets
import { MainField } from './loader.style';
import Logo from '@/assets/images/half-logo.svg';

const MainLoader = () => {
    return (
        <MainField>
            <Image src={Logo} alt='' />
        </MainField>
    );
};

export default MainLoader;
