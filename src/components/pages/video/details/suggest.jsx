/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

// Assets
import { MainField } from './suggest.style';
import { CardField } from '../list/card.style';
import play from '@/assets/icons/play.svg';

// Component
import HeaderField from '@/components/template/header';

const SuggestVideo = ({mediaDetails}) => {
    const { t } = useTranslation();
    const userInfo = useSelector(state => state.UserInfo);

    return (
        mediaDetails?.prerequisites_info?.length ?
            <MainField>
                <HeaderField title={t('Prerequisite videos')} />
                <div className='main_field'>
                    {mediaDetails?.prerequisites_info?.map(item => (
                        <div key={item.id} className='card_field'>
                            <CardField status={true}>
                                <div className='video_image'>
                                    <div className='float'>
                                        <Link href={`/video/details/${item.id}`}>
                                            <Image className='icon' src={play} alt='play' />
                                        </Link>
                                    </div>
                                    <img
                                        className='video_banner'
                                        src={item?.cover.replace('http', 'https')}                                    
                                        alt='video-banner'
                                    />
                                </div>
                                <div className='card_details'>
                                    <div className='right_field'>
                                        <h3>{item?.title}</h3>
                                        <p>{item?.des}</p>
                                    </div>
                                </div>                             
                                {userInfo.role !== 'User' && <small>{item?.publisher_fullname}</small>}
                            </CardField>
                        </div>
                    ))}
                </div>
            </MainField> : ''
    );
};

export default SuggestVideo;
