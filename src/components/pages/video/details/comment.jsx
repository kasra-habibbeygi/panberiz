/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

// Assets
import { MainField } from './comment.style';
import UserIcon from '@/assets/icons/user.svg';

// MUI
import { Rating } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import StarIcon from '@mui/icons-material/Star';

// Component
import Input from '@/components/form-group/input';
import PaginationField from '@/components/template/pagination';

// APIs
import { AddNewComment, AddNewCommentPoint } from '@/api-request/comment';
import { GetCommentsList } from '@/api-request/comments';

const Comment = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [commentsList, setCommentsList] = useState([]);
    const [inputValues, setInputValued] = useState({
        rate: 0,
        comment: ''
    });

    const [pageStatus, setPageStatus] = useState({
        total: 1,
        current: 1
    });

    const inputValueHandler = e => {
        setInputValued({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const sendCommentHandler = () => {
        const CommentData = {
            comment: inputValues.comment,
            media: router.query.id
        };

        AddNewComment(CommentData)
            .then(res => {
                toast.success(t('Your message was successfully registered!'));

                const RateComment = {
                    point: inputValues.rate.toString(),
                    comment: res.id
                };

                AddNewCommentPoint(RateComment)
                    .then(() => {
                        setInputValued({
                            rate: 0,
                            comment: ''
                        });
                    })
                    .catch(() => {});
            })
            .catch(() => {});
    };

    useEffect(() => {
        GetCommentsList(router.query.id, pageStatus.current)
            .then(res => {
                setCommentsList(res.results);
                setPageStatus({
                    ...pageStatus,
                    total: res.total_page
                });
            })
            .catch(() => {});
    }, [router.query.id, pageStatus.current]);

    return (
        <MainField>
            <div className='rate'>
                <p>{t('Your score')}</p>
                <Rating
                    value={inputValues.rate}
                    onChange={(_, newValue) => {
                        setInputValued({
                            ...inputValues,
                            rate: newValue
                        });
                    }}
                />
            </div>
            <div className='send_comment_field'>
                <Image src={UserIcon} alt='' />
                <div className='input_field'>
                    <Input
                        valueHandler={inputValueHandler}
                        value={inputValues.comment}
                        name='comment'
                        placeholder={t('Enter your opinion...')}
                        onKeyDown={sendCommentHandler}
                    />
                    <SendRoundedIcon onClick={sendCommentHandler} />
                </div>
            </div>

            {commentsList?.length ? (
                <>
                    <ul className='comments_list'>
                        {commentsList?.map(item => (
                            <li key={`comment_${item.id}`}>
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
        </MainField>
    );
};

export default Comment;
