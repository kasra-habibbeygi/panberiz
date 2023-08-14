/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import Image from 'next/image';

// Assets
import CertificateImg from '../assets/images/video/certificate.jpg';
import MainCertificateImg from '../assets/images/video/main-certificate.jpg';
import EmptyFieldImg from '../assets/images/empty/empty-media-list.png';

// Component
import LayoutProvider from '@/components/layout';
import EmptyField from '@/components/template/empty-field';
import HeaderField from '@/components/template/header';
import { CardField } from '@/components/pages/video/list/card.style';
import { ListVideoField } from '@/components/pages/video/list/list-video.style';
import { CertificateField, GapField } from '@/assets/styles/certificate';

// APIs
import { GetCertificationList } from '@/api-request/certification';
import { loaderStatusHandler } from '@/state-manager/reducer/utils';

function Video() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const userInfo = useSelector(state => state.UserInfo);
    const [certificateList, setCertificateList] = useState([]);
    const [certificateData, setCertificateData] = useState();

    const ModalOpenHandler = data => {
        setCertificateData(data);
        handleDownload();
    };

    useEffect(() => {
        dispatch(loaderStatusHandler(true));
        GetCertificationList(userInfo.lang)
            .then(res => {
                setCertificateList(res.results);
            })
            .catch(() => {})
            .finally(() => {
                dispatch(loaderStatusHandler(false));
            });
    }, [router.query.id, userInfo.lang, userInfo.role]);

    const handleDownload = () => {
        document.getElementById('my-node').style.display = 'flex';
        document.getElementById('gap_field').style.display = 'flex';
        htmlToImage
            .toPng(document.getElementById('my-node'), {
                backgroundColor: 'white'
            })
            .then(function (dataUrl) {
                download(dataUrl, 'referral-share-card.jpg');
                document.getElementById('my-node').style.display = 'none';
                document.getElementById('gap_field').style.display = 'none';
            });
    };

    const mediaListProvider = certificateList?.map(item => (
        <div key={item.id} className='card_field'>
            <CardField status={true} pointer={true} onClick={() => ModalOpenHandler(item)}>
                <div className='video_image'>
                    <Image className='video_banner' src={CertificateImg} alt='video-banner' />
                </div>
                <div className='card_details'>
                    <div className='right_field'>
                        <h3>{item?.media_name}</h3>
                        <p>{item?.jdate.replaceAll(',', '/')}</p>
                    </div>
                    <div className='left_field'>
                        <p>
                            {t('score')} : {item?.score}
                        </p>
                        <p>
                            {t('Rank')} : {item?.category_name}
                        </p>
                        <p>
                            {t('Category')} : {item?.category_name}
                        </p>
                    </div>
                </div>
            </CardField>
        </div>
    ));

    return (
        <LayoutProvider>
            <HeaderField title={t('Certification')} />
            <ListVideoField>
                {certificateList?.length ? (
                    mediaListProvider
                ) : (
                    <EmptyField img={EmptyFieldImg} title={t('There are no items to display!')} />
                )}
            </ListVideoField>
            <GapField id='gap_field'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </GapField>
            <CertificateField id='my-node'>
                <Image src={MainCertificateImg} alt='' />
                <h3>{certificateData?.user_full_name}</h3>
                <p className='code_field'>{certificateData?.user_code_meli}</p>
                <p className='rank'>{certificateData?.category_name}</p>
                <p className='time'>
                    {certificateData?.total_time > 60
                        ? `${certificateData?.total_time / 60} ساعت ${certificateData?.total_time % 60} دقیقه`
                        : `${certificateData?.total_time} دقیقه`}
                </p>
                <p className='date'>{certificateData?.jdate.replaceAll(',', '/')}</p>
            </CertificateField>
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
