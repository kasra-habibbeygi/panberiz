import LayoutProvider from '@/components/layout';
import { useState } from 'react';
import Tab from '@/components/pages/video/list/tab';
import ListVideo from '@/components/pages/video/list/list-video';

function Video() {
    const [selectedButton, setSelectedButton] = useState('uploaded');
    const selectButton = selected => {
        setSelectedButton(selected);
    };
    return (
        <LayoutProvider>
            <Tab selectButton={selectButton} selectedButton={selectedButton} />
            <ListVideo selectedButton={selectedButton} />
        </LayoutProvider>
    );
}

export default Video;
