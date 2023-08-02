/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';

// Component
import LayoutProvider from '@/components/layout';
import Tab from '@/components/pages/video/list/tab';
import HeaderField from '@/components/template/header';
import EmptyField from '@/components/template/empty-field';

// Assets
import play from '@/assets/icons/play.svg';
import { CardField } from '@/components/pages/video/list/card.style';
import EmptyFieldImg from '../../assets/images/empty/empty-media-list.png';
import { ListVideoField, SearchField, FiltersWrapper } from '@/components/pages/video/list/list-video.style';

// API
import { GetUserMediaList } from '@/api-request/media/list';

// MUI
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';

function UserVideo() {
    const { t } = useTranslation();
    const router = useRouter();
    const userInfo = useSelector(state => state.UserInfo);
    const [selectedButton, setSelectedButton] = useState('uploaded');
    const [mediaList, setMediaList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [filters, setFilters] = useState({
        status: '',
        observing: '',
        sorting: ''
    });

    const selectButton = selected => {
        setSelectedButton(selected);
    };

    const getMediaUserApi = (id, lang, searchValue) => {
        GetUserMediaList(router.query.id, userInfo.lang, searchValue)
            .then(res => {
                setMediaList(res.results);
            })
            .catch(() => {});
    };

    useEffect(() => {
        getMediaUserApi(router.query.id, userInfo.lang, searchValue);
    }, [router.query.id, userInfo.lang, filters]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getMediaUserApi(router.query.id, userInfo.lang, searchValue);
        }, 3000);

        return () => clearTimeout(delayDebounceFn);
    }, [searchValue]);

    return (
        <LayoutProvider>
            <SearchField>
                <input placeholder={t('Seach')} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <SearchIcon className='search_icon' />
            </SearchField>
            <HeaderField title={t('Video')} />
            {userInfo.role === 'SuperAdminAcademy' && <Tab selectButton={selectButton} selectedButton={selectedButton} />}
            {userInfo.role !== 'SuperAdminAcademy' && (
                <FiltersWrapper>
                    <p className='filters_title'>{t('Filters')}</p>
                    <div className='selects_wrapper'>
                        <div className='options_wrapper'>
                            <p>{t('Based on observation')}</p>
                            <select
                                value={filters.observing}
                                onChange={e =>
                                    setFilters(prev => ({
                                        ...prev,
                                        observing: e.target.value
                                    }))
                                }
                            >
                                <option value=''>{t('Choose')}</option>
                                <option value='seen'>{t('Seen')}</option>
                                <option value='unseen'>{t('Not Seen')}</option>
                            </select>
                        </div>
                        <div className='options_wrapper'>
                            <p>{t('Sorting')}</p>
                            <select
                                value={filters.sorting}
                                onChange={e =>
                                    setFilters(prev => ({
                                        ...prev,
                                        sorting: e.target.value
                                    }))
                                }
                            >
                                <option value=''>{t('Choose')}</option>
                                <option value='newest'>{t('Newest')}</option>
                                <option value='oldest'>{t('Oldest')}</option>
                                <option value='score'>{t('Highest score')}</option>
                            </select>
                        </div>
                    </div>
                </FiltersWrapper>
            )}
            <ListVideoField>
                {mediaList.length === 0 ? (
                    <EmptyField img={EmptyFieldImg} title={t('There are no items to display!')} />
                ) : (
                    mediaList?.map(item => (
                        <div key={item.id} className='card_field'>
                            <CardField status={true}>
                                <div className='video_image'>
                                    <div className='float'>
                                        <Link href={`/video/details/${item.id}`}>
                                            <Image className='icon' src={play} alt='play' />
                                        </Link>
                                    </div>
                                    <img
                                        className='video_banner'
                                        src={item?.cover.replace(
                                            'ftp://testuser@fileacademy.pmlm.ir:m@P7x-s%7Bd28%7D@31.25.90.38:21/',
                                            'https://fileacademy.pmlm.ir/fileacademy.pmlm.ir/'
                                        )}
                                        alt='video-banner'
                                    />
                                </div>
                                <div className='card_details'>
                                    <div className='right_field'>
                                        <h3>{item?.title}</h3>
                                        <p>{item?.des}</p>
                                    </div>
                                    <div className='left_field'>
                                        <p>{item?.score}</p>
                                        <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                                    </div>
                                </div>
                                {userInfo.role !== 'User' && <small>{item?.publisher_fullname}</small>}
                            </CardField>
                        </div>
                    ))
                )}
            </ListVideoField>
        </LayoutProvider>
    );
}

export default UserVideo;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
