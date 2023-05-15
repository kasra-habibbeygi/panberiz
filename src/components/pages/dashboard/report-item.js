/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ReportItemField } from './report-item.style';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function ReportItem({ data, index }) {
    const [firstColapseStatus, setFirstColapseStatus] = useState(true);
    const [secondColapseStatus, setsecondColapseStatus] = useState(true);
    const colapsehandler = (setter, status) => {
        //     setter(!status);
    };

    return (
        <ReportItemField open={firstColapseStatus} onClick={() => colapsehandler(setFirstColapseStatus, firstColapseStatus)}>
            <div className='item'>
                <p>{index + 1}</p>
                <p>{data.rank}</p>
                <p>{data.media_count}</p>
                <p>{data.views}</p>
                <div className='colapse_field'>{open ? <ExpandLess /> : <ExpandMore />}</div>
            </div>
            <Collapse className='collapse' in={firstColapseStatus}>
                {data.media_data.map((item, count) => (
                    <ReportItemField
                        key={count}
                        className='sec_colapse_field'
                        onClick={() => colapsehandler(setsecondColapseStatus, secondColapseStatus)}
                    >
                        <div className='collapse-item'>
                            <p>{count + 1}</p>
                            <p>{item.title}</p>
                            <p>{item.views}</p>
                        </div>
                        <Collapse className='collapse' in={secondColapseStatus}>
                            {item.view_history.map((data, secCount) => (
                                <div key={secCount}>
                                    <div className='collapse-item'>
                                        <p>{data.jdate}</p>
                                        <p>{data.user_codemeli}</p>
                                        <p>{data.user_name}</p>
                                    </div>
                                </div>
                            ))}
                        </Collapse>
                    </ReportItemField>
                ))}
            </Collapse>
        </ReportItemField>
    );
}

export default ReportItem;
