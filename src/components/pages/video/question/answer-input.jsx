/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

//Components
import Image from 'next/image';
import { MainField } from './answer-input.style';

//Assets
import dot from '@/assets/icons/dot-four.svg';
import tick from '../../../../assets/images/category/tick.svg';
import close from '@/assets/icons/close.svg';
import cross from '../../../../assets/images/category/cross.svg';
import tickDisable from '../../../../assets/images/video/tick-disable.svg';
import crossDisable from '../../../../assets/images/video/cross-disable.svg';

function AnswerInput({ placeholder, value, label, name, valueHandler, type = 'text', index }) {
    return (
        <MainField>
            {label && <label htmlFor={name}>{label}</label>}
            <div className='row-content'>
                <Image width={25} height={25} src={dot} alt='dot' />
                <h3>{index}</h3>
                <input name={name} id={name} type={type} value={value} onChange={e => valueHandler(e)} placeholder={placeholder} />
                <div className='icon'>
                    {/* <Image src={close} alt='close' /> */}
                    <Image src={tick} alt='tick' />
                    <Image src={crossDisable} alt='crossDisable' />
                    {/* <Image src={cross} alt='cross' /> */}
                    {/* <Image src={tickDisable} alt='tickDisable' /> */}
                </div>
            </div>
        </MainField>
    );
}

export default AnswerInput;
