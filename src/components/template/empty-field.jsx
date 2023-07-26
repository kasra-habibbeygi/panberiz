/* eslint-disable react/prop-types */
// Assets
import { MainField } from './empty-field.style';
import Image from 'next/image';

const EmptyField = ({ title, img }) => {
    return (
        <MainField>
            <Image src={img} alt='' />
            <p>{title}</p>
        </MainField>
    );
};

export default EmptyField;
