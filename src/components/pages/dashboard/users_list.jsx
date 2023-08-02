import HeaderField from '@/components/template/header';
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
                <HeaderField title={t('Video visit report')} />
                <table>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>نام</th>
                            <th>تعداد مشاهده</th>
                            <th>تعداد ویدیو</th>
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
