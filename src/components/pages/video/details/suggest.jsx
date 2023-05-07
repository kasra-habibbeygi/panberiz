/* eslint-disable prettier/prettier */
// Assets
import { MainField } from './suggest.style';
import video from '@/assets/images/video/video-1.jpeg';

// Component
import HeaderField from '@/components/template/header';
import Card from '../list/card';

const data = [
    {
        title: 'نام ویدیو آپلود شده',
        des: 'توسط عاطفه حبیبی',
        image: video,
        star: '4.5'
    },
    {
        title: 'نام ویدیو آپلود شده',
        des: 'توسط عاطفه حبیبی',
        image: video,
        star: '4.5'
    },
    {
        title: 'نام ویدیو آپلود شده',
        des: 'توسط عاطفه حبیبی',
        image: video,
        star: '4.5'
    },
    {
        title: 'نام ویدیو آپلود شده',
        des: 'توسط عاطفه حبیبی',
        image: video,
        star: '4.5'
    }
];

const SuggestVideo = () => {
    return (
        <MainField>
            <HeaderField title='ویدیو های پیشنیاز' />

            <div className='main_field'>
                {data.map((value, index) => (
                    <div key={index} className='card_field'>
                        <Card data={value} accepted/>
                    </div>
                ))}
            </div>
        </MainField>
    );
};

export default SuggestVideo;
