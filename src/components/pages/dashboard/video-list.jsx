/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import HeaderField from '@/components/template/header';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

//Assets
import eye from '@/assets/icons/eye.svg';
import { DashboardTableWrapper, VideoListWrapper } from './dashboard-table.style';

// Components
import UsersList from './users_list';
import PaginationField from '@/components/template/pagination';

// MUI
import { Button, Dialog } from '@mui/material';

// APIs
import { GetAdminVideo, GetAgentVideo } from '@/api-request/chart';

// Tools
import Tools from '@/tools/utils';

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
                            <th>{t('Index')}</th>
                            <th>{t('Video name')}</th>
                            <th>{t('Views count')}</th>
                            <th>{t('Actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videoList?.map((item, index) => (
                            <tr key={item.id}>
                                <td>{Tools.tableRowCounter(pageStatus.current, index, 10)}</td>
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
                <PaginationField paginationStatus={pageStatus} setPaginationStatus={setPageStatus} />
                <Dialog open={showModal} onClose={closeModalHandler} maxWidth='lg'>
                    <UsersList videoId={videoId} />
                </Dialog>
            </DashboardTableWrapper>
        </VideoListWrapper>
    );
};

export default VideoList;
