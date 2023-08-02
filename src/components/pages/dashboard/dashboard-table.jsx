import HeaderField from '@/components/template/header';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

//Assets
import eye from './../../../assets/icons/eye.svg';
import { DashboardTableWrapper } from './dashboard-table.style';
import { Button, Dialog } from '@mui/material';
import { useState } from 'react';
import VideoList from './video-list';
import { useEffect } from 'react';
import { GetAdminCategory, GetAgentCategory } from '@/api-request/chart';
import { useSelector } from 'react-redux';

const DashboardTable = () => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const userInfo = useSelector(state => state.UserInfo);
    const [categoryList, setCategoryList] = useState([]);
    const [categoryId, setCategoryId] = useState();

    const closeModalHandler = () => {
        setShowModal(false);
    };

    const openModalHandler = () => {
        setShowModal(true);
    };

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy') {
            GetAdminCategory(userInfo.lang).then(res => {
                setCategoryList(res);
            });
        }
        if (userInfo.role === 'AgentAcademy') {
            GetAgentCategory(userInfo.lang).then(res => {
                setCategoryList(res);
            });
        }
    }, [userInfo.lang, userInfo.role]);

    return (
        <DashboardTableWrapper>
            <HeaderField title={t('Video visit report')} />
            <table>
                <thead>
                    <tr>
                        <th>{t('index')}</th>
                        <th>{t('Category name')}</th>
                        <th>{t('Category videos count')}</th>
                        <th>{t('Report videos count')}</th>
                        <th>{t('Actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryList?.map(item => (
                        <tr key={item.id}>
                            <td>1</td>
                            <td>{item.title}</td>
                            <td>{item.videos_count}</td>
                            <td>{item.report_videos_count}</td>
                            <td>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    onClick={() => {
                                        openModalHandler();
                                        setCategoryId(item.id);
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

            <Dialog open={showModal} onClose={closeModalHandler} maxWidth='lg'>
                <VideoList categoryId={categoryId} />
            </Dialog>
        </DashboardTableWrapper>
    );
};

export default DashboardTable;
