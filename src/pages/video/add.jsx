import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// Component
import LayoutProvider from '@/components/layout';
import AddForm from '@/components/pages/video/add/add-form';
import HeaderField from '@/components/template/header';

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

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
