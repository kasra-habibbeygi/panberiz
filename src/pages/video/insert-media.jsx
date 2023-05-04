import LayoutProvider from '@/components/layout';
import * as Style from '@/assets/styles/video/insert-media.style';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Col, Row } from 'antd';
import CustomSelect from '@/components/common/select';
import CustomInput from '@/components/common/input';
import CustomNumberInput from '@/components/common/number-input';
import CustomAreaInput from '@/components/common/area-input';
import CustomUpload from '@/components/common/upload';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Image from 'next/image';
import quizEmpty from '../../assets/images/video/quiz-empty.png';
import { QuizForm } from '@/components/video/quiz-form';
import { useState } from 'react';

function InsertMedia() {
    const [open, setOpen] = useState(false);
    return (
        <LayoutProvider>
            <Style.InsertMediaField>
                <h1>افزودن مدیا</h1>
                <div className='contentContainer'>
                    <div className='form'>
                        <div className='section'>
                            <div className='type'>
                                <p>نوع مدیا :</p>
                                <RadioGroup row>
                                    <FormControlLabel value='pdf' control={<Radio size='small' />} label='PDF' />
                                    <FormControlLabel value='video' control={<Radio size='small' />} label='ویدئو' />
                                </RadioGroup>
                            </div>
                        </div>
                        <div className='section'>
                            <Row>
                                <Col span={9}>
                                    <CustomSelect />
                                </Col>
                                <Col span={15}>
                                    <CustomSelect />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <CustomSelect />
                                </Col>
                            </Row>
                        </div>
                        <div className='section'>
                            <Row>
                                <Col span={15}>
                                    <h3>عنوان</h3>
                                    <CustomInput />
                                </Col>
                                <Col span={9}>
                                    <h3>مدت زمان (دقیقه)</h3>
                                    <CustomNumberInput />
                                </Col>
                            </Row>
                        </div>
                        <div className='section'>
                            <Row>
                                <Col span={24}>
                                    <h3>توضیحات</h3>
                                    <CustomAreaInput />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <CustomUpload />
                                </Col>
                                <Col span={12}>
                                    <CustomUpload />
                                </Col>
                            </Row>
                        </div>
                        <div className='section'>
                            <Row>
                                <Col span={24}>
                                    <div className='quiz-header'>
                                        <h3>کوییز</h3>
                                        <button onClick={() => setOpen(!open)} className='left'>
                                            <h3>طرح سوال جدید</h3>
                                            <KeyboardBackspaceIcon size='small' />
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <div className='quiz-container'>
                                        <Image src={quizEmpty} alt='quiz-empty' />
                                        <h3>سوالی طرح نشده است</h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Style.InsertMediaField>
            <QuizForm open={open} setOpen={setOpen} />
        </LayoutProvider>
    );
}

export default InsertMedia;
