/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { useTranslation } from 'next-i18next';

// Assets
import { ListVideoField } from './list-video.style';
import EmptyFieldImg from '../../../../assets/images/empty/favorits_empty_field.png';

// Component
import Card from './card';
import EmptyField from '@/components/template/empty-field';

function ListVideo({ data }) {
    const { t } = useTranslation();
    
    return (
        <ListVideoField>
            {data.length === 0 ? 
                <EmptyField img={EmptyFieldImg} title={t('There are no items to display!')} /> : data?.map((value, index) => (
                    <div key={index} className='card_field'>
                        <Card data={value} accepted />
                    </div>
                ))}
        </ListVideoField>
    );
}

export default ListVideo;
