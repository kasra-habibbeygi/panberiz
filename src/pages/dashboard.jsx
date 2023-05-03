import LayoutProvider from '@/components/layout';
import * as Style from '../assets/styles/dasboard/dashboard.style';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CircleIcon from '@mui/icons-material/Circle';
import ChartPie from '@/components/dashboard/pie.chart';
import ChartArea from '@/components/dashboard/area.chart';
import ReportItem from '@/components/dashboard/reportItem';

function Dashboard() {
    return (
        <LayoutProvider>
            <Style.DashboardField>
                <div className='income'>
                    <div className='line-chart'>
                        <div className='header'>
                            <div className='title'>
                                <h1>درآمد</h1>
                                <p>1.90% +</p>
                                <ShowChartIcon sx={{ color: '#6ED097' }} />
                            </div>
                            <div className='period'>
                                <select defaultValue={'هفتگی'}>
                                    <option>هفتگی</option>
                                </select>
                            </div>
                        </div>
                        <div className='chart'>
                            <ChartArea />
                        </div>
                    </div>
                    <div className='circle-chart'>
                        <div className='select-rank'>
                            <select defaultValue={'هفتگی'}>
                                <option>انتخاب رنک</option>
                            </select>
                        </div>
                        <div className='chart'>
                            <ChartPie />
                        </div>
                        <div className='flags'>
                            <div className='section'>
                                <div>
                                    <CircleIcon fontSize='small' htmlColor='#39164F' />
                                    <p>بازدید مجدد</p>
                                </div>
                                <div>
                                    <CircleIcon fontSize='small' htmlColor='#751B74' />
                                    <p>بازدید مجدد</p>
                                </div>
                            </div>
                            <div className='section'>
                                <div>
                                    <CircleIcon fontSize='small' htmlColor='#D6A0F9' />
                                    <p>بازدید مجدد</p>
                                </div>
                                <div>
                                    <CircleIcon fontSize='small' htmlColor='#EACFFC' />
                                    <p>بازدید مجدد</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='report'>
                    <h1>گزارش بازدید رنک‌ها</h1>
                    <div className='table'>
                        <div className='header'>
                            <div>ردیف</div>
                            <div>رنک</div>
                            <div>تعداد محتوا</div>
                            <div>تعداد بازدید</div>
                            <div>میزان ساعت بازدید</div>
                            <div>جزئیات</div>
                        </div>
                        <ReportItem />
                    </div>
                </div>
            </Style.DashboardField>
        </LayoutProvider>
    );
}

export default Dashboard;
