// Component
import { IncomeField } from './income.style';
import ChartArea from './area.chart';
import ChartPie from './pie.chart';

//mui
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CircleIcon from '@mui/icons-material/Circle';
import AutoComplete from '@/components/form-group/auto-complete';
import { useState } from 'react';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 }
];

function Income() {
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

    return (
        <IncomeField>
            <div className='line-chart'>
                <div className='header'>
                    <div className='title'>
                        <h1>درآمد</h1>
                        <p>1.90% +</p>
                        <ShowChartIcon sx={{ color: '#6ED097' }} />
                    </div>
                    <div className='period'>
                        <AutoComplete
                            placeholder='هفتگی'
                            value={values.period}
                            valueHandler={autoCompleteHandler}
                            options={top100Films}
                            name='period'
                        />
                    </div>
                </div>
                <div className='chart'>
                    <ChartArea />
                </div>
            </div>
            <div className='circle-chart'>
                <div className='select-rank'>
                    <AutoComplete
                        placeholder='انتخاب رنگ'
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
                            <p>بازدید مجدد</p>
                        </div>
                        <div>
                            <CircleIcon fontSize='small' htmlColor='#751B74' />
                            <p>بازدید مجدد</p>
                        </div>
                    </div>
                    <div className='section'>
                        <div>
                            <CircleIcon fontSize='small' htmlColor='#D6A0F9' />
                            <p>بازدید مجدد</p>
                        </div>
                        <div>
                            <CircleIcon fontSize='small' htmlColor='#EACFFC' />
                            <p>بازدید مجدد</p>
                        </div>
                    </div>
                </div>
            </div>
        </IncomeField>
    );
}

export default Income;
