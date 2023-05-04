/* eslint-disable react/prop-types */
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';

// Assets
import * as Styles from './navbar.style';
import user from '../../assets/icons/user.svg';
import heart from '../../assets/icons/heart.svg';
import logo from '../../assets/images/logo.png';
import LogoutIcon from '../../assets/images/layout/logout.svg';
import SettingIcon from '../../assets/images/layout/setting.svg';

// MUI
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

function Navbar({ setAsideStatus, asideStatus }) {
    const openAside = () => {
        setAsideStatus(!asideStatus);
    };

    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');

    useOutsideClick(ref, () => {
        setDropDownStatus('');
    });

    const FilterDropDownStatusHandler = name => {
        setDropDownStatus(name);
        if (name === DropDownStatus) {
            setDropDownStatus('');
        }
    };

    return (
        <Styles.Navbar>
            <div className='right'>
                <MenuIcon onClick={openAside} />
                <Image src={logo} alt='logo' />
            </div>
            <div className='middle'>
                <input placeholder='جستجو ...' />
                <SearchIcon className='search_icon' />
            </div>
            <div className='left'>
                <Link href='/video/insert-media' className='button_link'>
                    <AddIcon />
                    <p>افزودن مدیا</p>
                </Link>
                <Image src={heart} alt='heart' />
                <div className='profile_dropdown_field' ref={ref}>
                    <Image src={user} alt='user' onClick={() => FilterDropDownStatusHandler('profile_dropdown')} />
                    <div className={`dropdown_field ${DropDownStatus !== '' ? 'active' : ''}`}>
                        <div className='header'>
                            <Image src={user} alt='user' />
                            <div className='content'>
                                <h5>کسری حبیب بیگی</h5>
                                <small>kasra habibbeygi</small>
                                <p>SuperAdminAgency</p>
                            </div>
                        </div>
                        <ol>
                            <li>
                                <Link href=''>
                                    <Image src={SettingIcon} alt='' />
                                    تنظیمات
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    <Image src={LogoutIcon} alt='' />
                                    خروج از حساب کاربری
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </Styles.Navbar>
    );
}

export default Navbar;
