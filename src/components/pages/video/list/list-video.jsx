/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
// Assets
import { ListVideoField } from './list-video.style';

// Component
import Card from './card';

function ListVideo({ selectedButton, data }) {
    return (
        <ListVideoField>
            {selectedButton === 'waiting'
                ? data?.map((value, index) => (
                    <div key={index} className='card_field'>
                        <Card data={value} />
                    </div>
                ))
                : data?.map((value, index) => (
                    <div key={index} className='card_field'>
                        <Card data={value} accepted />
                    </div>
                ))}
        </ListVideoField>
    );
}

export default ListVideo;
