import { GoListOrdered } from "react-icons/go";
import { Link } from "react-router-dom"
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const ChartBox = ({ icon, title, number, durationText, dayaKey, chartColor, percentage, chartData }) => {
    const DynamicIcon = icon
    return (
        <div className="w-full h-full flex justify-between">
            {/* Box Info */}
            <div className="flex-[2] h-full flex flex-col justify-between">
                {/* title  */}
                <div className="flex gap-[10px] items-center">
                    <DynamicIcon className="text-[30px]" />
                    <span className="text-lg font-[500]">
                        {title}
                    </span>
                </div>
                <h1 className="text-3xl font-[700]">{number}</h1>
                <Link to={"/"} className={``} style={{ color: chartColor }}>View All</Link>
            </div>
            {/* Chart Info  */}
            <div className="flex-[2] flex items-end justify-between flex-col ">
                {/* chart  */}
                <div className="w-full min-h-[80px] sm:min-h-[100px]">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={dayaKey}
                                dot={false}
                                stroke={chartColor}
                                strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                {/* texts  */}
                <div className="flex flex-col text-right">
                    <span className="font-[700] text-[20px]" style={{ color: percentage < 0 ? "red" : "limegreen" }}>{percentage}%</span>
                    <span className="text-[14px]">{durationText}</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox
