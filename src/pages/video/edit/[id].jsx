import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import HeaderField from '@/components/template/header';
import EditForm from '@/components/pages/video/edit/edit-form';

const EditVideo = () => {
    const { t } = useTranslation('common');
    return (
        <LayoutProvider>
            <HeaderField title={t('Edit media')} />
            <EditForm />
        </LayoutProvider>
    );
};

export default EditVideo;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
