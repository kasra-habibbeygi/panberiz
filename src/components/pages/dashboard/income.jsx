/* eslint-disable react-hooks/exhaustive-deps */
// Component
import { IncomeField } from './income.style';
import ChartArea from './area.chart';
import ChartPie from './pie.chart';

//Assets
import searchSvg from './../../../assets/icons/search.svg';

//mui
// import CircleIcon from '@mui/icons-material/Circle';
import AutoComplete from '@/components/form-group/auto-complete';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GetManagerChart1Info, GetAdminChart1Info, GetAdminChart2Info, GetManagerChart2Info, UserSearch } from '@/api-request/chart';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Dialog } from '@mui/material';
import SearchResult from './search-result';

function Income() {
    const { t } = useTranslation('common');
    const userInfo = useSelector(state => state.UserInfo);
    const [chart1Data, setChart1Data] = useState([]);
    const [chart2Data, setChart2Data] = useState([]);
    const [selectValue, setSelectValue] = useState([]);
    const [values, setValues] = useState();
    const [searchValue, setSearchValue] = useState('');
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [userSearchValue, setUserSearchValue] = useState({});

    const autoCompleteHandler = e => {
        setValues(e);
    };

    useEffect(() => {
        if (userInfo.role === 'SuperAdminAcademy') {
            GetManagerChart1Info()
                .then(res => {
                    setChart1Data(res.result);
                })
                .catch(() => {});

            GetManagerChart2Info(userInfo.lang)
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
        if (userInfo.role === 'AdminAcademy' || userInfo.role === 'AgentAcademy') {
            GetAdminChart1Info()
                .then(res => {
                    setChart1Data(res.result);
                })
                .catch(() => {});

            GetAdminChart2Info(userInfo.lang)
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
    }, [userInfo.role, userInfo.lang]);

    const searchHandler = e => {
        e.preventDefault();
        if (searchValue) {
            setShowSearchModal(true);

            UserSearch(userInfo.lang, searchValue)
                .then(res => {
                    setUserSearchValue(res);
                })
                .catch(() => {});
        }
    };

    const closeSearchModalHandler = () => {
        setShowSearchModal(false);
    };

    return (
        <IncomeField>
            <form className='search_wrapper' onSubmit={searchHandler}>
                <input
                    type='text'
                    className='search_input'
                    placeholder={t('Search user')}
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <button className='search_button'>
                    <Image src={searchSvg} alt='search' />
                </button>
            </form>
            <div className='container chart_field'>
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
                </div>
            </div>

            <Dialog open={showSearchModal} onClose={closeSearchModalHandler} maxWidth='sm'>
                <SearchResult userSearchValue={userSearchValue} />
            </Dialog>
        </IncomeField>
    );
}

export default Income;
