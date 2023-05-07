/* eslint-disable react/prop-types */
import { Col, Row } from 'antd';
import Image from 'next/image';
import CustomInput from '../common/input';
import dot from '../../assets/icons/dot-four.svg';

function AnswerInput({ title, index }) {
    return (
        <>
            <h3>{title}</h3>
            <Row className='row'>
                <Col span={1}>
                    <Image width={25} height={25} src={dot} alt='dot' />
                </Col>
                <Col span={1}>
                    <h2>{index}</h2>
                </Col>
                <Col span={22}>
                    <CustomInput placeholder={`${title} را وارد کنید`} />
                </Col>
            </Row>
        </>
    );
}

export default AnswerInput;
