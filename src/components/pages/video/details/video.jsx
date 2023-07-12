/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import { useState } from 'react';

// Assets
import { MainField } from './video.style';
import UserIcon from '@/assets/icons/user.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import play from '@/assets/icons/play.svg';

// MUI
import StarIcon from '@mui/icons-material/Star';

// Component
import VideoModal from './video-modal';

// APIs
import { AddNewFavorits } from '@/api-request/favorit';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const VideoField = ({ mediaDetails }) => {
    const [videoModalStatus, setVideoModalStatus] = useState(false);
    const userInfo = useSelector(state => state.UserInfo);

    const addFavoritHandler = id => {
        AddNewFavorits({
            media: id,
            user: userInfo.id
        })
            .then(() => {
                toast.success('به لیست علاقه مندی ها اضافه شد !');
            })
            .catch(() => {
                toast.error('لطفا مجدد تلاش کنید !');
            });
    };

    return (
        <MainField>
            {mediaDetails?.media_type === 'video' ? (
                <div className='video_image'>
                    <div className='float'>
                        <Image className='icon' src={play} alt='play' onClick={() => setVideoModalStatus(true)} />
                    </div>
                    <img
                        className='video_banner'
                        src={mediaDetails?.cover?.replace(
                            'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21',
                            'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir'
                        )}
                        alt='video-banner'
                    />
                </div>
            ) : (
                <>
                    <iframe
                        src={mediaDetails?.file?.replace(
                            'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21',
                            'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir'
                        )}
                        width='100%'
                        height='500px'
                    />
                    <a
                        href={mediaDetails?.file?.replace(
                            'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21',
                            'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir'
                        )}
                        target='_blank'
                        className='download_field'
                        rel='noreferrer'
                    >
                        دانلود فایل
                    </a>
                </>
            )}
            <div className='card_details'>
                <div className='right_field'>
                    <Image className='icon' src={UserIcon} alt='play' />
                    <div>
                        <h3>{mediaDetails?.title}</h3>
                        {userInfo.role !== 'User' && <small>{mediaDetails?.publisher_fullname}</small>}
                    </div>
                </div>
                <div className='left_field'>
                    <div className='like'>
                        <Image className='icon' src={HeartIcon} alt='play' onClick={() => addFavoritHandler(mediaDetails?.id)} />
                    </div>
                    <div className='rate'>
                        <p>5 / {mediaDetails?.score} </p>
                        <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                    </div>
                </div>
            </div>
            <VideoModal status={videoModalStatus} setStatus={setVideoModalStatus} mediaDetails={mediaDetails} />
        </MainField>
    );
};

export default VideoField;
