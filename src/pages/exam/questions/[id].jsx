// Component
import LayoutProvider from '@/components/layout';
import QuestionsContent from '@/components/pages/exam/questions/content';

const QuestionsList = () => {
    return (
        <LayoutProvider>
            <QuestionsContent />
        </LayoutProvider>
    );
};

export default QuestionsList;
