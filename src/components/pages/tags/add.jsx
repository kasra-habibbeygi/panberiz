/* eslint-disable react/prop-types */
// Assets
import { useState } from 'react';
import { MainField } from './add.styles';
import { useTranslation } from 'next-i18next';

// Component
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';
import AutoComplete from '@/components/form-group/auto-complete';

// APIs
import { Createtag } from '@/api-request/tags';
import { toast } from 'react-hot-toast';

const langList = [
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'فارسی',
        value: 'fa'
    },
    {
        label: 'العربية',
        value: 'ar'
    }
];

const AddTag = ({ setReaload, reload }) => {
    const { t } = useTranslation('common');
    const [tagsName, setTagsName] = useState({
        title: '',
        lang: ''
    });
    const [loader, setLoader] = useState(false);

    const InputValueHandler = e => {
        setTagsName({
            ...tagsName,
            [e.target.name]: e.target.value
        });
    };

    const selectValueHandler = (value, name) => {
        setTagsName({
            ...tagsName,
            [name]: value.value
        });
    };

    const submitHandler = () => {
        setLoader(true);
        Createtag(tagsName)
            .then(() => {
                setReaload(!reload);
                toast.success(t('Successfully updated!'));
                setTagsName({
                    title: '',
                    lang: ''
                });
            })
            .catch(() => {
                toast.error(t('An error occurred, please try again!'));
            })
            .finally(() => {
                setLoader(false);
            });
    };

    return (
        <MainField>
            <Input
                label={t('Tag title')}
                placeholder={t('Tag title')}
                value={tagsName.title}
                name='title'
                valueHandler={e => InputValueHandler(e)}
                onKeyDown={submitHandler}
            />
            <div className='lang_select'>
                <AutoComplete
                    placeholder={t('lang')}
                    value={tagsName.lang}
                    valueHandler={selectValueHandler}
                    options={langList}
                    name='lang'
                    onKeyDown={submitHandler}
                />
            </div>
            <Button color='primary' disabled={tagsName === ''} handler={submitHandler} loader={loader} extraClass='sub_btn'>
                {t('add tag')}
            </Button>
        </MainField>
    );
};

export default AddTag;
