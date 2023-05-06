// Assets
import { useState } from 'react';
import { MainField } from './add.styles';

// Component
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

const AddTag = () => {
    const [tagsName, setTagsName] = useState('');

    const submitHandler = () => {};

    return (
        <MainField>
            <Input
                label='عنوان تگ'
                name='tag_name'
                placeholder='عنوان تگ را وارد کنید ...'
                value={tagsName}
                valueHandler={e => setTagsName(e.target.value)}
            />
            <Button color='primary' disabled={tagsName === ''} handler={() => submitHandler()}>
                افزودن تگ
            </Button>
        </MainField>
    );
};

export default AddTag;
