// Assets
import { MainField } from './list.style';
import CrossIcon from '../../../assets/images/category/cross.svg';
import TickIcon from '../../../assets/images/category/tick.svg';
import Image from 'next/image';

// Component
import HeaderField from '@/components/template/header';

const CategoryList = () => {
    return (
        <MainField>
            <HeaderField title='لیست دسته بندی' />
            <div className='cards_field'>
                <div className='header_field'>
                    <span>عنوان</span>
                    <span>رنک</span>
                    <span>جایگاه</span>
                    <span>وضعیت عمومی</span>
                </div>
                <div className='item'>
                    <p>لورم ایپسوم</p>
                    <p>2</p>
                    <p>1</p>
                    <p>
                        <Image src={CrossIcon} alt='' />
                    </p>
                </div>
                <div className='item'>
                    <p>لورم ایپسوم</p>
                    <p>2</p>
                    <p>1</p>
                    <p>
                        <Image src={TickIcon} alt='' />
                    </p>
                </div>
                <div className='item'>
                    <p>لورم ایپسوم</p>
                    <p>2</p>
                    <p>1</p>
                    <p>
                        <Image src={TickIcon} alt='' />
                    </p>
                </div>
                <div className='item'>
                    <p>لورم ایپسوم</p>
                    <p>2</p>
                    <p>1</p>
                    <p>
                        <Image src={CrossIcon} alt='' />
                    </p>
                </div>
            </div>
        </MainField>
    );
};

export default CategoryList;
