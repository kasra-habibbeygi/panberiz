import HeaderField from '@/components/template/header';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

//Assets
import eye from './../../../assets/icons/eye.svg';
import { DashboardTableWrapper, VideoListWrapper } from './dashboard-table.style';
import { Button, Dialog, Pagination } from '@mui/material';
import { useState } from 'react';
import UsersList from './users_list';
import Link from 'next/link';

const VideoList = () => {
    const [showModal, setShowModal] = useState(false);
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
                        <tr>
                            <td>1</td>
                            <td>
                                <Link href={'/'}>عنوان ویدیو</Link>
                            </td>
                            <td>236</td>
                            <td>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    onClick={() => openModalHandler()}
                                    sx={{ textTransform: 'none' }}
                                >
                                    {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <Link href={'/'}>عنوان ویدیو</Link>
                            </td>
                            <td>236</td>
                            <td>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    onClick={() => openModalHandler()}
                                    sx={{ textTransform: 'none' }}
                                >
                                    {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <Link href={'/'}>عنوان ویدیو</Link>
                            </td>
                            <td>236</td>
                            <td>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    onClick={() => openModalHandler()}
                                    sx={{ textTransform: 'none' }}
                                >
                                    {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <Link href={'/'}>عنوان ویدیو</Link>
                            </td>
                            <td>236</td>
                            <td>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    onClick={() => openModalHandler()}
                                    sx={{ textTransform: 'none' }}
                                >
                                    {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <Link href={'/'}>عنوان ویدیو</Link>
                            </td>
                            <td>236</td>
                            <td>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    onClick={() => openModalHandler()}
                                    sx={{ textTransform: 'none' }}
                                >
                                    {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                                </Button>
                            </td>
                        </tr>
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
                    <UsersList />
                </Dialog>
            </DashboardTableWrapper>
        </VideoListWrapper>
    );
};

export default VideoList;
