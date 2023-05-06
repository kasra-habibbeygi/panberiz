// Assets
import { MainField } from './list.style';
// import EmptyFieldImg from '@/assets/images/empty/empty-tag-list.svg';

// Component
// import EmptyField from '@/components/template/empty-field';

const TagsList = () => {
    return (
        <MainField>
            <h4>لیست تگ ها </h4>
            <div className='main_field'>
                {/* <EmptyField title='تگی ثبت نشده است !' img={EmptyFieldImg} /> */}
                <div className='pill_field'>
                    <span>لورم ایپسوم</span>
                    <span>لورم ایپسوم شسی شسی </span>
                    <span>کسری</span>
                </div>
            </div>
        </MainField>
    );
};

export default TagsList;
