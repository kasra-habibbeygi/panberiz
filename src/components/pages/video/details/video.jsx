/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

// Assets
import { MainField } from './video.style';
import UserIcon from '@/assets/icons/user.svg';
import HeartIcon from '@/assets/icons/heart.svg';

// MUI
import StarIcon from '@mui/icons-material/Star';

// APIs
import { AddNewFavorits, GetFavoritsList } from '@/api-request/favorit';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

const VideoField = ({ mediaDetails, favoritsList }) => {
    const { t } = useTranslation();
    const userInfo = useSelector(state => state.UserInfo);
    const [isFavorit, setIsFavorit] = useState(false);
    const [reload, setReload] = useState(false);

    const addFavoritHandler = id => {
        if (isFavorit !== true) {
            AddNewFavorits({
                media: id,
                user: userInfo.id
            })
                .then(() => {
                    toast.success(t('Added to the list of favorites!'));
                    setReload(!reload);
                })
                .catch(() => {
                    toast.error(t('An error occurred, please try again!'));
                });
        }
    };

    useEffect(() => {
        GetFavoritsList()
            .then(res => {
                const temp = res.results.map(item => {
                    if (item.media_info.id === mediaDetails?.id) {
                        return true;
                    }
                });

                setIsFavorit(temp.length > 0 ? temp[0] : false);
            })
            .catch(() => {});
    }, [favoritsList, reload]);

    return (
        <MainField>
            {mediaDetails?.media_type === 'video' ? (
                <div className='video_image'>
                    <video controls id='slider_video_player' poster={mediaDetails?.cover?.replace('http', 'https')}>
                        <source src={mediaDetails?.get_video_info?.data?.video_url} type='video/mp4' />
                    </video>
                </div>
            ) : (
                <>
                    <iframe src={mediaDetails?.file?.replace('http', 'https')} width='100%' height='500px' />
                    <a href={mediaDetails?.file?.replace('http', 'https')} target='_blank' className='download_field' rel='noreferrer'>
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
                    {userInfo.role === 'User' && (
                        <div className={`like ${isFavorit ? 'red_heart' : ''}`}>
                            <Image className='icon' src={HeartIcon} alt='play' onClick={() => addFavoritHandler(mediaDetails?.id)} />
                        </div>
                    )}
                    <div className='rate'>
                        <p>5 / {mediaDetails?.score} </p>
                        <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                    </div>
                </div>
            </div>
        </MainField>
    );
};

export default VideoField;
