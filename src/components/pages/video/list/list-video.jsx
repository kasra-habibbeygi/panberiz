/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
// Assets
import { ListVideoField } from './list-video.style';
import video from '@/assets/images/video/video-1.jpeg';

// Component
import Card from './card';

const data = [
    {
        title: 'عنوان',
        des: 'توضیحات',
        image: video,
        star: '4.5'
    },
    {
        title: 'عنوان',
        des: 'توضیحات',
        image: video,
        star: '4.5'
    },
    {
        title: 'عنوان',
        des: 'توضیحات',
        image: video,
        star: '4.5'
    },
    {
        title: 'عنوان',
        des: 'توضیحات',
        image: video,
        star: '4.5'
    }
];
function ListVideo({ selectedButton }) {
    return (
        <ListVideoField>
            {selectedButton === 'waiting'
                ? data.map((value, index) => (
                    <div key={index} className='card_field'>
                        <Card data={value} />
                    </div>
                ))
                : data.map((value, index) => (
                    <div key={index} className='card_field'>
                        <Card data={value} accepted />
                    </div>
                ))}
        </ListVideoField>
    );
}

export default ListVideo;
