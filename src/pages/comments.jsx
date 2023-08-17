/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable vars-on-top */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

// Assets
import { MainField } from '../assets/styles/comments.style';
import UserIcon from '@/assets/icons/user.svg';

// Components
import LayoutProvider from '@/components/layout';
import Button from '@/components/form-group/button';

// MUI
import { Pagination } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

// APIs
import { GetAllComments, UpdateCommentStatus } from '@/api-request/comment';

const CommentsManager = () => {
    const { t } = useTranslation();
    const userInfo = useSelector(state => state.UserInfo);
    const [commentsList, setCommentsList] = useState([]);
    const [reload, setReload] = useState(false);
    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });

    useEffect(() => {
        if (userInfo.role) {
            GetAllComments(userInfo.role, pageStatus.current)
                .then(res => {
                    setCommentsList(res.results);
                    setPageStatus({
                        ...pageStatus,
                        total: res.total_page
                    });
                })
                .catch(() => {})
                .finally(() => {});
        }
    }, [userInfo.role, pageStatus.current, reload]);

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

    return (
        <LayoutProvider>
            <MainField>
                <h3>{t('Manage comments')}</h3>
                <div className='comments_container'>
                    {commentsList.length ? (
                        <>
                            <ul className='comments_list'>
                                {commentsList.map(item => (
                                    <li key={item.id}>
                                        <Image src={UserIcon} alt='' />
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
                            <div className='pagination_wrapper'>
                                <Pagination
                                    color='primary'
                                    count={pageStatus.total}
                                    page={pageStatus.current}
                                    onChange={(_, value) =>
                                        setPageStatus(prev => ({
                                            ...prev,
                                            current: value
                                        }))
                                    }
                                />
                            </div>
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
