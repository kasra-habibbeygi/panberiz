/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ReportItemField } from './report-item.style';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function ReportItem({ data, index }) {
    const [firstCollapseStatus, setFirstCollapseStatus] = useState(true);
    const [secondCollapseStatus, setsecondCollapseStatus] = useState(true);
    const [rowIndex, setRowIndex] = useState();
    const colapsehandler = (setter, status, count = '') => {
        setter(!status);

        console.log(count, rowIndex);

        if (count !== '') {
            setRowIndex(count);
        }
        if (rowIndex === count) {
            setRowIndex('');
        }
    };

    return (
        <ReportItemField fistCollpaseStatus={firstCollapseStatus} secondCollapseStatus={secondCollapseStatus}>
            <div className='item' onClick={() => colapsehandler(setFirstCollapseStatus, firstCollapseStatus)}>
                <p>{index + 1}</p>
                <p>{data.rank}</p>
                <p>{data.media_count}</p>
                <p>{data.views}</p>
                <div className='colapse_field'>{firstCollapseStatus ? <ExpandLess /> : <ExpandMore />}</div>
            </div>
            <div className='collapse'>
                {data.media_data.map((item, count) => (
                    <ReportItemField key={count} className='sec_colapse_field'>
                        <div
                            className='collapse-item'
                            onClick={() => item.view_history.length && colapsehandler(setsecondCollapseStatus, secondCollapseStatus, count)}
                        >
                            <p>{count + 1}</p>
                            <p>{item.title}</p>
                            <p>{item.views}</p>
                            <div className='colapse_field'>
                                {item.view_history.length ? firstCollapseStatus ? <ExpandLess /> : <ExpandMore /> : ''}
                            </div>
                        </div>
                        {rowIndex === count && (
                            <div className='sub_collapse'>
                                {item.view_history.map((data, secCount) => (
                                    <div key={secCount} style={{ width: '100%' }}>
                                        <div className='collapse-item'>
                                            <p>{data.jdate}</p>
                                            <p>{data.user_codemeli}</p>
                                            <p>{data.user_name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ReportItemField>
                ))}
            </div>
        </ReportItemField>
    );
}

export default ReportItem;
