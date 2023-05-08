/* eslint-disable react/prop-types */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { themeStateHandler } from '../../state-manager/reducer/user';

// Assets
import * as Style from './aside.style';
import home from '../../assets/icons/sidebar/home.svg';
import video from '../../assets/icons/sidebar/video.svg';
import tag from '../../assets/icons/sidebar/tag.svg';
import category from '../../assets/icons/sidebar/category.svg';
import mode from '../../assets/icons/sidebar/mode.svg';

// MUI
import { Switch } from '@mui/material';

function Aside({ asideStatus }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const themeState = useSelector(state => state.UserInfo.theme);
    const themeHandler = e => {
        dispatch(themeStateHandler(e.target.checked ? 'dark' : 'light'));
        localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
    };

    return (
        <Style.AsideField asideStatus={asideStatus}>
            <div className='items'>
                <ol>
                    <li>
                        <Link href='/dashboard' className={`${router.pathname === '/dashboard' ? 'active' : ''}`}>
                            <Image src={home} alt='home' />
                            <p>داشبورد</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/video' className={`${router.pathname === '/video' ? 'active' : ''}`}>
                            <Image src={video} alt='video' />
                            <p>ویدئو</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/tags'>
                            <Image src={tag} alt='tag' />
                            <p>تگ ها</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/category'>
                            <Image src={category} alt='category' />
                            <p>دسته بندی</p>
                        </Link>
                    </li>
                </ol>
            </div>
            <span className='seprator' />
            <div className='items'>
                <ol>
                    <li className='night-mode'>
                        <div>
                            <Image src={mode} alt='mode' />
                            <p>حالت شب</p>
                        </div>
                        <Switch checked={themeState === 'dark'} onChange={themeHandler} />
                    </li>
                </ol>
            </div>
        </Style.AsideField>
    );
}

export default Aside;
