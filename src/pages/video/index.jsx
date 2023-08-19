/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { loaderStatusHandler } from '@/state-manager/reducer/utils';

// Component
import EmptyField from '@/components/template/empty-field';
import Tab from '@/components/pages/video/list/tab';
import HeaderField from '@/components/template/header';
import LayoutProvider from '@/components/layout/layout-provider';
import Button from '@/components/form-group/button';
import AutoComplete from '@/components/form-group/auto-complete';

// Assets
import play from '@/assets/icons/play.svg';
import accept from '@/assets/icons/accept.svg';
import reject from '@/assets/icons/reject.svg';
import EmptyFieldImg from '../../assets/images/empty/empty-media-list.png';
import { CardField } from '@/components/pages/video/list/card.style';
import { FiltersWrapper, ListVideoField } from '@/components/pages/video/list/list-video.style';

// MUI
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import StarIcon from '@mui/icons-material/Star';
import { Dialog } from '@mui/material';

// API
import {
    GetMyMediaList,
    GetAllMedia,
    GetAllDeactiveMedia,
    UpdateMedia,
    DeleteSuperAdminMedia,
    GetAdminVideos,
    PostAcceptVideo,
    DeleteAgentMedia
} from '@/api-request/media/list';
import PaginationField from '@/components/template/pagination';

