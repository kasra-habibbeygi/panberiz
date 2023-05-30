/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import LayoutProvider from '@/components/layout';
import { useEffect, useState } from 'react';
import Tab from '@/components/pages/video/list/tab';
import HeaderField from '@/components/template/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetMyMediaList, GetAllMedia, GetAllDeactiveMedia, UpdateMedia, DeleteMedia } from '@/api-request/media/list';
import { useSelector } from 'react-redux';
import { ListVideoField } from '@/components/pages/video/list/list-video.style';
import { CardField } from '@/components/pages/video/list/card.style';
import Link from 'next/link';
import Image from 'next/image';
import play from '@/assets/icons/play.svg';
import { useTranslation } from 'next-i18next';
import StarIcon from '@mui/icons-material/Star';
import accept from '@/assets/icons/accept.svg';
import reject from '@/assets/icons/reject.svg';
import { toast } from 'react-hot-toast';
import EmptyFieldImg from '../../assets/images/empty/empty-media-list.png';
import EmptyField from '@/components/template/empty-field';
import DeleteIcon from '@mui/icons-material/Delete';

function Video() {
    const { t } = useTranslation();
    const router = useRouter();
    const [selectedButton, setSelectedButton] = useState('uploaded');
    const [tabsStatus, setTabsStatus] = useState(false);
    const [mediaList, setMediaList] = useState([]);
    const [deactiveMediaList, setDeactiveMediaList] = useState([]);
    const [reload, setReload] = useState(false);
    const userInfo = useSelector(state => state.UserInfo);

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy') {
            GetAllMedia(userInfo.lang)
                .then(res => {
                    setMediaList(res.results);
                })
                .catch(() => {});

            GetAllDeactiveMedia(userInfo.lang)
                .then(res => {
                    setDeactiveMediaList(res.results);
                })
                .catch(() => {});
        } else if (userInfo.role === 'AgentAcademy') {
            GetMyMediaList(router.query.id, userInfo.lang)
                .then(res => {
                    setMediaList(res.results);
                })
                .catch(() => {});
        }

        if (userInfo.role === 'AdminAcademy' || userInfo.role === 'User') {
            router.push('/dashboard');
        }
    }, [router.query.id, userInfo.lang, userInfo.role, reload]);

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy') {
            setTabsStatus(true);
        }
    }, [userInfo]);

    const changeMediahandler = (status, id) => {
        const data = {
            is_delete: !status,
            media_status: status
        };

        UpdateMedia(id, data)
            .then(() => {
                setReload(!reload);
                toast.success(t('Successfully updated!'));
            })
            .catch(() => {
                toast.success(t('An error occurred, please try again!'));
            });
    };

    const deletespecificMedia = id => {
        DeleteMedia(id)
            .then(() => {
                setReload(!reload);
            })
            .catch(() => {});
    };

    const mediaListProvider = mediaList?.map(item => (
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
                        <div>
                            <p>{item?.score}</p>
                            <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                        </div>
                        <DeleteIcon className='deletemedia' onClick={() => deletespecificMedia(item.id)} />
                    </div>
                </div>
                <small>{item?.publisher_fullname}</small>
            </CardField>
        </div>
    ));

    const deactiveListProvider = deactiveMediaList?.map(item => (
        <div key={item.id} className='card_field'>
            <CardField>
                <div className='video_image'>
                    <div className='float'>
                        <Image className='icon' src={accept} alt='accept' onClick={() => changeMediahandler(true, item.id)} />
                        <Image className='icon' src={reject} alt='reject' onClick={() => changeMediahandler(false, item.id)} />
                    </div>
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
            <HeaderField title={t('Video')} />
            {tabsStatus && <Tab selectButton={name => setSelectedButton(name)} selectedButton={selectedButton} />}
            <ListVideoField>
                {selectedButton === 'uploaded' ? (
                    mediaList?.length ? (
                        mediaListProvider
                    ) : (
                        <EmptyField img={EmptyFieldImg} title={t('There are no items to display!')} />
                    )
                ) : deactiveMediaList?.length ? (
                    deactiveListProvider
                ) : (
                    <EmptyField img={EmptyFieldImg} title={t('There are no items to display!')} />
                )}
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
