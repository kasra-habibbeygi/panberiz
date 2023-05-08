import Image from 'next/image';
import { useState } from 'react';

// Assets
import { MainField } from './video.style';
import UserIcon from '@/assets/icons/user.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import play from '@/assets/icons/play.svg';
import Banner from '@/assets/images/video/video-1.jpeg';

// MUI
import StarIcon from '@mui/icons-material/Star';

// Component
import VideoModal from './video-modal';

const VideoField = () => {
    const [videoModalStatus, setVideoModalStatus] = useState(false);

    return (
        <MainField>
            <div className='video_image'>
                <div className='float'>
                    <Image className='icon' src={play} alt='play' onClick={() => setVideoModalStatus(true)} />
                </div>
                <Image className='video_banner' src={Banner} alt='video-banner' />
            </div>
            <div className='card_details'>
                <div className='right_field'>
                    <Image className='icon' src={UserIcon} alt='play' />
                    <div>
                        <h3>نام ویدیو آپلود شده</h3>
                        <p>توسط عاطفه حبیبی</p>
                    </div>
                </div>
                <div className='left_field'>
                    <div className='like'>
                        <p>21</p>
                        <Image className='icon' src={HeartIcon} alt='play' />
                    </div>
                    <div className='rate'>
                        <p>4.6 / 5</p>
                        <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                    </div>
                </div>
            </div>
            <VideoModal status={videoModalStatus} setStatus={setVideoModalStatus} />
        </MainField>
    );
};

export default VideoField;
