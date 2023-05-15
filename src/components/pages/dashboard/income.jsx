// Component
import { IncomeField } from './income.style';
import ChartArea from './area.chart';
import ChartPie from './pie.chart';

//mui
import CircleIcon from '@mui/icons-material/Circle';
import AutoComplete from '@/components/form-group/auto-complete';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GetManagerChart1Info, GetAdminChart1Info } from '@/api-request/chart';
import { useSelector } from 'react-redux';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 }
];

function Income() {
    const userInfo = useSelector(state => state.UserInfo);
    const [chart1Data, setChart1Data] = useState([]);
    const { t } = useTranslation('common');
    const [values, setValues] = useState({
        period: '',
        rank: ''
    });

    const autoCompleteHandler = (e, name) => {
        setValues({
            ...values,
            [name]: e
        });
    };

    console.log(chart1Data);

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy' || userInfo.role === 'AgentAcademy') {
            GetManagerChart1Info()
                .then(res => {
                    setChart1Data(res.result);
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
                        <h1>آمار بازدید</h1>
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
                        value={values.rank}
                        valueHandler={autoCompleteHandler}
                        options={top100Films}
                        name='rank'
                    />
                </div>
                <div className='chart'>
                    <ChartPie />
                </div>
                <div className='flags'>
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
                </div>
            </div>
        </IncomeField>
    );
}

export default Income;
