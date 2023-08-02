import { useTranslation } from 'next-i18next';

//Assets
import { DashboardTableWrapper, VideoListWrapper } from './dashboard-table.style';
import { Pagination } from '@mui/material';
import { useState } from 'react';

const UsersList = () => {
    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });

    const { t } = useTranslation();

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
                        <tr>
                            <td>1</td>
                            <td>عنوان ویدیو</td>
                            <td>236</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>عنوان ویدیو</td>
                            <td>236</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>عنوان ویدیو</td>
                            <td>236</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>عنوان ویدیو</td>
                            <td>236</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>عنوان ویدیو</td>
                            <td>236</td>
                            <td>17</td>
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
            </DashboardTableWrapper>
        </VideoListWrapper>
    );
};

export default UsersList;
