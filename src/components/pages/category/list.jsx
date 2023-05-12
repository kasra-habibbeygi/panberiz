/* eslint-disable react/prop-types */
import Link from 'next/link';
import { useSelector } from 'react-redux';

// Assets
import { MainField } from './list.style';
import CrossIcon from '../../../assets/images/category/cross.svg';
import TickIcon from '../../../assets/images/category/tick.svg';
import Image from 'next/image';

// Component
import HeaderField from '@/components/template/header';

const CategoryList = ({ categoriesList }) => {
    const userRank = useSelector(state => state.UserInfo.rank);
    return (
        <MainField>
            <HeaderField title='لیست دسته بندی' />
            <div className='card_parent_field'>
                <div className='cards_field'>
                    <div className='header_field'>
                        <span>عنوان</span>
                        <span>رنک</span>
                        <span>جایگاه</span>
                        <span>وضعیت عمومی</span>
                    </div>
                    {categoriesList?.map(item => {
                        if (userRank >= item.rank) {
                            return (
                                <Link href='/' className='item' key={item.id}>
                                    <p>{item.title}</p>
                                    <p>{item.rank}</p>
                                    <p>{item.place}</p>
                                    <p>{item.is_public ? <Image src={TickIcon} alt='' /> : <Image src={CrossIcon} alt='' />}</p>
                                </Link>
                            );
                        }
                        return (
                            <div className='item' key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.rank}</p>
                                <p>{item.place}</p>
                                <p>{item.is_public ? <Image src={TickIcon} alt='' /> : <Image src={CrossIcon} alt='' />}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </MainField>
    );
};

export default CategoryList;
