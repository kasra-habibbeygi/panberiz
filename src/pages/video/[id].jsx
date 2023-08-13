/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';

// Component
import LayoutProvider from '@/components/layout';
import Tab from '@/components/pages/video/list/tab';
import HeaderField from '@/components/template/header';
import EmptyField from '@/components/template/empty-field';

// Assets
import play from '@/assets/icons/play.svg';
import { CardField, TagsList } from '@/components/pages/video/list/card.style';
import EmptyFieldImg from '../../assets/images/empty/empty-media-list.png';
import { ListVideoField, SearchField, FiltersWrapper, PaginationWrapper } from '@/components/pages/video/list/list-video.style';

// API
import { GetUserMediaList } from '@/api-request/media/list';
import { SpecificTags } from '@/api-request/tags';

// MUI
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import AutoComplete from '@/components/form-group/auto-complete';
import { Pagination } from '@mui/material';
import { loaderStatusHandler } from '@/state-manager/reducer/utils';

function UserVideo() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const userInfo = useSelector(state => state.UserInfo);
    const [selectedButton, setSelectedButton] = useState('uploaded');
    const [mediaList, setMediaList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [tagsList, setTagsList] = useState([]);
    const [viewsFilter, setViewsFilter] = useState(null);
    const [sortFilter, setSortFilter] = useState(null);

    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });

    const selectButton = selected => {
        setSelectedButton(selected);
    };

    const getMediaUserApi = (id, lang, searchValue) => {
        dispatch(loaderStatusHandler(true));
        let filterParams = `&page=${pageStatus.current}`;

        if (viewsFilter?.value === 'seen') {
            filterParams += '&is_viewed=true';
            setPageStatus({
                total: 1,
                current: 1
            });
        }
        if (viewsFilter?.value === 'unseen') {
            filterParams += '&is_viewed=false';
            setPageStatus({
                total: 1,
                current: 1
            });
        }
        if (sortFilter?.value === 'oldest') {
            filterParams += '&oldest=true';
            setPageStatus({
                total: 1,
                current: 1
            });
        }
        if (sortFilter?.value === 'newest') {
            filterParams += '&newest=true';
            setPageStatus({
                total: 1,
                current: 1
            });
        }
        if (sortFilter?.value === 'score') {
            filterParams += '&score=true';
            setPageStatus({
                total: 1,
                current: 1
            });
        }

        if (router.query.tagId) {
            filterParams += `&tagId=${router.query.tagId}`;
            setPageStatus({
                total: 1,
                current: 1
            });
        }

        GetUserMediaList(id, lang, searchValue, filterParams)
            .then(res => {
                setMediaList(res.results);
                console.log(res);
                setPageStatus({
                    ...pageStatus,
                    total: res.total_page
                });
            })
            .catch(() => {})
            .finally(() => {
                dispatch(loaderStatusHandler(false));
            });
    };

    useEffect(() => {
        getMediaUserApi(router.query.id, userInfo.lang, searchValue);

        SpecificTags(router.query.id, userInfo.lang)
            .then(res => {
                setTagsList(res.results);
            })
            .catch(() => {});
    }, [router.query.id, userInfo.lang, router.query.tagId, sortFilter, viewsFilter, pageStatus.current]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getMediaUserApi(router.query.id, userInfo.lang, searchValue, sortFilter, viewsFilter);
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [searchValue, userInfo.lang]);

    const autoCompleteHandler = (e, name) => {
        if (name === 'views') {
            setViewsFilter(e);
        } else {
            setSortFilter(e);
        }
    };

    const options2 = [
        {
            label: t('Not Seen'),
            value: 'unseen'
        },
        {
            label: t('Seen'),
            value: 'seen'
        }
    ];

    const options3 = [
        {
            label: t('Newest'),
            value: 'newest'
        },
        {
            label: t('Oldest'),
            value: 'oldest'
        },
        {
            label: t('Highest score'),
            value: 'score'
        }
    ];

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
                    <div className='selects_wrapper'>
                        <div className='options_wrapper'>
                            <AutoComplete
                                placeholder={t('Based on observation')}
                                value={viewsFilter}
                                name='views'
                                valueHandler={autoCompleteHandler}
                                options={options2}
                            />
                        </div>
                        <div className='options_wrapper'>
                            <AutoComplete
                                placeholder={t('Sorting')}
                                value={sortFilter}
                                name='filter'
                                valueHandler={autoCompleteHandler}
                                options={options3}
                            />
                        </div>
                    </div>
                </FiltersWrapper>
            )}
            <TagsList>
                {tagsList.length ? <p>تگ های مرتبط</p> : ''}
                <div className='tags_field'>
                    {tagsList.map(item => (
                        <Link href={`/video/5/?tagId=${item.id}`} key={`tags_list_${item.id}`}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </TagsList>
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
                                    <img className='video_banner' src={item?.cover.replace('http', 'https')} alt='video-banner' />
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
                <PaginationWrapper>
                    <Pagination
                        color='primary'
                        count={pageStatus.total}
                        page={pageStatus.current}
                        onChange={(_, value) =>
                            setPageStatus(prev => {
                                return {
                                    ...prev,
                                    current: value
                                };
                            })
                        }
                    />
                </PaginationWrapper>
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
