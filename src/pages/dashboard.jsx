/* eslint-disable react-hooks/exhaustive-deps */
import { GetUserCategoriesList } from '@/api-request/category';
import LayoutProvider from '@/components/layout';
import Income from '@/components/pages/dashboard/income';
import Report from '@/components/pages/dashboard/report';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
    const router = useRouter();
    const userInfo = useSelector(state => state.UserInfo);
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        if (userInfo.role === 'User') {
            GetUserCategoriesList(userInfo.lang)
                .then(res => {
                    setPageLoaded(true);
                    router.push(`/video/${res.results[0].id}`);
                })
                .catch(() => {});
            router.push('/video/1');
        } else {
            setPageLoaded(true);
        }
    }, []);

    return (
        <LayoutProvider>
            {pageLoaded && (
                <>
                    <Income />
                    <Report />
                </>
            )}
        </LayoutProvider>
    );
}

export default Dashboard;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
