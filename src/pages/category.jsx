/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Component
import CategoryList from '@/components/pages/category/list';
import LayoutProvider from '@/components/layout';

const AddCategory = dynamic(() => import('@/components/pages/category/add'), {
    ssr: false
});

// APIs
import { GetCategoriesList } from '@/api-request/category';
import { loaderStatusHandler } from '@/state-manager/reducer/utils';

const Category = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.UserInfo);
    const [categoriesList, setCategoriesList] = useState([]);
    const [reload, setReaload] = useState(false);

    useEffect(() => {
        dispatch(loaderStatusHandler(true));
        GetCategoriesList(userInfo.lang)
            .then(res => {
                setCategoriesList(res.results);
            })
            .catch(() => {})
            .finally(() => {
                dispatch(loaderStatusHandler(false));
            });
    }, [reload, userInfo]);

    return (
        <LayoutProvider>
            {userInfo.role === 'SuperAdminAcademy' && <AddCategory setReaload={setReaload} reload={reload} />}
            <CategoryList categoriesList={categoriesList} setReaload={setReaload} reload={reload} />
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
