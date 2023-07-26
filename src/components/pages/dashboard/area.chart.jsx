/* eslint-disable react/prop-types */
import { AreaChart, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function ChartArea({ data }) {
    return (
        <ResponsiveContainer width='100%' height={300}>
            <AreaChart
                data={data}
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
                <XAxis dataKey='time' />
                <YAxis />
                <Tooltip />
                <CartesianGrid verticalCoordinatesGenerator='1' />
                <Area type='monotone' dataKey='value' strokeWidth={4} stroke='rgba(117, 27, 116, 1)' fillOpacity={1} fill='url(#colorUv)' />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default ChartArea;
