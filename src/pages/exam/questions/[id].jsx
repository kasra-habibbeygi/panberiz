// Component
import LayoutProvider from '@/components/layout';
import QuestionsContent from '@/components/pages/exam/questions/content';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const QuestionsList = () => {
    return (
        <LayoutProvider>
            <QuestionsContent />
        </LayoutProvider>
    );
};

export default QuestionsList;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale))
        }
    };
}
