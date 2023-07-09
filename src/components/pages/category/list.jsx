/* eslint-disable react/prop-types */
// import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import CloseIcon from '@mui/icons-material/Close';

// Assets
import { MainField } from './list.style';
import CrossIcon from '../../../assets/images/category/cross.svg';
import TickIcon from '../../../assets/images/category/tick.svg';
import Image from 'next/image';

// Component
import HeaderField from '@/components/template/header';

// APIs
import { DeleteCategory } from '@/api-request/category';

const CategoryList = ({ categoriesList, setReaload, reload }) => {
    const { t } = useTranslation('common');
    const userRank = useSelector(state => state.UserInfo.rank);

    const removeCategory = id => {
        DeleteCategory(id)
            .then(() => {
                toast.success(t('Successfully updated!'));
                setReaload(!reload);
            })
            .catch(() => {
                toast.error(t('An error occurred, please try again!'));
            });
    };

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
                                <div className='item' key={item.id}>
                                    <p>
                                        <CloseIcon
                                            fontSize='large'
                                            color='error'
                                            className='icon_delete'
                                            onClick={() => removeCategory(item.id)}
                                        />
                                        {item.title}
                                    </p>
                                    <p>{item.rank}</p>
                                    <p>{item.place}</p>
                                    <p>{item.is_public ? <Image src={TickIcon} alt='' /> : <Image src={CrossIcon} alt='' />}</p>
                                </div>
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
