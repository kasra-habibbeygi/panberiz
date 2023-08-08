/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

//Assets
import { DashboardTableWrapper, VideoListWrapper } from './dashboard-table.style';

// APIs
import { GetAdminUsers, GetAgentUser } from '@/api-request/chart';

// MUI
import { Pagination } from '@mui/material';

// Tools
import Tools from '@/tools/utils';

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
            GetAdminUsers(videoId, pageStatus.current).then(res => {
                setUsersList(res.results);
                setPageStatus({
                    current: pageStatus.current,
                    total: res.total_page
                });
            });
        }
        if (userInfo.role === 'AgentAcademy') {
            GetAgentUser(videoId, pageStatus.current).then(res => {
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
                            <th>{t('Index')}</th>
                            <th>{t('Username')}</th>
                            <th>{t('Date seen')}</th>
                            <th>{t('Test score')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.map((item, index) => (
                            <tr key={item.id}>
                                <td>{Tools.tableRowCounter(pageStatus.current, index, 10)}</td>
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
