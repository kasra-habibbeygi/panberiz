/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

// Assets
import { MainField } from './details.style';
import CLockIcon from '@/assets/icons/clock.svg';
import GridsIcon from '@/assets/icons/grids.svg';

// Component
import Button from '@/components/form-group/button';

// MUI
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

const DetailsField = ({ mediaDetails }) => {
    const { t } = useTranslation();
    const userInfo = useSelector(state => state.UserInfo);
    const [examBtnStatus, setExamBtnStatus] = useState(false);

    useEffect(() => {
        setExamBtnStatus(!mediaDetails?.media_quiezes.length && userInfo.role === 'User' ? true : false);
    }, []);

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
                        <span key={index}>#{item}</span>
                    ))}
                </div>
                {examBtnStatus && (
                    <Button color='primary' type='outline'>
                        <Link href={`/exam/${mediaDetails?.id}`}>
                            {t('Start the quiz')}
                            <KeyboardBackspaceRoundedIcon />
                        </Link>
                    </Button>
                )}
            </div>
        </MainField>
    );
};

export default DetailsField;
