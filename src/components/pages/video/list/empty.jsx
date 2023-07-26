import Image from 'next/image';
import empty from '../../assets/images/video/empty.svg';

function Empty() {
    return (
        <div className='empty-container'>
            <Image src={empty} alt='empty-video' />
        </div>
    );
}

export default Empty;
