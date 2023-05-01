import * as Styles from './navbar.style';
import user from '../../assets/icons/user.svg';
import heart from '../../assets/icons/heart.svg';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import logo from '../../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    return (
        <Styles.Navbar>
            <div className='right'>
                <MenuIcon />
                <Image style={{ marginRight: 20 }} src={logo} alt='logo' />
            </div>
            <div className='middle'>
                <input placeholder='جستجو ...' />
            </div>
            <div className='left'>
                <button style={{ borderWidth: 5, borderColor: 'black' }}>
                    <AddIcon />
                    <p>افزودن مدیا</p>
                </button>
                <Image src={heart} alt='heart' />
                <Image src={user} alt='user' />
            </div>
        </Styles.Navbar>
    );
}

export default Navbar;
