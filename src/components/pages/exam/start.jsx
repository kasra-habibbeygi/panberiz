import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Assets
import { MainField } from './start.style';
import RocketImg from '@/assets/images/video/rocket.png';

// Component
import Button from '@/components/form-group/button';
import { GetMediaDetails } from '@/api-request/media/details';

const StartExam = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const userInfo = useSelector(state => state.UserInfo);
    const [mediaDetails, setMediaDetails] = useState([]);

    useEffect(() => {
        GetMediaDetails(router.query.id, userInfo.lang, userInfo.role)
            .then(res => {
                setMediaDetails(res.results[0]);
            })
            .catch(() => {});
    }, [router.query.id, userInfo.lang, userInfo.role]);

    return (
        <MainField>
            <div className='title'>
                <h3>
                    {t('Quiz')} {mediaDetails?.title}
                </h3>
                <p>
                    {mediaDetails?.media_quiezes?.length} {t('Question')} - {mediaDetails?.the_duration_of_the_test} {t('Minutes')}
                </p>
            </div>
            <Image src={RocketImg} alt='' />
            <Button type='filled' color='primary'>
                <Link href={`/exam/questions/${router.query.id}`}>{t('Start exam')}</Link>
            </Button>
        </MainField>
    );
};

export default StartExam;
