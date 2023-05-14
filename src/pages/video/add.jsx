import LayoutProvider from '@/components/layout';
import AddForm from '@/components/pages/video/add/add-form';
import HeaderField from '@/components/template/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function InsertMedia() {
    const { t } = useTranslation('common');
    return (
        <LayoutProvider>
            <HeaderField title={t('Add media')} />
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
