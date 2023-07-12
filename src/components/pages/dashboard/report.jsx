/* eslint-disable react-hooks/exhaustive-deps */
import HeaderField from '@/components/template/header';
import { ReportField } from './report.style';
import ReportItem from './report-item';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// APIs
import { GetAdminChart3Info, GetManagerChart3Info } from '@/api-request/chart';

function Report() {
    const { t } = useTranslation('common');
    const userInfo = useSelector(state => state.UserInfo);
    const [chart3Data, setChart3Data] = useState([]);

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy') {
            GetManagerChart3Info()
                .then(res => {
                    setChart3Data(res.result);
                })
                .catch(() => {});
        }
        if (userInfo.role === 'AdminAcademy' || userInfo.role === 'AgentAcademy') {
            GetAdminChart3Info()
                .then(res => {
                    setChart3Data(res.result);
                    console.log(1);
                })
                .catch(() => {});
        }
    }, [userInfo.role]);

    return (
        <ReportField>
            <HeaderField title={t('Rank visit report')} />
            <div className='cards_field'>
                <div className='header_field'>
                    <span>{t('Row')}</span>
                    <span>{t('Category Name')}</span>
                    <span>{t('Number of content')}</span>
                    <span>{t('Number of visits')}</span>
                </div>
                {chart3Data?.map((item, index) => (
                    <ReportItem key={index} data={item} index={index} />
                ))}
            </div>
        </ReportField>
    );
}

export default Report;
