/* eslint-disable react/prop-types */
import Image from 'next/image';
import * as Style from './card.style';
import StarIcon from '@mui/icons-material/Star';
import play from '../../assets/icons/play.svg';
import accept from '../../assets/icons/accept.svg';
import reject from '../../assets/icons/reject.svg';

function Card({ data, accepted }) {
    const { title, des, image, star } = data;
    return (
        <Style.CardField>
            <Image className='image' src={image} alt='video-banner' />
            <div className='flout'>
                {accepted ? (
                    <Image className='icon' src={play} alt='play' />
                ) : (
                    <>
                        <Image className='icon' src={accept} alt='accept' />
                        <Image className='icon' src={reject} alt='reject' />
                    </>
                )}
            </div>
            <div className='card-des'>
                <div>
                    <h3>{title}</h3>
                    <div>
                        <p>{star}</p>
                        <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                    </div>
                </div>
                <p>{des}</p>
            </div>
        </Style.CardField>
    );
}

export default Card;
