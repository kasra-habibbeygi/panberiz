/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import Link from 'next/link';

// Assets
import * as Style from './card.style';
import play from '@/assets/icons/play.svg';
import accept from '@/assets/icons/accept.svg';
import reject from '@/assets/icons/reject.svg';

function Card({ data, accepted }) {
    return (
        <Style.CardField status={true}>
            <div className='video_image'>
                <div className='float'>
                    {accepted ? (
                        <Link href={`video/details/${data.media}`}>
                            <Image className='icon' src={play} alt='play' />
                        </Link>
                    ) : (
                        <>
                            <Image className='icon' src={accept} alt='accept' />
                            <Image className='icon' src={reject} alt='reject' />
                        </>
                    )}
                </div>
                <img className='video_banner' src={data?.media_info?.cover?.replace('http', 'https')} alt='video-banner' />
            </div>
            <div className='card_details'>
                <div className='right_field'>
                    <h3>{data?.media_info?.title}</h3>
                    <p>{data?.des}</p>
                </div>
                <div className='left_field'>
                    <p>{data?.star}</p>
                </div>
            </div>
        </Style.CardField>
    );
}

export default Card;
