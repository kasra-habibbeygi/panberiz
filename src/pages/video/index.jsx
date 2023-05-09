import LayoutProvider from '@/components/layout';
import { useState } from 'react';
import Tab from '@/components/pages/video/list/tab';
import ListVideo from '@/components/pages/video/list/list-video';
import HeaderField from '@/components/template/header';

function Video() {
    const [selectedButton, setSelectedButton] = useState('uploaded');
    const selectButton = selected => {
        setSelectedButton(selected);
    };
    return (
        <LayoutProvider>
            <HeaderField title='ویدئو' />
            <Tab selectButton={selectButton} selectedButton={selectedButton} />
            <ListVideo selectedButton={selectedButton} />
        </LayoutProvider>
    );
}

export default Video;
