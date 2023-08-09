/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Component
import TagsList from '@/components/pages/tags/list';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';
const AddTag = dynamic(() => import('@/components/pages/tags/add'), {
    ssr: false
});

// Assets
import { TagsmainField } from '@/assets/styles/main';

// APIs
import { GetTagsList } from '@/api-request/tags';
import { loaderStatusHandler } from '@/state-manager/reducer/utils';

const Tags = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation('common');
    const userInfo = useSelector(state => state.UserInfo);
    const [tagsList, setTagsList] = useState([]);
    const [reload, setReaload] = useState(false);

    useEffect(() => {
        dispatch(loaderStatusHandler(true));
        GetTagsList(userInfo.lang)
            .then(res => {
                setTagsList(res.results);
            })
            .catch(() => {})
            .finally(() => {
                dispatch(loaderStatusHandler(false));
            });
    }, [reload, userInfo]);

    return (
        <LayoutProvider>
            <main>
                <HeaderField title={t('tags')} />
                <TagsmainField>
                    {userInfo.role === 'SuperAdminAcademy' ? <AddTag setReaload={setReaload} reload={reload} /> : ''}
                    <TagsList tagsList={tagsList} setReaload={setReaload} />
                </TagsmainField>
            </main>
        </LayoutProvider>
    );
};

export default Tags;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
