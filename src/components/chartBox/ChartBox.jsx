import { Link } from "react-router-dom"
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from "prop-types"


const ChartBox = ({ icon, title, number, durationText, dayaKey, chartColor, percentage, chartData }) => {
    const DynamicIcon = icon
    return (
        <div className="w-full h-full flex justify-between px-2">
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


ChartBox.propTypes = {
    /** The title of the box */
    title: PropTypes.string.isRequired,
    /** Number in the box */
    number: PropTypes.number.isRequired,
    /** Color for the icon and line in the chart */
    chartColor: PropTypes.string,
    /** Data points for the chart */
    chartData: PropTypes.array.isRequired,
    /** Key used to extract 'y' value from each object in `data`. Default is 'value'. */
    dayaKey: PropTypes.string,
    /** Text showing how long the data represents (e.g., "30 Days") */
    durationText: PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
}