import HeaderField from '@/components/template/header';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

//Assets
import eye from './../../../assets/icons/eye.svg';
import EmptyField from '../../../assets/images/empty/empty-media-list.png';

// Component
import VideoList from './video-list';
import { DashboardTableWrapper } from './dashboard-table.style';

// MUI
import { Button, Dialog } from '@mui/material';

// API
import { GetAdminCategory, GetAgentCategory } from '@/api-request/chart';

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

            {categoryList.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>{t('Index')}</th>
                            <th>{t('Category name')}</th>
                            <th>{t('Category videos count')}</th>
                            <th>{t('Report videos count')}</th>
                            <th>{t('Actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryList?.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index}</td>
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
            ) : (
                <div className='empty_field'>
                    <Image src={EmptyField} alt='' />
                    <p>{t('No report has been registered yet!')}</p>
                </div>
            )}

            <Dialog open={showModal} onClose={closeModalHandler} maxWidth='lg'>
                <VideoList categoryId={categoryId} />
            </Dialog>
        </DashboardTableWrapper>
    );
};

export default DashboardTable;
