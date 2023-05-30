/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { useTranslation } from 'next-i18next';

// Assets
import { MainField } from './suggest.style';

// Component
import HeaderField from '@/components/template/header';
import { CardField } from '../list/card.style';
import Link from 'next/link';
import Image from 'next/image';
import play from '@/assets/icons/play.svg';
// import StarIcon from '@mui/icons-material/Star';

const SuggestVideo = ({mediaDetails}) => {
    const { t } = useTranslation();
    return (
        <MainField>
            <HeaderField title={t('Prerequisite videos')} />
            <div className='main_field'>
                {mediaDetails?.prerequisites_info.map(item => (
                    <div key={item.id} className='card_field'>
                        <CardField>
                            <div className='video_image'>
                                <div className='float'>
                                    <Link href={`/video/details/${item.id}`}>
                                        <Image className='icon' src={play} alt='play' />
                                    </Link>
                                </div>
                                <img
                                    className='video_banner'
                                    src={item?.cover.replace(
                                        'http://127.0.0.1:88ftp://pmlm@fileacademy.pmlm.ir:}W7,-iI{g;sh@31.25.90.38:21',
                                        'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir/pmlm/'
                                    )}
                                    alt='video-banner'
                                />
                            </div>
                            <div className='card_details'>
                                <div className='right_field'>
                                    <h3>{item?.title}</h3>
                                    <p>{item?.des}</p>
                                </div>
                            </div>
                            <small>{item?.publisher_fullname}</small>
                        </CardField>
                    </div>
                ))}
            </div>
        </MainField>
    );
};

export default SuggestVideo;
