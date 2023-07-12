/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
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
import AppreciationIcon from '../../assets/icons/sidebar/appreciation.svg';

// APIs
import { GetUserCategoriesList } from '../../api-request/category';

// MUI
import { Switch } from '@mui/material';
import { useEffect, useState } from 'react';

function Aside({ asideStatus }) {
    const { t } = useTranslation();
    const userInfo = useSelector(state => state.UserInfo);
    const dispatch = useDispatch();
    const router = useRouter();
    const themeState = useSelector(state => state.UserInfo.theme);
    const [collapseStatus, setCollapseStatus] = useState(false);
    const [categoriesList, setCategoriesList] = useState([]);

    const themeHandler = e => {
        dispatch(themeStateHandler(e.target.checked ? 'dark' : 'light'));
        localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
    };

    const collapseStatusHandler = () => {
        setCollapseStatus(!collapseStatus);
    };

    useEffect(() => {
        GetUserCategoriesList(userInfo.lang)
            .then(res => {
                setCategoriesList(res.results);

                categoriesList
                    ?.sort((a, b) => {
                        return a.place - b.place;
                    })
                    .map(item => {
                        console.log('rank: ', item.rank, 'name : ', item.title);
                    });
            })
            .catch(() => {});
    }, [userInfo.lang]);

    return (
        <Style.AsideField asideStatus={asideStatus} categoriesListLength={categoriesList.length}>
            <div className='items'>
                <ol>
                    {(userInfo.role === 'SuperAdminAcademy' || userInfo.role === 'AgentAcademy') && (
                        <li>
                            <Link href='/dashboard' className={`${router.pathname === '/dashboard' ? 'active' : ''}`}>
                                <Image src={home} alt='home' />
                                <p>{t('Dashboard')}</p>
                            </Link>
                        </li>
                    )}
                    {(userInfo.role === 'SuperAdminAcademy' || userInfo.role === 'AgentAcademy') && (
                        <li>
                            <Link href='/video' className={`${router.pathname === '/video' ? 'active' : ''}`}>
                                <Image src={video} alt='video' />
                                <p>{t('Media')}</p>
                            </Link>
                        </li>
                    )}
                    {(userInfo.role === 'User' || userInfo.role === 'AgentAcademy') && (
                        <>
                            <li>
                                <div className='collapse_field'>
                                    <div className='collapse_title' onClick={collapseStatusHandler}>
                                        <Image src={category} alt='category' />
                                        <p>{t('Category')}</p>
                                    </div>
                                    <div className={`collapse_menu ${collapseStatus ? 'open' : ''}`}>
                                        {categoriesList
                                            ?.sort((a, b) => {
                                                return a.place - b.place;
                                            })
                                            .map(item => {
                                                if (item.place === 0) {
                                                    return (
                                                        <Link href={`/video/${item.id}`} key={item.id}>
                                                            <img
                                                                className='video_banner'
                                                                src={item?.image.replace(
                                                                    'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21/',
                                                                    'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir/'
                                                                )}
                                                                alt='video-banner'
                                                            />
                                                            {item.title}
                                                        </Link>
                                                    );
                                                }
                                                return (
                                                    <Link
                                                        href={`/video/${item.id}`}
                                                        key={item.id}
                                                        className={`${
                                                            item?.rank <= userInfo.rank || userInfo.role === 'AgentAcademy'
                                                                ? ''
                                                                : 'disabled'
                                                        }`}
                                                    >
                                                        <img
                                                            className='video_banner'
                                                            src={item?.image.replace(
                                                                'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21/',
                                                                'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir/'
                                                            )}
                                                            alt='video-banner'
                                                        />
                                                        {item.title}
                                                    </Link>
                                                );
                                            })}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href='/certification' className={`${router.pathname === '/video' ? 'active' : ''}`}>
                                    <Image src={AppreciationIcon} alt='video' className='sidebar_icon' />
                                    <p>{t('Certification')}</p>
                                </Link>
                            </li>
                        </>
                    )}

                    {userInfo.role === 'SuperAdminAcademy' ? (
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
