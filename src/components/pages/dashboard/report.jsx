import HeaderField from '@/components/template/header';
import { ReportField } from './report.style';
import ReportItem from './report-item';
import { useTranslation } from 'next-i18next';

function Report() {
    const { t } = useTranslation('common');
    return (
        <ReportField>
            <HeaderField title={t('Rank visit report')} />
            <div className='cards_field'>
                <div className='header_field'>
                    <span>{t('Row')}</span>
                    <span>{t('Rank')}</span>
                    <span>{t('Number of content')}</span>
                    <span>{t('Number of visits')}</span>
                    <span>{t('Hours of visit')}</span>
                    <span>{t('Details')}</span>
                </div>
                <ReportItem />
                <ReportItem />
                <ReportItem />
            </div>
        </ReportField>
    );
}

export default Report;
