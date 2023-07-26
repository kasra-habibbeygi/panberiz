/* eslint-disable react-hooks/exhaustive-deps */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Component
import LayoutProvider from '@/components/layout';
import Income from '@/components/pages/dashboard/income';
import Report from '@/components/pages/dashboard/report';

// API
import { GetUserCategoriesList } from '@/api-request/category';

function Dashboard() {
    const router = useRouter();
    const userInfo = useSelector(state => state.UserInfo);
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        if (userInfo.role === 'User') {
            GetUserCategoriesList(userInfo.lang)
                .then(res => {
                    setPageLoaded(true);
                    res.results.filter(item => {
                        if (item.title === 'عمومی') {
                            router.push(`/video/${item.id}`);
                        }
                    });
                })
                .catch(() => {});
        } else {
            setPageLoaded(true);
        }
    }, [userInfo.role]);

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
