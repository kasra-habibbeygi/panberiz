// Assets
import Button from '@/components/form-group/button';
import { MainField } from './details.style';
import CLockIcon from '@/assets/icons/clock.svg';
import GridsIcon from '@/assets/icons/grids.svg';

// MUI
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Image from 'next/image';

const DetailsField = () => {
    return (
        <MainField>
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
                بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className='footer_field'>
                <div className='info'>
                    <span>
                        <Image src={CLockIcon} alt='' />7 ساعت پیش
                    </span>
                    <span>
                        <Image src={GridsIcon} alt='' />
                        همایش
                    </span>
                    <span># لورم ایپسوم</span>
                    <span># لورم ایپسوم</span>
                </div>
                <Button color='primary' type='outline'>
                    شروع کوییز
                    <KeyboardBackspaceRoundedIcon />
                </Button>
            </div>
        </MainField>
    );
};

export default DetailsField;
