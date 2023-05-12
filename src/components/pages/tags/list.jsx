/* eslint-disable react/prop-types */
// Assets
import { MainField } from './list.style';
import EmptyFieldImg from '@/assets/images/empty/empty-tag-list.svg';

// Component
import EmptyField from '@/components/template/empty-field';

const TagsList = ({ tagsList }) => {
    return (
        <MainField>
            <h4>لیست تگ ها </h4>
            <div className='main_field'>
                <div className='pill_field'>
                    {tagsList.length ? (
                        tagsList?.map(item => <span key={`tags_item_${item.id}`}>{item.title}</span>)
                    ) : (
                        <EmptyField title='تگی ثبت نشده است !' img={EmptyFieldImg} />
                    )}
                </div>
            </div>
        </MainField>
    );
};

export default TagsList;
