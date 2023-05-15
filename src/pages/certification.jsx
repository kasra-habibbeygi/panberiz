/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import LayoutProvider from '@/components/layout';
import { useEffect, useState } from 'react';
import HeaderField from '@/components/template/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetCertificationList } from '@/api-request/certification';
import { useSelector } from 'react-redux';
import { ListVideoField } from '@/components/pages/video/list/list-video.style';
import { CardField } from '@/components/pages/video/list/card.style';
import { useTranslation } from 'next-i18next';
import StarIcon from '@mui/icons-material/Star';
import EmptyFieldImg from '../assets/images/empty/empty-media-list.png';
import EmptyField from '@/components/template/empty-field';

function Video() {
    const { t } = useTranslation();
    const router = useRouter();
    const [certificateList, setCertificateList] = useState([]);
    const userInfo = useSelector(state => state.UserInfo);

    useEffect(() => {
        GetCertificationList(userInfo.lang)
            .then(res => {
                setCertificateList(res.results);
            })
            .catch(() => {});
    }, [router.query.id, userInfo.lang, userInfo.role]);

    const mediaListProvider = certificateList?.map(item => (
        <div key={item.id} className='card_field'>
            <CardField>
                <div className='video_image'>
                    {/* <div className='float'>
                        <Link href={`/video/details/${item.id}`}>
                            <Image className='icon' src={play} alt='play' />
                        </Link>
                    </div> */}
                    <img
                        className='video_banner'
                        src={item?.cover.replace(
                            'ftp://pmlm@fileacademy.pmlm.ir:%7DW7,-iI%7Bg;sh@31.25.90.38:21',
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
                    <div className='left_field'>
                        <p>{item?.score}</p>
                        <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                    </div>
                </div>
                <small>{item?.publisher_fullname}</small>
            </CardField>
        </div>
    ));

    return (
        <LayoutProvider>
            <HeaderField title={t('Certification')} />
            <ListVideoField>
                {certificateList?.length ? mediaListProvider : <EmptyField img={EmptyFieldImg} title='هیچ ویدیو وجود ندارد !' />}
            </ListVideoField>
        </LayoutProvider>
    );
}

export default Video;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
