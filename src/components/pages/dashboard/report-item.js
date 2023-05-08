import { useState } from 'react';
import { ReportItemField } from './report-item.style';

function ReportItem() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <ReportItemField open={open} onClick={handleOpen}>
            <p>ردیف</p>
            <p>1</p>
            <p>25</p>
            <p>450</p>
            <p>450</p>
            <p>لورم ایپسوم</p>
            {open && (
                <div className='item-container'>
                    <div className='item'>
                        <p>ردیف</p>
                        <p>1</p>
                        <p>25</p>
                        <p>450</p>
                        <p>450</p>
                        <p>لورم ایپسوم</p>
                    </div>
                </div>
            )}
        </ReportItemField>
    );
}

export default ReportItem;
