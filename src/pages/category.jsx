import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

// Component
import CategoryList from '@/components/pages/category/list';
import LayoutProvider from '@/components/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
const AddCategory = dynamic(() => import('@/components/pages/category/add'), {
    ssr: false
});

// APIs
import { GetCategoriesList } from '@/api-request/category';

const Category = () => {
    const userInfo = useSelector(state => state.UserInfo);
    const [categoriesList, setCategoriesList] = useState([]);
    const [reload, setReaload] = useState(false);

    useEffect(() => {
        GetCategoriesList(userInfo.lang)
            .then(res => {
                setCategoriesList(res.results);
            })
            .catch(() => {});
    }, [reload, userInfo]);

    return (
        <LayoutProvider>
            {userInfo.role === 'SuperAdminAcademy' && <AddCategory setReaload={setReaload} reload={reload} />}
            <CategoryList categoriesList={categoriesList} />
        </LayoutProvider>
    );
};

export default Category;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
