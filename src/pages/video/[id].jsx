/* eslint-disable @next/next/no-img-element */
import LayoutProvider from '@/components/layout';
import { useEffect, useState } from 'react';
import Tab from '@/components/pages/video/list/tab';
import HeaderField from '@/components/template/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetUserMediaList } from '@/api-request/media/list';
import { useSelector } from 'react-redux';
import { ListVideoField } from '@/components/pages/video/list/list-video.style';
import { CardField } from '@/components/pages/video/list/card.style';
import Link from 'next/link';
import Image from 'next/image';
import play from '@/assets/icons/play.svg';
import { useTranslation } from 'next-i18next';
import StarIcon from '@mui/icons-material/Star';
import EmptyFieldImg from '../../assets/images/empty/empty-media-list.png';
import EmptyField from '@/components/template/empty-field';

function UserVideo() {
    const { t } = useTranslation();
    const router = useRouter();
    const [selectedButton, setSelectedButton] = useState('uploaded');
    const userInfo = useSelector(state => state.UserInfo);
    const [mediaList, setMediaList] = useState([]);
    const selectButton = selected => {
        setSelectedButton(selected);
    };

    useEffect(() => {
        GetUserMediaList(router.query.id, userInfo.lang)
            .then(res => {
                setMediaList(res.results);
            })
            .catch(() => {});
    }, [router.query.id, userInfo.lang]);

    return (
        <LayoutProvider>
            <HeaderField title={t('Video')} />
            {userInfo === 'SuperAdminAcademy' && <Tab selectButton={selectButton} selectedButton={selectedButton} />}
            <ListVideoField>
                {mediaList.length === 0 ? (
                    <EmptyField img={EmptyFieldImg} title={t('There are no items to display!')} />
                ) : (
                    mediaList?.map(item => (
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
                                            'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21/',
                                            'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir/'
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
                    ))
                )}
            </ListVideoField>
        </LayoutProvider>
    );
}

export default UserVideo;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
