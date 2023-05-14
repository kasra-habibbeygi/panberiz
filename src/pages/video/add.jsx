import LayoutProvider from '@/components/layout';
import AddForm from '@/components/pages/video/add/add-form';
import HeaderField from '@/components/template/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function InsertMedia() {
    return (
        <LayoutProvider>
            <HeaderField title='افزودن مدیا' />
            <AddForm />
        </LayoutProvider>
    );
}

export default InsertMedia;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
