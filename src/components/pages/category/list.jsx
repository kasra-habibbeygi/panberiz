/* eslint-disable react/prop-types */
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';

// Assets
import { MainField } from './list.style';
import CrossIcon from '../../../assets/images/category/cross.svg';
import TickIcon from '../../../assets/images/category/tick.svg';
import Image from 'next/image';

// Component
import HeaderField from '@/components/template/header';

const CategoryList = ({ categoriesList }) => {
    const { t } = useTranslation('common');
    const userRank = useSelector(state => state.UserInfo.rank);
    return (
        <MainField>
            <HeaderField title={t('Category list')} />
            <div className='card_parent_field'>
                <div className='cards_field'>
                    <div className='header_field'>
                        <span>{t('Title')}</span>
                        <span>{t('Rank')}</span>
                        <span>{t('position')}</span>
                        <span>{t('General condition')}</span>
                    </div>
                    {categoriesList?.map(item => {
                        if (userRank >= item.rank) {
                            return (
                                <Link className='item' key={item.id}>
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
