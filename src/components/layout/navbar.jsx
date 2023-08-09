/* eslint-disable react/prop-types */
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStatushandler } from '@/state-manager/reducer/user';
import { useRouter } from 'next/router';
import { langHandler } from '@/state-manager/reducer/user';
import { useTranslation } from 'next-i18next';

// Assets
import * as Styles from './navbar.style';
import user from '@/assets/icons/user.svg';
import UserWhite from '@/assets/icons/user-white.svg';
import notification from '@/assets/icons/notification.svg';
import notificationLight from '@/assets/icons/notificationLight.svg';
import heart from '@/assets/icons/heart.svg';
import logo from '@/assets/images/logo.svg';
import logoWhite from '@/assets/images/logo-white.svg';
import LogoutIcon from '@/assets/images/layout/logout.svg';
import ForwardIcon from '@/assets/icons/forward.svg';

// Component
import AutoComplete from '../form-group/auto-complete';
import Button from '../form-group/button';

// MUI
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

//Axios
import { GetNotificationList } from '@/api-request/notification';
import { EditNotificationList } from '@/api-request/notification';

const LangList = [
    { label: 'english', value: 'en' },
    { label: 'فارسی', value: 'fa' },
    { label: 'عربی', value: 'ar' }
];

function Navbar({ setAsideStatus, asideStatus }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const userInfo = useSelector(state => state.UserInfo);
    const [langValue, setLangValue] = useState({ label: 'فارسی', value: 'fa' });
    const [isLoggedInWithRedirect, setIsLoggedInWithRedirect] = useState(false);
    const [NotifDataList, setNotifDataList] = useState([]);

    useEffect(() => {
        if (userInfo.role === 'AgentAcademy') {
            GetNotificationList(4).then(res => {
                setNotifDataList(res);
            });
        }

        setLangValue(() => {
            if (localStorage.getItem('pmlmLang') === 'fa') {
                return LangList[1];
            } else if (localStorage.getItem('pmlmLang') === 'en') {
                return LangList[0];
            }
            return LangList[2];
        });

        if (localStorage.getItem('isLoggedInWithRedirect') !== null) {
            setIsLoggedInWithRedirect(true);
        }
    }, [userInfo.role]);

    const openAside = () => {
        setAsideStatus(!asideStatus);
    };

    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [dropDownNotification, setDropDownNotification] = useState('');

    useOutsideClick(ref, () => {
        setDropDownStatus('');
    });

    const FilterDropDownStatusHandler = name => {
        setDropDownNotification('');
        setDropDownStatus(name);
        if (name === DropDownStatus) {
            setDropDownStatus('');
        }
    };

    useOutsideClick(ref, () => {
        setDropDownNotification('');
    });

    const dropDownNotificationHandler = name => {
        setDropDownStatus('');
        setDropDownNotification(name);
        if (name === dropDownNotification) {
            setDropDownNotification('');
        }
    };

    const logouthandler = () => {
        localStorage.removeItem('pmlmToken');
        dispatch(loginStatushandler(true));
        router.push('/login');
        localStorage.removeItem('isLoggedInWithRedirect');
    };

    const handleChangeLanguage = value => {
        router.replace(router.asPath, router.asPath, { locale: value.value });
        localStorage.setItem('pmlmLang', value.value);
        setLangValue(value);
        dispatch(langHandler(value.value));
        document.dir = value.value === 'en' ? 'ltr' : 'rtl';
    };

    const reactNotifHandler = pk => {
        EditNotificationList(pk).then(() => {
            GetNotificationList(4).then(res => {
                setNotifDataList(res);
            });
        });
    };

    return (
        <Styles.Navbar>
            <div className='right'>
                <MenuIcon onClick={openAside} />
                <Image src={userInfo.theme === 'light' ? logo : logoWhite} alt='logo' />
            </div>
            <div className='left'>
                <div className='lang_select'>
                    <AutoComplete
                        placeholder={t('lang')}
                        value={langValue}
                        valueHandler={e => handleChangeLanguage(e)}
                        options={LangList}
                    />
                </div>
                {userInfo.role !== 'User' ? (
                    <Button color='primary' type='outline' extraClass='button_link'>
                        <Link href='/video/add'>
                            <AddIcon />
                            <p>{t('Add media')}</p>
                        </Link>
                    </Button>
                ) : (
                    ''
                )}
                <Link href='/favorits' className={`favorit_link ${userInfo.role === 'User' ? 'show' : ''}`}>
                    <Image src={heart} className='hearth_icon' alt='heart' />
                </Link>

                <div className='profile_dropdown_field' ref={ref}>
                    <Image
                        src={userInfo.theme === 'light' ? user : UserWhite}
                        alt='user'
                        onClick={() => FilterDropDownStatusHandler('profile_dropdown')}
                    />

                    {userInfo.role === 'AgentAcademy' && (
                        <div className='notification' onClick={() => dropDownNotificationHandler('notification_dropdown')}>
                            <Image src={userInfo.theme === 'light' ? notification : notificationLight} alt='user' />
                        </div>
                    )}
                    <div className={`dropdown_field ${DropDownStatus !== '' ? 'active' : ''}`}>
                        <div className='header'>
                            <Image src={user} alt='user' />
                            <div className='content'>
                                <h5>{userInfo.fullname}</h5>
                                <small>{userInfo.username}</small>
                            </div>
                        </div>
                        <ol>
                            {/* <li>
                                <Link href=''>
                                    <Image src={SettingIcon} alt='' />
                                    {t('Options')}
                                </Link>
                            </li> */}
                            {isLoggedInWithRedirect && (
                                <li>
                                    <a href='https://pmlm.ir/User/UserDashboard/index' onClick={logouthandler}>
                                        <Image src={ForwardIcon} alt='' />
                                        {t('Back to the desktop')}
                                    </a>
                                </li>
                            )}
                            <li>
                                <div onClick={logouthandler}>
                                    <Image src={LogoutIcon} alt='' />
                                    {t('Logout')}
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div className={`dropdown_field ${dropDownNotification !== '' ? 'active' : ''}`}>
                        <ul className='notifs_list'>
                            {NotifDataList.map(item => (
                                <li className='notifs_item' key={item.id}>
                                    <p className='message'>{item.about_object}</p>
                                    {item.message ? (
                                        <div>
                                            <p className='message'>{item.message}</p>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    {item.is_read ? (
                                        <p className='read'>✔ {t('read')}</p>
                                    ) : (
                                        <button className='notifs_button' onClick={() => reactNotifHandler(item.id)}>
                                            {t('Mark as read')}
                                        </button>
                                    )}
                                </li>
                            ))}

                            <li className='notifs_showAll'>
                                <Link href='/notification'>{t('Show all')}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Styles.Navbar>
    );
}

export default Navbar;
