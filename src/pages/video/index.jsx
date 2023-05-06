import LayoutProvider from '@/components/layout';
import * as Style from '../../assets/styles/video/video.style';
import { useState } from 'react';
import video from '../../assets/images/video/video-1.jpeg';
import Card from '@/components/video/card';

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
    }
];

function Video() {
    const [selectedButton, setSelectedButton] = useState(true);
    const selectButton = selected => {
        setSelectedButton(selected);
    };
    return (
        <LayoutProvider>
            <Style.VideoField>
                <h1>ویدئو</h1>
                <div className='switch-buttons'>
                    <div className='buttons'>
                        <button onClick={() => selectButton(true)} className={selectedButton && 'selected-button'}>
                            ویدئو های آپلود شده
                        </button>
                        <button onClick={() => selectButton(false)} className={!selectedButton && 'selected-button'}>
                            ویدئو های در انتظار تایید
                        </button>
                    </div>
                </div>
                <div className='content-container'>
                    {selectedButton
                        ? data.map((value, index) => <Card key={index} data={value} />)
                        : data.map((value, index) => <Card key={index} data={value} accepted={true} />)}
                </div>
            </Style.VideoField>
        </LayoutProvider>
    );
}

export default Video;
