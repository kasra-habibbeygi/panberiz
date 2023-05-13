import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// Component
import ListVideo from '@/components/pages/video/list/list-video';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';

// APIs
import { GetFavoritsList } from '@/api-request/favorit';
import { useEffect, useState } from 'react';

const Favorits = () => {
    const { t } = useTranslation('common');
    const [favoritsList, setFavortsList] = useState([]);

    useEffect(() => {
        GetFavoritsList()
            .then(res => {
                setFavortsList(res.results);
            })
            .catch(() => {});
    }, []);

    return (
        <LayoutProvider>
            <HeaderField title={t('Favorites list')} />
            <ListVideo selectedButton='' data={favoritsList} />
        </LayoutProvider>
    );
};

export default Favorits;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
