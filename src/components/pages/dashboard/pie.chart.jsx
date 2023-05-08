import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['rgba(117, 27, 116, 1)', 'rgba(57, 22, 79, 1)', 'rgba(214, 160, 249, 1)'];

const renderActiveShape = props => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 1}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
        </g>
    );
};

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }
];

function ChartPie() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
    return (
        <ResponsiveContainer width={'100%'} height={300}>
            <PieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    onMouseEnter={onPieEnter}
                    data={data}
                    cx='50%'
                    cy='50%'
                    innerRadius={60}
                    outerRadius={100}
                    fill='#8884d8'
                    dataKey='value'
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default ChartPie;
