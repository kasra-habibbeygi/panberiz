import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// Component
import ListVideo from '@/components/pages/video/list/list-video';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';

// APIs
import { GetFavoritsList } from '@/api-request/favorit';
import { useEffect, useState } from 'react';

const Favorite = () => {
    const { t } = useTranslation('common');
    const [favoritesList, setFavoritesList] = useState([]);

    useEffect(() => {
        GetFavoritsList()
            .then(res => {
                setFavoritesList(res.results);
            })
            .catch(() => {});
    }, []);

    return (
        <LayoutProvider>
            <HeaderField title={t('Favorites list')} />
            <ListVideo data={favoritesList} />
        </LayoutProvider>
    );
};

export default Favorite;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
