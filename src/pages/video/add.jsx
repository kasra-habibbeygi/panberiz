import LayoutProvider from '@/components/layout';
import AddForm from '@/components/pages/video/add/add-form';
import HeaderField from '@/components/template/header';

function InsertMedia() {
    return (
        <LayoutProvider>
            <HeaderField title='افزودن مدیا' />
            <AddForm />
        </LayoutProvider>
    );
}

export default InsertMedia;
