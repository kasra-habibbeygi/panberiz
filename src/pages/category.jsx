/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Component
import CategoryList from '@/components/pages/category/list';
import LayoutProvider from '@/components/layout/layout-provider';
import AddCategory from '@/components/pages/category/add';

// APIs
import { GetCategoriesList } from '@/api-request/category';
import { loaderStatusHandler } from '@/state-manager/reducer/utils';

const Category = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.UserInfo);
    const [categoriesList, setCategoriesList] = useState([]);
    const [reload, setReload] = useState(false);

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
            {userInfo.role === 'SuperAdminAcademy' && <AddCategory setReload={setReload} reload={reload} />}
            <CategoryList categoriesList={categoriesList} setReload={setReload} reload={reload} />
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
