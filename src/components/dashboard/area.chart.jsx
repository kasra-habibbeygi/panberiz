import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
    {
        name: 'فروردین',
        income: 200
    },
    {
        name: 'فروردین',
        income: 260
    },
    {
        name: 'فروردین',
        income: 150
    },
    {
        name: 'فروردین',
        income: 300
    },
    {
        name: 'فروردین',
        income: 120
    }
];


function ChartArea() {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
                data={data}
                syncId='anyId'
                margin={{
                    top: 50,
                    right: 0,
                    left: 0,
                    bottom: 0
                }}
            >
                <defs>
                    <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='rgba(117, 27, 116, 0.79)' stopOpacity={0.8} />
                        <stop offset='95%' stopColor='rgba(117, 27, 116, 0)' stopOpacity={0} />
                        <stop offset='95%' stopColor='rgba(117, 27, 116, 0)' stopOpacity={0} />
                    </linearGradient>
                </defs>
                {/* <XAxis dataKey='name' /> */}
                {/* <YAxis  /> */}
                <CartesianGrid verticalCoordinatesGenerator='1' />
                <Area
                    type='monotone'
                    dataKey='income'
                    strokeWidth={4}
                    stroke='rgba(117, 27, 116, 1)'
                    fillOpacity={1}
                    fill='url(#colorUv)'
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default ChartArea;
