/* eslint-disable react/prop-types */
import { useTranslation } from 'next-i18next';

// Assets
import Image from 'next/image';
import { useState } from 'react';
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

// APIs
import { AddnewComment, AddCommentScore } from '@/api-request/comment';

const Comment = ({ mediaDetails }) => {
    const { t } = useTranslation();
    const [inputValues, setInputValued] = useState({
        rate: 0,
        comment: ''
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
            media: mediaDetails?.id
        };

        const RateComment = {
            score: inputValues.rate,
            media: mediaDetails?.id
        };

        AddnewComment(CommentData)
            .then(() => {
                toast.success(t('Your message was successfully registered!'));
            })
            .catch(err => {
                toast.error(err.response.data.message);
            });

        AddCommentScore(RateComment)
            .then(() => {})
            .catch(() => {});
    };

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
            <ul>
                {mediaDetails?.comments.map(item => (
                    <li key={`comment_${item.id}`}>
                        <Image src={UserIcon} alt='' />
                        <div className='content'>
                            <div className='info'>
                                <div className='title'>
                                    <b>{item.user_fullname}</b>
                                </div>
                                <div className='rate'>
                                    <p>۴.۵/۵</p>
                                    <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                                </div>
                            </div>
                            <p className='comment_text'>{item.comment}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </MainField>
    );
};

export default Comment;
