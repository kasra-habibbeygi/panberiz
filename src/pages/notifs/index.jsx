import { NotificationsWrapper } from '@/assets/styles/notifications.style';
import LayoutProvider from '@/components/layout';
import { Pagination } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

const Notifications = () => {
    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });
    const { t } = useTranslation();

    return (
        <LayoutProvider>
            <NotificationsWrapper>
                <p className='title'>{t('All notification')}</p>
                <div className='item'>
                    <p className='message'>{t('Video declined')}</p>
                    <p className='message'>{t('Deny reason')} : </p>
                    <button className='notifs_button'>{t('Mark as read')}</button>
                </div>
                <div className='item'>
                    <p className='message'>{t('Video declined')}</p>
                    <p className='message'>{t('Deny reason')} : </p>
                    <button className='notifs_button'>{t('Mark as read')}</button>
                </div>
                <div className='item'>
                    <p className='message'>{t('Video declined')}</p>
                    <p className='message'>{t('Deny reason')} : </p>
                    <p className='read'>✔ {t('read')}</p>
                </div>
                <div className='item'>
                    <p className='message'>{t('Video declined')}</p>
                    <p className='message'>{t('Deny reason')} : </p>
                    <button className='notifs_button'>{t('Mark as read')}</button>
                </div>
                <div className='item'>
                    <p className='message'>{t('Video declined')}</p>
                    <p className='message'>{t('Deny reason')} : </p>
                    <p className='read'>✔ {t('read')}</p>
                </div>
                <div className='item'>
                    <p className='message'>{t('Video declined')}</p>
                    <p className='message'>{t('Deny reason')} : </p>
                    <button className='notifs_button'>{t('Mark as read')}</button>
                </div>

                <div className='pagination_wrapper'>
                    <Pagination
                        color='primary'
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
            </NotificationsWrapper>
        </LayoutProvider>
    );
};

export default Notifications;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
