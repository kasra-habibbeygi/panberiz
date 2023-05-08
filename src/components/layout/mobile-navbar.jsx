// Assets
import Link from 'next/link';

// Assets
import { MobileNavbarMainField } from './mobile-navbar.style';
import HomeIcon from '../../assets/icons/home.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import Image from 'next/image';

const MobileNavbar = () => {
    return (
        <MobileNavbarMainField>
            <ol>
                <li>
                    <Link href='/dashboard'>
                        <Image src={HomeIcon} alt='' />
                    </Link>
                </li>
                <li>
                    <Link href='/video/add' className='middle_one'>
                        <AddSharpIcon />
                    </Link>
                </li>
                <li>
                    <Link href='/favorits'>
                        <Image src={HeartIcon} alt='' />
                    </Link>
                </li>
            </ol>
        </MobileNavbarMainField>
    );
};

export default MobileNavbar;
