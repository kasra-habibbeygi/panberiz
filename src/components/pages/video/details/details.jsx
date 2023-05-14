/* eslint-disable react/prop-types */
// Assets
import Button from '@/components/form-group/button';
import { MainField } from './details.style';
import CLockIcon from '@/assets/icons/clock.svg';
import GridsIcon from '@/assets/icons/grids.svg';

// MUI
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Image from 'next/image';
import Link from 'next/link';

const DetailsField = ({ mediaDetails }) => {
    return (
        <MainField>
            <p className='text'>{mediaDetails?.description}</p>
            <div className='footer_field'>
                <div className='info'>
                    <span>
                        <Image src={CLockIcon} alt='' />
                        {mediaDetails?.jdate}
                    </span>
                    <span>
                        <Image src={GridsIcon} alt='' />
                        {mediaDetails?.category_info.title}
                    </span>
                    {mediaDetails?.tags_name?.map((item, index) => (
                        <span key={index}># {item}</span>
                    ))}
                </div>
                <Button color='primary' type='outline'>
                    <Link href={`/exam/${mediaDetails?.id}`}>
                        شروع کوییز
                        <KeyboardBackspaceRoundedIcon />
                    </Link>
                </Button>
            </div>
        </MainField>
    );
};

export default DetailsField;
