/* eslint-disable react/prop-types */
import * as Style from './aside.style';
import home from '../../assets/icons/sidebar/home.svg';
import video from '../../assets/icons/sidebar/video.svg';
import tag from '../../assets/icons/sidebar/tag.svg';
import category from '../../assets/icons/sidebar/category.svg';
import mode from '../../assets/icons/sidebar/mode.svg';
import information from '../../assets/icons/sidebar/information.svg';
import phone from '../../assets/icons/sidebar/phone.svg';
import Image from 'next/image';
import { Switch } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Aside({ asideStatus }) {
    const router = useRouter();
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
                        <Link href='/'>
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
                        <Switch />
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={information} alt='information' />
                            <p>درباره ما</p>
                        </Link>
                    </li>

                    <li>
                        <Link href='/'>
                            <Image src={phone} alt='phone' />
                            <p>تماس با ما</p>
                        </Link>
                    </li>
                </ol>
            </div>
        </Style.AsideField>
    );
}

export default Aside;
