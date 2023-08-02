/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import HeaderField from '@/components/template/header';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

//Assets
import eye from './../../../assets/icons/eye.svg';
import { DashboardTableWrapper, VideoListWrapper } from './dashboard-table.style';
import { Button, Dialog, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import UsersList from './users_list';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { GetAdminVideo, GetAgentVideo } from '@/api-request/chart';

const VideoList = ({ categoryId }) => {
    const [showModal, setShowModal] = useState(false);
    const [videoList, setVideoList] = useState([]);
    const [videoId, setVideoId] = useState();
    const userInfo = useSelector(state => state.UserInfo);
    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });

    const { t } = useTranslation();

    const closeModalHandler = () => {
        setShowModal(false);
    };

    const openModalHandler = () => {
        setShowModal(true);
    };

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy') {
            GetAdminVideo(userInfo.lang, categoryId, pageStatus.current).then(res => {
                setVideoList(res.results);
                setPageStatus({
                    current: pageStatus.current,
                    total: res.total_page
                });
            });
        }
        if (userInfo.role === 'AgentAcademy') {
            GetAgentVideo(userInfo.lang, categoryId, pageStatus.current).then(res => {
                setVideoList(res.results);
                setPageStatus({
                    current: pageStatus.current,
                    total: res.total_page
                });
            });
        }
    }, [userInfo.lang, userInfo.role, categoryId, pageStatus.current]);

    return (
        <VideoListWrapper>
            <DashboardTableWrapper>
                <HeaderField title={t('Video visit report')} />
                <table>
                    <thead>
                        <tr>
                            <th>{t('index')}</th>
                            <th>{t('Video name')}</th>
                            <th>{t('Views count')}</th>
                            <th>{t('Actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videoList?.map(item => (
                            <tr key={item.id}>
                                <td>1</td>
                                <td>
                                    <Link href={`/video/details/${item.id}`}>{item.title}</Link>
                                </td>
                                <td>{item.views}</td>
                                <td>
                                    <Button
                                        variant='outlined'
                                        color='secondary'
                                        onClick={() => {
                                            openModalHandler();
                                            setVideoId(item.id);
                                        }}
                                        sx={{ textTransform: 'none' }}
                                    >
                                        {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='pagination_wrapper'>
                    <Pagination
                        color='secondary'
                        count={pageStatus.total}
                        page={pageStatus.current}
                        onChange={(_, value) =>
                            setPageStatus(prev => {
                                return {
                                    ...prev,
                                    current: value
                                };
                            })
                        }
                    />
                </div>

                <Dialog open={showModal} onClose={closeModalHandler} maxWidth='lg'>
                    <UsersList videoId={videoId} />
                </Dialog>
            </DashboardTableWrapper>
        </VideoListWrapper>
    );
};

export default VideoList;
