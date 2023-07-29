/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

// Component
import EmptyField from '@/components/template/empty-field';
import Tab from '@/components/pages/video/list/tab';
import HeaderField from '@/components/template/header';
import LayoutProvider from '@/components/layout';

// Assets
import play from '@/assets/icons/play.svg';
import accept from '@/assets/icons/accept.svg';
import reject from '@/assets/icons/reject.svg';
import EmptyFieldImg from '../../assets/images/empty/empty-media-list.png';
import { CardField } from '@/components/pages/video/list/card.style';
import { ListVideoField } from '@/components/pages/video/list/list-video.style';

// MUI
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import { Dialog } from '@mui/material';

// API
import {
    GetMyMediaList,
    GetAllMedia,
    GetAllDeactiveMedia,
    UpdateMedia,
    DeleteMedia,
    GetAdminVideos,
    PostAcceptVideo
} from '@/api-request/media/list';
import Button from '@/components/form-group/button';

function Video() {
    const { t } = useTranslation();
    const router = useRouter();
    const [selectedButton, setSelectedButton] = useState('uploaded');
    const [tabsStatus, setTabsStatus] = useState(false);
    const [reload, setReload] = useState(false);
    const [deleteModalStatus, setDeleteModalStatus] = useState(false);
    const [mediaList, setMediaList] = useState([]);
    const [notAcceptedList, setNotAcceptedList] = useState([]);
    const [deactiveMediaList, setDeactiveMediaList] = useState([]);
    const [rejectReason, setRejectReason] = useState('');
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
            GetAdminVideos()
                .then(res => {
                    setNotAcceptedList(res.results);
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

    const changeMediaHandler = (status, id) => {
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
                toast.error(t('An error occurred, please try again!'));
            });
    };

    const deleteSpecificMedia = id => {
        DeleteMedia(id)
            .then(() => {
                setReload(!reload);
            })
            .catch(() => {});
    };

    const handleAcceptVideo = async id => {
        PostAcceptVideo({ media: id })
            .then(res => {
                toast.success(t(res.message));

                GetMyMediaList(router.query.id, userInfo.lang)
                    .then(res => {
                        setMediaList(res.results);
                    })
                    .catch(() => {});
                GetAdminVideos()
                    .then(res => {
                        setNotAcceptedList(res.results);
                    })
                    .catch(() => {});
            })
            .catch(() => {});
    };

    const mediaListProvider = mediaList?.map(item => (
        <div key={item.id} className='card_field'>
            <CardField status={item.media_status}>
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
                        <div>
                            <p>{item?.score}</p>
                            <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                        </div>
                        <DeleteIcon className='deletemedia' onClick={() => deleteSpecificMedia(item.id)} />
                    </div>
                </div>
                {userInfo.role !== 'User' && <small>{item?.publisher_fullname}</small>}
            </CardField>
        </div>
    ));

    const notAceptedListProvider = notAcceptedList?.map(item => (
        <div key={item.id} className='card_field'>
            <CardField status={true}>
                <div className='video_image'>
                    <div className='float'>
                        <Image className='icon' src={accept} alt='accept' onClick={() => handleAcceptVideo(item.id)} />
                    </div>
                    <img
                        className='video_banner'
                        src={item?.cover.replace(
                            'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21',
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
                        <div>
                            <p>{item?.score}</p>
                            <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                        </div>
                        <DeleteIcon className='deletemedia' onClick={() => deleteSpecificMedia(item.id)} />
                    </div>
                </div>
                {userInfo.role !== 'User' && <small>{item?.publisher_fullname}</small>}
            </CardField>
        </div>
    ));

    const deactiveListProvider = deactiveMediaList?.map(item => (
        <div key={item.id} className='card_field'>
            <CardField status={true}>
                <div className='video_image'>
                    <div className='float'>
                        <Image className='icon' src={accept} alt='accept' onClick={() => changeMediaHandler(true, item.id)} />
                        <Image className='icon' src={reject} alt='reject' onClick={() => setDeleteModalStatus(true)} />
                    </div>
                    <img
                        className='video_banner'
                        src={item?.cover.replace(
                            'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21',
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
                {userInfo.role !== 'User' && <small>{item?.publisher_fullname}</small>}
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
                        <>
                            {notAceptedListProvider}
                            {mediaListProvider}
                        </>
                    ) : (
                        <EmptyField img={EmptyFieldImg} title={t('There are no items to display!')} />
                    )
                ) : deactiveMediaList?.length ? (
                    deactiveListProvider
                ) : (
                    <EmptyField img={EmptyFieldImg} title={t('There are no items to display!')} />
                )}
                <Dialog
                    onClose={() => setDeleteModalStatus(false)}
                    open={deleteModalStatus}
                    disablePortal
                    keepMounted
                    fullWidth={true}
                    scroll='body'
                    maxWidth='sm'
                >
                    <div className='delete_modal_field'>
                        <h3>{t('Why do you want to reject this media?')}</h3>
                        <textarea onChange={e => setRejectReason(e.target.value)}></textarea>

                        <div className='button_group'>
                            <Button color='primary' handler={() => changeMediaHandler(false, 1)}>
                                {t('Submit')}
                            </Button>
                            <Button color='dark' handler={() => setDeleteModalStatus(false)}>
                                {t('close the window')}
                            </Button>
                        </div>
                    </div>
                </Dialog>
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