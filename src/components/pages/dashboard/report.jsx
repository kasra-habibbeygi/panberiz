import HeaderField from '@/components/template/header';
import { ReportField } from './report.style';
import ReportItem from './report-item';

function Report() {
    return (
        <ReportField>
            <HeaderField title='گزارش بازدید رنک ها' />
            <div className='cards_field'>
                <div className='header_field'>
                    <span>ردیف</span>
                    <span>رنک</span>
                    <span>تعداد محتوا</span>
                    <span>تعداد بازدید</span>
                    <span>میزان ساعت بازدید</span>
                    <span>جزئیات</span>
                </div>
                <ReportItem />
                <ReportItem />
                <ReportItem />
            </div>
        </ReportField>
    );
}

export default Report;
