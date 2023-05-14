/* eslint-disable react/prop-types */
// Assets
import { MainField } from './list.style';
import { toast } from 'react-hot-toast';
import EmptyFieldImg from '@/assets/images/empty/empty-tag-list.svg';
import { useTranslation } from 'next-i18next';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// Component
import EmptyField from '@/components/template/empty-field';

// APIs
import { DeleteTag } from '@/api-request/tags';

const TagsList = ({ tagsList }) => {
    const { t } = useTranslation('common');
    const removeTag = (id) => {
        DeleteTag(id)
            .then(() => {
                toast.success(t('Category deleted successfully!'));
                setReaload(!reload);
            })
            .catch(() => {
                toast.error(t('an Error'));
            });
    }
    return (
        <MainField>
            <h4>{t('tags list')}</h4>
            <div className='main_field'>
                <div className='pill_field'>
                    {tagsList.length ? (
                        tagsList?.map(item => <span key={`tags_item_${item.id}`}>{item.title} <DeleteOutlineIcon fontSize='large' color='error' className='icon_delete' onClick={() => removeTag(item.id)} /></span>)
                    ) : (
                        <EmptyField title={t('The tag is not registered')} img={EmptyFieldImg} />
                    )}
                </div>
            </div>
        </MainField>
    );
};

export default TagsList;
