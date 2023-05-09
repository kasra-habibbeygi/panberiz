import { useEffect } from 'react';

// Component
import AddTag from '@/components/pages/tags/add';
import TagsList from '@/components/pages/tags/list';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';

// Assets
import { TagsmainField } from '@/assets/styles/main';

// APIs
import { AddTags } from '@/api-request/tags';

const Tags = () => {
    useEffect(() => {
        AddTags();
    }, []);

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
