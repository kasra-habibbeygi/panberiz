/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import { useState } from 'react';

// Assets
import { MainField } from './video.style';
import UserIcon from '@/assets/icons/user.svg';
// import HeartIcon from '@/assets/icons/heart.svg';
import play from '@/assets/icons/play.svg';

// MUI
import StarIcon from '@mui/icons-material/Star';

// Component
import VideoModal from './video-modal';

const VideoField = ({ mediaDetails }) => {
    const [videoModalStatus, setVideoModalStatus] = useState(false);

    return (
        <MainField>
            <div className='video_image'>
                <div className='float'>
                    <Image className='icon' src={play} alt='play' onClick={() => setVideoModalStatus(true)} />
                </div>
                <img
                    className='video_banner'
                    src={mediaDetails?.cover?.replace(
                        'ftp://pmlm@fileacademy.pmlm.ir:%7DW7,-iI%7Bg;sh@31.25.90.38:21',
                        'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir/pmlm/'
                    )}
                    alt='video-banner'
                />
            </div>
            <div className='card_details'>
                <div className='right_field'>
                    <Image className='icon' src={UserIcon} alt='play' />
                    <div>
                        <h3>{mediaDetails?.title}</h3>
                        <p>{mediaDetails?.publisher_fullname}</p>
                    </div>
                </div>
                <div className='left_field'>
                    {/* <div className='like'>
                        <p>0</p>
                        <Image className='icon' src={HeartIcon} alt='play' />
                    </div> */}
                    <div className='rate'>
                        <p>5 / {mediaDetails?.score} </p>
                        <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                    </div>
                </div>
            </div>
            <VideoModal status={videoModalStatus} setStatus={setVideoModalStatus} />
        </MainField>
    );
};

export default VideoField;
