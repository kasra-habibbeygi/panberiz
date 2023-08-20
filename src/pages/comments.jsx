/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable vars-on-top */
import Image from 'next/image';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { loaderStatusHandler } from '@/state-manager/reducer/utils';

// Assets
import { MainField } from '@/assets/styles/comments.style';
import UserIcon from '@/assets/icons/user.svg';

// Components
import LayoutProvider from '@/components/layout/layout-provider';
import Button from '@/components/form-group/button';
import PaginationField from '@/components/template/pagination';
import AutoComplete from '@/components/form-group/auto-complete';

// MUI
import StarIcon from '@mui/icons-material/Star';

// APIs
import { GetAllComments, UpdateCommentStatus } from '@/api-request/comment';

const CommentsManager = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.UserInfo);
    const [commentsList, setCommentsList] = useState([]);
    const [reload, setReload] = useState(false);
    const [filterStatus, setFilterStatus] = useState({
        status: null,
        day: null
    });
    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        dispatch(loaderStatusHandler(true));
        if (userInfo.role) {
            let query = `?page=${pageStatus.current}`;

            if (filterStatus.status) {
                query += `&status=${filterStatus.status.value}`;
            }

            if (filterStatus.day) {
                query += `&day=${filterStatus.day.value}`;
            }

            GetAllComments(userInfo.role, query)
                .then(res => {
                    setCommentsList(res.results);
                    setPageStatus({
                        ...pageStatus,
                        total: res.total_page
                    });
                    dispatch(loaderStatusHandler(false));
                })
                .catch(() => {})
                .finally(() => {});
        }
    }, [userInfo.role, pageStatus.current, reload, filterStatus]);

    const commentStatusHandler = (status, commentId, mediaId) => {
        UpdateCommentStatus(
            {
                comment: commentId,
                media: mediaId,
                status
            },
            userInfo.role
        )
            .then(() => {
                setReload(!reload);
                toast.success(t('The comment status has been changed successfully'));
            })
            .catch(() => {});
    };

    const autoCompleteHandler = (e, name) => {
        setPageStatus({
            ...pageStatus,
            current: 1
        });

        setFilterStatus({
            ...filterStatus,
            [name]: e
        });
    };

    const statusOptions = [
        {
            value: false,
            label: 'نظرات رد شده'
        },
        {
            value: true,
            label: 'نظرات تایید شده'
        }
    ];

    const daysOptions = [
        {
            value: 1,
            label: 'یک روز گذشته'
        },
        {
            value: 3,
            label: 'سه رور گذشته'
        },
        {
            value: 7,
            label: 'یک هفته گذشته'
        },
        {
            value: 365,
            label: '1 سال گذشته'
        }
    ];

    return (
        <LayoutProvider>
            <MainField>
                <h3>{t('Manage comments')}</h3>
                <div className='filter_container'>
                    <div className='filter_item'>
                        <AutoComplete
                            placeholder={t('Based on observation')}
                            value={filterStatus.status}
                            name='status'
                            valueHandler={autoCompleteHandler}
                            options={statusOptions}
                        />
                    </div>
                    <div className='filter_item'>
                        <AutoComplete
                            placeholder={t('Based on observation')}
                            value={filterStatus.day}
                            name='day'
                            valueHandler={autoCompleteHandler}
                            options={daysOptions}
                        />
                    </div>
                </div>
                <div className='comments_container'>
                    {commentsList.length ? (
                        <>
                            <ul className='comments_list'>
                                {commentsList.map(item => (
                                    <li key={item.id}>
                                        <Image src={UserIcon} alt='' className='avatar_img' />
                                        <div className='content'>
                                            <div className='info'>
                                                <div className='title'>
                                                    <b>{item.user_fullname}</b>
                                                </div>
                                                <div className='rate'>
                                                    <p>{item.point ? `${parseFloat(item.point)} / 5` : t('No score has been recorded')}</p>
                                                    <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                                                </div>
                                            </div>
                                            <p className='comment_text'>{item.comment}</p>
                                            <div className='status_field'>
                                                <Link href={`/video/details/${item.media_info.id}`}>
                                                    {t('Video')} : {item.media_info.title}
                                                </Link>
                                                <p className={item.status ? 'accept' : 'reject'}>
                                                    {t('Condition')} : {item.status ? t('Accept') : t('Reject')}
                                                </p>
                                                <Button extraClass='accept' handler={() => commentStatusHandler(true, item.id, item.media)}>
                                                    {t('Accept')}
                                                </Button>
                                                <Button
                                                    extraClass='reject'
                                                    handler={() => commentStatusHandler(false, item.id, item.media)}
                                                >
                                                    {t('Reject')}
                                                </Button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <PaginationField paginationStatus={pageStatus} setPaginationStatus={setPageStatus} />
                        </>
                    ) : (
                        <>
                            <div className='comment_empty_field'>
                                <p>{t('There are no comments for this video yet!')}</p>
                            </div>
                        </>
                    )}
                </div>
            </MainField>
        </LayoutProvider>
    );
};

export default CommentsManager;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
