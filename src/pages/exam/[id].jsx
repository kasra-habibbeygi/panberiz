import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Component
import StartExam from '@/components/pages/exam/start';
import LayoutProvider from '@/components/layout/layout-provider';

const Exam = () => {
    return (
        <LayoutProvider>
            <StartExam />
        </LayoutProvider>
    );
};

export default Exam;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
