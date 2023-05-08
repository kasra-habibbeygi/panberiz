import Link from 'next/link';
import Image from 'next/image';

// Assets
import { MainField } from './start.style';
import RocketImg from '@/assets/images/video/rocket.png';

// Component
import Button from '@/components/form-group/button';

const StartExam = () => {
    return (
        <MainField>
            <div className='title'>
                <h3>کوییز ویدیو لورم ایپسوم</h3>
                <p>12 سوال - 25 دقیقه</p>
            </div>
            <Image src={RocketImg} alt='' />
            <Button type='filled' color='primary'>
                <Link href='/exam/questions/1'>شروع کوییز</Link>
            </Button>
        </MainField>
    );
};

export default StartExam;
