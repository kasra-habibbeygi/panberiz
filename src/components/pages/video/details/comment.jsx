// Assets
import Image from 'next/image';
import { useState } from 'react';

// Assets
import { MainField } from './comment.style';
import UserIcon from '@/assets/icons/user.svg';

// MUI
import { Rating } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import StarIcon from '@mui/icons-material/Star';

// Component
import Input from '@/components/form-group/input';

const Comment = () => {
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
    return (
        <MainField>
            <div className='rate'>
                <p>امتیاز شما </p>
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
                        placeholder='دیدگاه خود را وارد کنید ...'
                    />
                    <SendRoundedIcon />
                </div>
            </div>
            <ul>
                <li>
                    <Image src={UserIcon} alt='' />
                    <div className='content'>
                        <div className='info'>
                            <div className='title'>
                                <b>نیما عبدی</b>
                                <small>۱ ساعت پیش</small>
                            </div>
                            <div className='rate'>
                                <p>۴.۵/۵</p>
                                <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                            </div>
                        </div>
                        <p className='comment_text'>خیلی عالی بود. ممنون</p>
                    </div>
                </li>
                <li>
                    <Image src={UserIcon} alt='' />
                    <div className='content'>
                        <div className='info'>
                            <div className='title'>
                                <b>نیما عبدی</b>
                                <small>۱ ساعت پیش</small>
                            </div>
                            <div className='rate'>
                                <p>۴.۵/۵</p>
                                <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                            </div>
                        </div>
                        <p className='comment_text'>خیلی عالی بود. ممنون</p>
                    </div>
                </li>
                <li>
                    <Image src={UserIcon} alt='' />
                    <div className='content'>
                        <div className='info'>
                            <div className='title'>
                                <b>نیما عبدی</b>
                                <small>۱ ساعت پیش</small>
                            </div>
                            <div className='rate'>
                                <p>۴.۵/۵</p>
                                <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                            </div>
                        </div>
                        <p className='comment_text'>خیلی عالی بود. ممنون</p>
                    </div>
                </li>
                <li>
                    <Image src={UserIcon} alt='' />
                    <div className='content'>
                        <div className='info'>
                            <div className='title'>
                                <b>نیما عبدی</b>
                                <small>۱ ساعت پیش</small>
                            </div>
                            <div className='rate'>
                                <p>۴.۵/۵</p>
                                <StarIcon htmlColor='rgba(248, 170, 0, 1)' />
                            </div>
                        </div>
                        <p className='comment_text'>خیلی عالی بود. ممنون</p>
                    </div>
                </li>
            </ul>
        </MainField>
    );
};

export default Comment;
