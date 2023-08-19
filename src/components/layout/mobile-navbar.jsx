// Assets
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Assets
import { MobileNavbarMainField } from './mobile-navbar.style';
import HomeIcon from '../../assets/icons/home.svg';
import HeartIcon from '../../assets/icons/heart.svg';

// MUi
import AddSharpIcon from '@mui/icons-material/AddSharp';

const MobileNavbar = () => {
    const userInfo = useSelector(state => state.UserInfo);
    const [userRole, setUserRole] = useState('User');

    useEffect(() => {
        setUserRole(userInfo.role);
    }, [userInfo.role]);

    return (
        <MobileNavbarMainField>
            <ol>
                <li>
                    <Link href='/dashboard'>
                        <Image src={HomeIcon} alt='' />
                    </Link>
                </li>
                {userRole !== 'User' && (
                    <li>
                        <Link href='/video/add' className='middle_one'>
                            <AddSharpIcon />
                        </Link>
                    </li>
                )}
                {userRole === 'User' && (
                    <li>
                        <Link href='/favorits'>
                            <Image src={HeartIcon} alt='' />
                        </Link>
                    </li>
                )}
            </ol>
        </MobileNavbarMainField>
    );
};

export default MobileNavbar;
