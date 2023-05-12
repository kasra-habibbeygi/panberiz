import { useEffect, useState } from 'react';

// Component
import AddTag from '@/components/pages/tags/add';
import TagsList from '@/components/pages/tags/list';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';

// Assets
import { TagsmainField } from '@/assets/styles/main';

// APIs
import { GetTagsList } from '@/api-request/tags';

const Tags = () => {
    const [tagsList, setTagsList] = useState([]);
    const [reload, setReaload] = useState(false);

    useEffect(() => {
        GetTagsList()
            .then(res => {
                setTagsList(res.results);
            })
            .catch(() => {});
    }, [reload]);

    return (
        <LayoutProvider>
            <main>
                <HeaderField title='تگ ها' />
                <TagsmainField>
                    <AddTag setReaload={setReaload} reload={reload} />
                    <TagsList tagsList={tagsList} />
                </TagsmainField>
            </main>
        </LayoutProvider>
    );
};

export default Tags;
