import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

// Component
const AddTag = dynamic(() => import('@/components/pages/tags/add'), {
    ssr: false
});
import TagsList from '@/components/pages/tags/list';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';

// Assets
import { TagsmainField } from '@/assets/styles/main';

// APIs
import { GetTagsList, GetUserTagsList, GetAdminTagsList } from '@/api-request/tags';

const Tags = () => {
    const { t } = useTranslation('navbar');
    const userInfo = useSelector(state => state.UserInfo);
    const [tagsList, setTagsList] = useState([]);
    const [reload, setReaload] = useState(false);

    console.log(t('For Businesses'));

    useEffect(() => {
        var APITemp = '';

        if (userInfo.role === 'User') {
            APITemp = GetUserTagsList();
        } else if (userInfo.role === 'AgentAcademy') {
            APITemp = GetTagsList();
        } else {
            APITemp = GetAdminTagsList();
        }

        APITemp.then(res => {
            setTagsList(res.results);
        }).catch(() => {});
    }, [reload, userInfo.role]);

    return (
        <LayoutProvider>
            <main>
                <HeaderField title='تگ ها' />
                <TagsmainField>
                    {userInfo.role === 'AgentAcademy' && <AddTag setReaload={setReaload} reload={reload} />}
                    <TagsList tagsList={tagsList} />
                </TagsmainField>
            </main>
        </LayoutProvider>
    );
};

export default Tags;