function Video() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const [selectedButton, setSelectedButton] = useState('uploaded');
    const [tabsStatus, setTabsStatus] = useState(false);
    const [reload, setReload] = useState(false);
    const [deleteModalStatus, setDeleteModalStatus] = useState(false);
    const [mediaList, setMediaList] = useState([]);
    const [notAcceptedList, setNotAcceptedList] = useState([]);
    const [deactiveMediaList, setDeactiveMediaList] = useState([]);
    const [rejectReason, setRejectReason] = useState('');
    const [statusFilter, setStatusFilter] = useState(null);
    const [viewsFilter, setViewsFilter] = useState(null);
    const [sortFilter, setSortFilter] = useState(null);
    const [deactiveSpecificId, setDeactiveSpecificId] = useState();
    const userInfo = useSelector(state => state.UserInfo);
    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        let filterParams = `&page=${pageStatus.current}`;

        if (statusFilter?.value) {
            filterParams += `&media_status=${statusFilter?.value}`;
        }
        if (viewsFilter?.value === 'seen') {
            filterParams += '&is_viewed=true';
        }
        if (viewsFilter?.value === 'unseen') {
            filterParams += '&is_viewed=false';
        }
        if (sortFilter?.value === 'oldest') {
            filterParams += '&oldest=true';
        }
        if (sortFilter?.value === 'newest') {
            filterParams += '&newest=true';
        }
        if (sortFilter?.value === 'score') {
            filterParams += '&score=true';
        }

        if (userInfo.role === 'SuperAdminAcademy') {
            dispatch(loaderStatusHandler(true));
            GetAllMedia(userInfo.lang, filterParams)
                .then(res => {
                    setMediaList(res.results);
                    setPageStatus(prev => ({
                        ...prev,
                        total: res.total_page
                    }));
                })
                .catch(() => {})
                .finally(() => {
                    dispatch(loaderStatusHandler(false));
                });

            GetAllDeactiveMedia(userInfo.lang)
                .then(res => {
                    setDeactiveMediaList(res.results);
                })
                .catch(() => {});
        } else if (userInfo.role === 'AgentAcademy') {
            dispatch(loaderStatusHandler(true));
            GetMyMediaList(userInfo.lang, filterParams)
                .then(res => {
                    setMediaList(res.results);
                    setPageStatus(prev => ({
                        ...prev,
                        total: res.total_page
                    }));
                })
                .catch(() => {})
                .finally(() => {
                    dispatch(loaderStatusHandler(false));
                });

            GetAdminVideos()
                .then(res => {
                    setNotAcceptedList(res.results);
                })
                .catch(() => {});
        }

        if (userInfo.role === 'AdminAcademy' || userInfo.role === 'User') {
            router.push('/dashboard');
        }
    }, [router.query.id, userInfo.lang, userInfo.role, reload, pageStatus.current, sortFilter, viewsFilter, statusFilter]);

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy') {
            setTabsStatus(true);
        }
    }, [userInfo]);

    const changeMediaHandler = (status, id) => {
        dispatch(loaderStatusHandler(true));
        const data = {
            media_status: status ? 'accepted' : 'failed',
            message: status ? '' : rejectReason
        };

        UpdateMedia(id, data)
            .then(() => {
                setReload(!reload);
                toast.success(t('Successfully updated!'));

                if (!status) {
                    setDeleteModalStatus(false);
                }
            })
            .catch(() => {
                toast.error(t('An error occurred, please try again!'));
            })
            .finally(() => {
                dispatch(loaderStatusHandler(false));
            });
    };

    const deleteSpecificMedia = id => {
        dispatch(loaderStatusHandler(true));
        if (userInfo.role === 'SuperAdminAcademy') {
            DeleteSuperAdminMedia(id)
                .then(() => {
                    setReload(!reload);
                })
                .catch(() => {})
                .finally(() => {
                    dispatch(loaderStatusHandler(false));
                });
        } else {
            DeleteAgentMedia(id)
                .then(() => {
                    setReload(!reload);
                })
                .catch(() => {})
                .finally(() => {
                    dispatch(loaderStatusHandler(false));
                });
        }
    };

    const handleAcceptVideo = async id => {
        dispatch(loaderStatusHandler(true));
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
            .catch(() => {})
            .finally(() => {
                dispatch(loaderStatusHandler(false));
            });
    };

    const mediaListProvider = mediaList?.map(item => (
        <div key={item.id} className='card_field'>
            <CardField status={item.media_status}>
                <div className='video_image'>
                    {userInfo.role === 'AgentAcademy' && (
                        <p className='media_status_pill'>
                            {item.media_status === 'pending'
                                ? t('Pending')
                                : item.media_status === 'failed'
                                ? t('Rejected')
                                : t('Accepted')}
                        </p>
                    )}
                    <div className='float'>
                        <Link href={`/video/details/${item.id}`}>
                            <Image className='icon' src={play} alt='play' />
                        </Link>
                        <DeleteIcon className='deletemedia' onClick={() => deleteSpecificMedia(item.id)} />
                        <Link href={`/video/edit/${item.id}`}>
                            <ModeEditOutlineIcon className='editMedia' />
                        </Link>
                    </div>
                    <img className='video_banner' src={item?.cover?.replace('http', 'https')} alt='video-banner' />
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
                        <Link href={`/video/details/${item.id}`}>
                            <Image className='icon' src={play} alt='play' />
                        </Link>
                    </div>
                    <img className='video_banner' src={item?.cover?.replace('http', 'https')} alt='video-banner' />
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
                        <Link href={`/video/edit/${item.id}`}>
                            <ModeEditOutlineIcon className='editMedia' />
                        </Link>
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
                        <Image
                            className='icon'
                            src={reject}
                            alt='reject'
                            onClick={() => {
                                setDeleteModalStatus(true);
                                setDeactiveSpecificId(item.id);
                            }}
                        />
                        <Link href={`/video/details/${item.id}`}>
                            <Image className='icon' src={play} alt='play' />
                        </Link>
                    </div>
                    <img className='video_banner' src={item?.cover?.replace('http', 'https')} alt='video-banner' />
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

    const autoCompleteHandler = (e, name) => {
        setPageStatus({
            ...pageStatus,
            current: 1
        });
        if (name === 'status') {
            setStatusFilter(e);
        } else if (name === 'views') {
            setViewsFilter(e);
        } else {
            setSortFilter(e);
        }
    };

    const options1 = [
        {
            label: t('Accepted'),
            value: 'accepted'
        },
        {
            label: t('Rejected'),
            value: 'failed'
        },
        {
            label: t('Pending'),
            value: 'pending'
        }
    ];

    const options2 = [
        {
            label: t('Not Seen'),
            value: 'unseen'
        },
        {
            label: t('Seen'),
            value: 'seen'
        }
    ];

    const options3 = [
        {
            label: t('Newest'),
            value: 'newest'
        },
        {
            label: t('Oldest'),
            value: 'oldest'
        },
        {
            label: t('Highest score'),
            value: 'score'
        }
    ];

    return (
        <LayoutProvider>
            <HeaderField title={t('Video')} />
            {tabsStatus && <Tab selectButton={name => setSelectedButton(name)} selectedButton={selectedButton} />}
            {userInfo.role !== 'SuperAdminAcademy' && (
                <FiltersWrapper>
                    <div className='selects_wrapper'>
                        <div className='options_wrapper'>
                            <AutoComplete
                                placeholder={t('Based on status')}
                                value={statusFilter}
                                name='status'
                                valueHandler={autoCompleteHandler}
                                options={options1}
                            />
                        </div>
                        <div className='options_wrapper'>
                            <AutoComplete
                                placeholder={t('Based on observation')}
                                value={viewsFilter}
                                name='views'
                                valueHandler={autoCompleteHandler}
                                options={options2}
                            />
                        </div>
                        <div className='options_wrapper'>
                            <AutoComplete
                                placeholder={t('Sorting')}
                                value={sortFilter}
                                name='filter'
                                valueHandler={autoCompleteHandler}
                                options={options3}
                            />
                        </div>
                    </div>
                </FiltersWrapper>
            )}

            <ListVideoField>
                {selectedButton === 'uploaded' ? (
                    mediaList?.length || notAceptedListProvider.length ? (
                        <>
                            {notAceptedListProvider}
                            {mediaListProvider}
                            <PaginationField paginationStatus={pageStatus} setPaginationStatus={setPageStatus} />
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
                            <Button color='primary' handler={() => changeMediaHandler(false, deactiveSpecificId)}>
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
