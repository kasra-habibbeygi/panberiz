/* eslint-disable react/prop-types */
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';

// Assets
import * as Styles from './navbar.style';
import user from '../../assets/icons/user.svg';
import UserWhite from '../../assets/icons/user-white.svg';
import heart from '../../assets/icons/heart.svg';
import logo from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logo-white.svg';
import LogoutIcon from '../../assets/images/layout/logout.svg';
import SettingIcon from '../../assets/images/layout/setting.svg';

// Component
import AutoComplete from '../form-group/auto-complete';
import Button from '../form-group/button';

// MUI
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';
import { useSelector } from 'react-redux';

const top100Films = [
    { label: 'english', value: 'english' },
    { label: 'فارسی', value: 'فارسی' },
    { label: 'عربی', value: 'عربی' }
];

function Navbar({ setAsideStatus, asideStatus }) {
    const themeStatus = useSelector(state => state.UserInfo.theme);
    const [langValue, setLangValue] = useState({ label: 'فارسی', value: 'فارسی' });

    console.log(langValue);

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
                <Image src={themeStatus === 'light' ? logo : logoWhite} alt='logo' />
            </div>
            <div className='middle'>
                <input placeholder='جستجو ...' />
                <SearchIcon className='search_icon' />
            </div>
            <div className='left'>
                <div className='lang_select'>
                    <AutoComplete placeholder='زبان' value={langValue} valueHandler={setLangValue} options={top100Films} name='lang' />
                </div>
                <Button color='primary' type='outline' extraClass='button_link'>
                    <Link href='/video/add'>
                        <AddIcon />
                        <p>افزودن مدیا</p>
                    </Link>
                </Button>
                <Link href='/favorits'>
                    <Image src={heart} className='hearth_icon' alt='heart' />
                </Link>
                <div className='profile_dropdown_field' ref={ref}>
                    <Image
                        src={themeStatus === 'light' ? user : UserWhite}
                        alt='user'
                        onClick={() => FilterDropDownStatusHandler('profile_dropdown')}
                    />
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
