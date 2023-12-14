import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from "prop-types"


const BarChartLines = (props) => {
    return (
        <div className='w-full h-full min-h-[150px] max-h-[150px]'>
            <ResponsiveContainer width="99%" height="99%">
                <BarChart data={props.chartdata}>
                    <Tooltip cursor={{ fill: "none" }} contentStyle={{ background: "#2a3447", borderRadius: "5px" }} labelStyle={{ display: "none" }} />
                    <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartLines


BarChartLines.propTypes = {
    chartdata: PropTypes.array,
    color: PropTypes.string,
    dataKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}