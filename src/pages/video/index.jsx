import LayoutProvider from '@/components/layout';
import { useState } from 'react';
import Tab from '@/components/pages/video/list/tab';
import ListVideo from '@/components/pages/video/list/list-video';
import HeaderField from '@/components/template/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Video() {
    const [selectedButton, setSelectedButton] = useState('uploaded');
    const selectButton = selected => {
        setSelectedButton(selected);
    };

    const data = [
        {
            id: 1,
            media: 1,
            user: 10,
            media_info: {
                cover: '',
                id: 1,
                title: 'asdasd'
            }
        }
    ];

    return (
        <LayoutProvider>
            <HeaderField title='ویدئو' />
            <Tab selectButton={selectButton} selectedButton={selectedButton} />
            <ListVideo selectedButton={selectedButton} data={data} />
        </LayoutProvider>
    );
}

export default Video;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
