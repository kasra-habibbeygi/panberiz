import LayoutProvider from '@/components/layout';
import * as Style from '../../assets/styles/video/insert-media.style';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function InsertMedia() {
    return (
        <LayoutProvider>
            <Style.InsertMediaField>
                <h1>افزودن مدیا</h1>
                <div className='contentContainer'>
                    <div className='type'>
                        <p>نوع مدیا :</p>
                        <RadioGroup row>
                            <FormControlLabel value='pdf' control={<Radio size='small' />} label='PDF' />
                            <FormControlLabel value='video' control={<Radio size='small' />} label='ویدئو' />
                        </RadioGroup>
                    </div>
                    <div className='form'>
                        <div className='section1'>
                            <div className='select'>
                                <p>انتخاب دسته بندی</p>
                                <ExpandMoreIcon />
                            </div>
                            <div className='select2'>
                                <p>انتخاب دسته بندی</p>
                                <ExpandMoreIcon />
                            </div>
                        </div>
                        <div className='select'>
                            <p>انتخاب دسته بندی</p>
                            <ExpandMoreIcon />
                        </div>
                        <div>
                            <div className='input-container flex-2'>
                                <h4>عنوان</h4>
                                <input placeholder='عنوان مدیا را وارد کنید ...' className='input' />
                            </div>
                            <div className='input-container flex-1'>
                                <h4>مدت زمان (دقیقه)</h4>
                                <input placeholder='انتخاب محدوده زمان' className='input' />
                            </div>
                        </div>
                        <div className='input-container flex-1'>
                            <h4>توضیحات</h4>
                            <input placeholder='توضیحات را وارد کنید ...' height={200} multiple className='input' />
                        </div>
                    </div>
                </div>
            </Style.InsertMediaField>
        </LayoutProvider>
    );
}

export default InsertMedia;
