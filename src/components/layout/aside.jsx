/* eslint-disable react/prop-types */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { themeStateHandler } from '../../state-manager/reducer/user';
import { useTranslation } from 'next-i18next';

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
    const { t } = useTranslation();
    const userInfo = useSelector(state => state.UserInfo);
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
                            <p>{t('Dashboard')}</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/video' className={`${router.pathname === '/video' ? 'active' : ''}`}>
                            <Image src={video} alt='video' />
                            <p>{t('Video')}</p>
                        </Link>
                    </li>
                    {userInfo.role === 'AgentAcademy' ? (
                        <>
                            <li>
                                <Link href='/tags'>
                                    <Image src={tag} alt='tag' />
                                    <p>{t('tags')}</p>
                                </Link>
                            </li>
                            <li>
                                <Link href='/category'>
                                    <Image src={category} alt='category' />
                                    <p>{t('Category')}</p>
                                </Link>
                            </li>
                        </>
                    ) : (
                        ''
                    )}
                </ol>
            </div>
            <span className='seprator' />
            <div className='items'>
                <ol>
                    <li className='night-mode'>
                        <div>
                            <Image src={mode} alt='mode' />
                            <p>{t('Dark mode')}</p>
                        </div>
                        <Switch checked={themeState === 'dark'} onChange={themeHandler} />
                    </li>
                </ol>
            </div>
        </Style.AsideField>
    );
}

export default Aside;
