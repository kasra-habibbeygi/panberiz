import LayoutProvider from '@/components/layout';
import AddForm from '@/components/pages/video/add/add-form';

function InsertMedia() {
    return (
        <LayoutProvider>
            <AddForm />
            {/* <QuizForm open={open} setOpen={setOpen} /> */}
        </LayoutProvider>
    );
}

export default InsertMedia;
