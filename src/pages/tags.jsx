// Component
import AddTag from '@/components/pages/tags/add';
import TagsList from '@/components/pages/tags/list';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';

// Assets
import { TagsmainField } from '@/assets/styles/main';

const Tags = () => {
    return (
        <LayoutProvider>
            <main>
                <HeaderField title='تگ ها' />
                <TagsmainField>
                    <AddTag />
                    <TagsList />
                </TagsmainField>
            </main>
        </LayoutProvider>
    );
};

export default Tags;
