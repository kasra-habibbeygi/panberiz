/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

//Components
import Image from 'next/image';
import { MainField } from './answer-input.style';

//Assets
import dot from '@/assets/icons/dot-four.svg';
import tick from '../../../../assets/images/category/tick.svg';
import close from '@/assets/icons/close.svg';
import tickDisable from '../../../../assets/images/video/tick-disable.svg';

// Component
import Input from '@/components/form-group/input';

function AnswerInput({ placeholder, label, index, setQuestion, question, item }) {
    const valueHandler = e => {
        setQuestion({
            ...question,
            answers: question.answers.map((data, count) => (count + 1 === index ? { ...data, value: e.target.value } : data))
        });
    };

    const removeInputHandler = () => {
        setQuestion({
            ...question,
            answers: question.answers.filter((data, count) => count + 1 !== index && data)
        });
    };

    const handleCheckCurrent = () => {
        setQuestion({
            ...question,
            answers: question.answers.map((data, count) =>
                count + 1 === index ? { ...data, is_correct: true } : { ...data, is_correct: false }
            )
        });
    };

    return (
        <MainField>
            {label && <label>{label}</label>}
            <div className='row-content'>
                <Image width={25} height={25} src={dot} alt='dot' />
                <h3>{index}</h3>
                <Input valueHandler={e => valueHandler(e)} placeholder={placeholder} />
                <div className='icon'>
                    {item.value === '' && question.answers.length > 1 && <Image src={close} alt='close' onClick={removeInputHandler} />}
                    {item.is_correct && item.value !== '' && <Image src={tick} alt='tick' className='tick' />}
                    {!item.is_correct && item.value !== '' && (
                        <Image src={tickDisable} alt='tickDisable' className='tick' onClick={handleCheckCurrent} />
                    )}
                </div>
            </div>
        </MainField>
    );
}

export default AnswerInput;
