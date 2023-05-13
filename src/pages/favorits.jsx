// Component
import ListVideo from '@/components/pages/video/list/list-video';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';

// APIs
import { GetFavoritsList } from '@/api-request/favorit';
import { useEffect, useState } from 'react';

const Favorits = () => {
    const [favoritsList, setFavortsList] = useState([]);

    useEffect(() => {
        GetFavoritsList()
            .then(res => {
                setFavortsList(res.results);
                console.log(res.results);
            })
            .catch(() => {});
    }, []);

    return (
        <LayoutProvider>
            <HeaderField title='لیست علاقه مندی ها' />
            <ListVideo selectedButton='' data={favoritsList} />
        </LayoutProvider>
    );
};

export default Favorits;
