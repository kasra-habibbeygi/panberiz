/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
// Assets
import { ListVideoField } from './list-video.style';

// Component
import Card from './card';
import EmptyFieldImg from '../../../../assets/images/empty/empty-media-list.png';
import EmptyField from '@/components/template/empty-field';

function ListVideo({ data }) {
    return (
        <ListVideoField>
            {data.length === 0 ? 
                <EmptyField img={EmptyFieldImg} title='هیچ ویدیو وجود ندارد !' /> : data?.map((value, index) => (
                    <div key={index} className='card_field'>
                        <Card data={value} accepted />
                    </div>
                ))}
        </ListVideoField>
    );
}

export default ListVideo;
