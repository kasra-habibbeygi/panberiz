/* eslint-disable react/prop-types */
// Assets
import { useState } from 'react';
import { MainField } from './add.styles';

// Component
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

// APIs
import { Createtag } from '@/api-request/tags';

const AddTag = ({ setReaload, reload }) => {
    const [tagsName, setTagsName] = useState('');
    const [loader, setLoader] = useState(false);

    const submitHandler = () => {
        setLoader(true);
        Createtag({ title: tagsName })
            .then(() => {
                setReaload(!reload);
                setLoader(false);
            })
            .catch(() => {});
    };

    return (
        <MainField>
            <Input
                label='عنوان تگ'
                placeholder='عنوان تگ را وارد کنید ...'
                value={tagsName}
                valueHandler={e => setTagsName(e.target.value)}
            />
            <Button color='primary' disabled={tagsName === ''} handler={() => submitHandler()} loader={loader}>
                افزودن تگ
            </Button>
        </MainField>
    );
};

export default AddTag;
