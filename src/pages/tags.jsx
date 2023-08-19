/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { loaderStatusHandler } from '@/state-manager/reducer/utils';

// Component
import TagsList from '@/components/pages/tags/list';
import LayoutProvider from '@/components/layout/layout-provider';
import HeaderField from '@/components/template/header';
import AddTag from '@/components/pages/tags/add';

// Assets
import { TagsmainField } from '@/assets/styles/main.style';

// APIs
import { GetTagsList } from '@/api-request/tags';

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
