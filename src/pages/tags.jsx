import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Component
import AddTag from '@/components/pages/tags/add';
import TagsList from '@/components/pages/tags/list';
import LayoutProvider from '@/components/layout';
import HeaderField from '@/components/template/header';

// Assets
import { TagsmainField } from '@/assets/styles/main';

// APIs
import { GetTagsList, GetUserTagsList, GetAdminTagsList } from '@/api-request/tags';

const Tags = () => {
    const userInfo = useSelector(state => state.UserInfo);
    const [tagsList, setTagsList] = useState([]);
    const [reload, setReaload] = useState(false);

    useEffect(() => {
        var APITemp = '';

        if (userInfo.role === 'User') {
            APITemp = GetUserTagsList();
        } else if (userInfo.role === 'AgentAcademy') {
            APITemp = GetTagsList();
        } else {
            APITemp = GetAdminTagsList();
        }

        APITemp.then(res => {
            setTagsList(res.results);
        }).catch(() => {});
    }, [reload, userInfo.role]);

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
