import LayoutProvider from '@/components/layout';
import Income from '@/components/pages/dashboard/income';
import Report from '@/components/pages/dashboard/report';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Dashboard() {
    return (
        <LayoutProvider>
            <Income />
            <Report />
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
