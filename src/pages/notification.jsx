import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

//Axios
import { GetNotificationList } from '@/api-request/notification';
import { EditNotificationList } from '@/api-request/notification';

// Assets
import { NotificationsWrapper } from '@/assets/styles/notifications.style';

// MUI
import LayoutProvider from '@/components/layout';
import { Pagination } from '@mui/material';

const Notifications = () => {
    const { t } = useTranslation();
    const [NotifDataList, setNotifDataList] = useState([]);
    const [reload, setReload] = useState(false);
    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        GetNotificationList('5').then(res => {
            setNotifDataList(res);
        });
    }, [reload]);

    const reactNotifHandler = pk => {
        EditNotificationList(pk).then(() => {
            setReload(!reload);
        });
    };

    return (
        <LayoutProvider>
            <NotificationsWrapper>
                <p className='title'>{t('All notification')}</p>
                {NotifDataList?.map(item => (
                    <div className='item' key={item.id}>
                        <p className='message header'>{item.about_object}</p>
                        {item.message ? (
                            <div>
                                <p className='message'>{item.message}</p>
                            </div>
                        ) : (
                            ''
                        )}
                        {item.is_read ? (
                            <p className='read'>✔ {t('read')}</p>
                        ) : (
                            <button className='notifs_button' onClick={() => reactNotifHandler(item.id)}>
                                {t('Mark as read')}
                            </button>
                        )}
                    </div>
                ))}

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
