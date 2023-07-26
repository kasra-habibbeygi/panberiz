/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import { useTranslation } from 'next-i18next';

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

function ChartPie({ data, selectedValue }) {
    const { t } = useTranslation('common');
    const test = data.filter(item => item.rank === selectedValue && { name: 'Group A', value: 400 });

    const dataData = test.map(item => ({
        name: `${parseFloat((item.views / item.total) * 100).toFixed(1)} %`,
        value: (item.views / item.total) * 100
    }));

    const finalData = [
        ...dataData,
        {
            name: t('Total'),
            value: 100
        }
    ];

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
                    data={finalData}
                    cx='50%'
                    cy='50%'
                    innerRadius={60}
                    outerRadius={100}
                    fill='#8884d8'
                    dataKey='value'
                >
                    <Cell fill='#39164F' />
                    <Cell fill='#751B74' />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default ChartPie;
