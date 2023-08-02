import HeaderField from '@/components/template/header';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

//Assets
import eye from './../../../assets/icons/eye.svg';
import { DashboardTableWrapper } from './dashboard-table.style';
import { Button, Dialog } from '@mui/material';
import { useState } from 'react';
import VideoList from './video-list';

//Components

const DashboardTable = () => {
    const [showModal, setShowModal] = useState(false);

    const { t } = useTranslation();

    const closeModalHandler = () => {
        setShowModal(false);
    };

    const openModalHandler = () => {
        setShowModal(true);
    };

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
                    <tr>
                        <td>1</td>
                        <td>عنوان ویدیو</td>
                        <td>236</td>
                        <td>17</td>
                        <td>
                            <Button variant='outlined' color='secondary' onClick={() => openModalHandler()} sx={{ textTransform: 'none' }}>
                                {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>عنوان ویدیو</td>
                        <td>236</td>
                        <td>17</td>
                        <td>
                            <Button variant='outlined' color='secondary' onClick={() => openModalHandler()} sx={{ textTransform: 'none' }}>
                                {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>عنوان ویدیو</td>
                        <td>236</td>
                        <td>17</td>
                        <td>
                            <Button variant='outlined' color='secondary' onClick={() => openModalHandler()} sx={{ textTransform: 'none' }}>
                                {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>عنوان ویدیو</td>
                        <td>236</td>
                        <td>17</td>
                        <td>
                            <Button variant='outlined' color='secondary' onClick={() => openModalHandler()} sx={{ textTransform: 'none' }}>
                                {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>عنوان ویدیو</td>
                        <td>236</td>
                        <td>17</td>
                        <td>
                            <Button variant='outlined' color='secondary' onClick={() => openModalHandler()} sx={{ textTransform: 'none' }}>
                                {t('Visit')} <Image src={eye} alt='visit' className='eye_icon' />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Dialog open={showModal} onClose={closeModalHandler} maxWidth='lg'>
                <VideoList />
            </Dialog>
        </DashboardTableWrapper>
    );
};

export default DashboardTable;
