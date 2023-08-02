/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useTranslation } from 'next-i18next';

//Assets
import { DashboardTableWrapper, VideoListWrapper } from './dashboard-table.style';
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { GetAdminUsers, GetAgentUser } from '@/api-request/chart';
import { useSelector } from 'react-redux';

const UsersList = ({ videoId }) => {
    const userInfo = useSelector(state => state.UserInfo);
    const [usersList, setUsersList] = useState([]);
    const { t } = useTranslation();
    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy') {
            GetAdminUsers(userInfo.lang, videoId, pageStatus.current).then(res => {
                setUsersList(res.results);
                setPageStatus({
                    current: pageStatus.current,
                    total: res.total_page
                });
            });
        }
        if (userInfo.role === 'AgentAcademy') {
            GetAgentUser(userInfo.lang, videoId, pageStatus.current).then(res => {
                setUsersList(res.results);
                setPageStatus({
                    current: pageStatus.current,
                    total: res.total_page
                });
            });
        }
    }, [userInfo.lang, userInfo.role, videoId, pageStatus.current]);

    return (
        <VideoListWrapper>
            <DashboardTableWrapper>
                <table>
                    <thead>
                        <tr>
                            <th>{t('index')}</th>
                            <th>{t('Username')}</th>
                            <th>{t('Date seen')}</th>
                            <th>{t('Test score')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.map(item => (
                            <tr key={item.id}>
                                <td>1</td>
                                <td>{item.fullname}</td>
                                <td>{item.date}</td>
                                <td>17</td>
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
            </DashboardTableWrapper>
        </VideoListWrapper>
    );
};

export default UsersList;
