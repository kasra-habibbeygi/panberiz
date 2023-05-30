/* eslint-disable react-hooks/exhaustive-deps */
// Component
import { IncomeField } from './income.style';
import ChartArea from './area.chart';
import ChartPie from './pie.chart';

//mui
// import CircleIcon from '@mui/icons-material/Circle';
import AutoComplete from '@/components/form-group/auto-complete';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GetManagerChart1Info, GetAdminChart1Info, GetAdminChart2Info } from '@/api-request/chart';
import { useSelector } from 'react-redux';

function Income() {
    const { t } = useTranslation('common');
    const userInfo = useSelector(state => state.UserInfo);
    const [chart1Data, setChart1Data] = useState([]);
    const [chart2Data, setChart2Data] = useState([]);
    const [selectValue, setSelectValue] = useState([]);
    const [values, setValues] = useState();

    const autoCompleteHandler = e => {
        setValues(e);
    };

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy' || userInfo.role === 'AgentAcademy') {
            GetManagerChart1Info()
                .then(res => {
                    setChart1Data(res.result);
                })
                .catch(() => {});

            GetAdminChart2Info()
                .then(res => {
                    setChart2Data(res.result);

                    const newData = res.result.map(item => ({
                        label: item.rank
                    }));

                    setSelectValue(newData);
                    setValues(newData[0]);
                })
                .catch(() => {});
        }
        if (userInfo.role === 'AdminAcademy') {
            GetAdminChart1Info()
                .then(res => {
                    setChart1Data(res.result);
                })
                .catch(() => {});
        }
    }, []);

    return (
        <IncomeField>
            <div className='line-chart'>
                <div className='header'>
                    <div className='title'>
                        <h1>{t('viewers statistics')}</h1>
                    </div>
                </div>
                <div className='chart'>
                    <ChartArea data={chart1Data.day} />
                </div>
            </div>
            <div className='circle-chart'>
                <div className='select-rank'>
                    <AutoComplete
                        placeholder={t('Rank selection')}
                        value={values}
                        valueHandler={autoCompleteHandler}
                        options={selectValue}
                        name='rank'
                    />
                </div>
                <div className='chart'>
                    <ChartPie data={chart2Data} selectedValue={values?.label} />
                </div>
                {/* <div className='flags'>
                    <div className='section'>
                        <div>
                            <CircleIcon fontSize='small' htmlColor='#39164F' />
                            <p>{t('Repeat visit')}</p>
                        </div>
                        <div>
                            <CircleIcon fontSize='small' htmlColor='#751B74' />
                            <p>{t('Repeat visit')}</p>
                        </div>
                    </div>
                    <div className='section'>
                        <div>
                            <CircleIcon fontSize='small' htmlColor='#D6A0F9' />
                            <p>{t('Repeat visit')}</p>
                        </div>
                        <div>
                            <CircleIcon fontSize='small' htmlColor='#EACFFC' />
                            <p>{t('Repeat visit')}</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </IncomeField>
    );
}

export default Income;
