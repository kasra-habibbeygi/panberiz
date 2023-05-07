/* eslint-disable react/prop-types */
import { ListVideoField } from './list-video.style';
import video from '@/assets/images/video/video-1.jpeg';
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
                ? data.map((value, index) => <Card key={index} data={value} />)
                : data.map((value, index) => <Card key={index} data={value} accepted={true} />)}
        </ListVideoField>
    );
}

export default ListVideo;
