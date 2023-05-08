/* eslint-disable react/prop-types */
import Image from 'next/image';
import dot from '../../assets/icons/dot-four.svg';
import { MainField } from './answer-input.style';

function AnswerInput({ placeholder, value, label, name, valueHandler, type = 'text', index }) {
    return (
        <MainField>
            {label && <label htmlFor={name}>{label}</label>}
            <div>
                <Image width={25} height={25} src={dot} alt='dot' />
                <h2>{index}</h2>
                <input name={name} id={name} type={type} value={value} onChange={e => valueHandler(e)} placeholder={placeholder} />
            </div>
        </MainField>
    );
}

export default AnswerInput;
