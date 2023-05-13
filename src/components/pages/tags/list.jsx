/* eslint-disable react/prop-types */
// Assets
import { MainField } from './list.style';
import EmptyFieldImg from '@/assets/images/empty/empty-tag-list.svg';
import { useTranslation } from 'next-i18next';

// Component
import EmptyField from '@/components/template/empty-field';

const TagsList = ({ tagsList }) => {
    const { t } = useTranslation('common');
    return (
        <MainField>
            <h4>{t('tags list')}</h4>
            <div className='main_field'>
                <div className='pill_field'>
                    {tagsList.length ? (
                        tagsList?.map(item => <span key={`tags_item_${item.id}`}>{item.title}</span>)
                    ) : (
                        <EmptyField title={t('The tag is not registered')} img={EmptyFieldImg} />
                    )}
                </div>
            </div>
        </MainField>
    );
};

export default TagsList;
