import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

// Component
import CategoryList from '@/components/pages/category/list';
import LayoutProvider from '@/components/layout';
const AddCategory = dynamic(() => import('@/components/pages/category/add'), {
    ssr: false
});

// APIs
import { GetCategoriesList, GetUserCategoriesList, GetAdminCategoriesList } from '@/api-request/category';

const Category = () => {
    const userInfo = useSelector(state => state.UserInfo);
    const [categoriesList, setCategoriesList] = useState([]);
    const [reload, setReaload] = useState(false);

    useEffect(() => {
        var APITemp = '';

        if (userInfo.role === 'User') {
            APITemp = GetUserCategoriesList();
        } else if (userInfo.role === 'AgentAcademy') {
            APITemp = GetCategoriesList();
        } else {
            APITemp = GetAdminCategoriesList();
        }

        APITemp.then(res => {
            setCategoriesList(res.results);
        }).catch(() => {});
    }, [reload, userInfo.role]);

    return (
        <LayoutProvider>
            {userInfo.role === 'AgentAcademy' && <AddCategory setReaload={setReaload} reload={reload} />}
            <CategoryList categoriesList={categoriesList} />
        </LayoutProvider>
    );
};

export default Category;
