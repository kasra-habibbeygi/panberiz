import * as Style from './sidebar.style';
import home from '../../assets/icons/sidebar/home.svg';
import video from '../../assets/icons/sidebar/video.svg';
import tag from '../../assets/icons/sidebar/tag.svg';
import category from '../../assets/icons/sidebar/category.svg';
import mode from '../../assets/icons/sidebar/mode.svg';
import information from '../../assets/icons/sidebar/information.svg';
import phone from '../../assets/icons/sidebar/phone.svg';
import Image from 'next/image';

function Sidebar() {
    return (
        <Style.SideBar>
            <div className='items'>
                <ol>
                    <li>
                        <Image src={home} alt='home' />
                        <p>داشبورد</p>
                    </li>
                    <li>
                        <Image src={video} alt='video' />
                        <p>ویدئو</p>
                    </li>
                    <li>
                        <Image src={tag} alt='tag' />
                        <p>تگ ها</p>
                    </li>
                    <li>
                        <Image src={category} alt='category' />
                        <p>دسته بندی</p>
                    </li>
                </ol>
            </div>
            <hr />
            <div className='items'>
                <ol>
                    <li>
                        <Image src={mode} alt='mode' />
                        <p>حالت شب</p>
                    </li>
                    <li>
                        <Image src={information} alt='information' />
                        <p>درباره ما</p>
                    </li>

                    <li>
                        <Image src={phone} alt='phone' />
                        <p>تماس با ما</p>
                    </li>
                </ol>
            </div>
        </Style.SideBar>
    );
}

export default Sidebar;
