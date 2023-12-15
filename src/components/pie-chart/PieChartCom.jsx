import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Mobile', value: 400, color: "#0088FE" },
    { name: 'Desktop', value: 300, color: "#00C49F" },
    { name: 'Laptop', value: 300, color: "#FFBB28" },
    { name: 'Tablet', value: 200, color: "#FF8042" },
];

const PieChartCom = () => {
    return (
        <div className='w-full h-full space-y-5 max-h-[600px]'>
            <div>
                <ResponsiveContainer width="99%" height={300}>

                    <PieChart  >
                        <Tooltip contentStyle={{ borderRadius: "5px", background: "white" }} />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item?.name} fill={item?.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='w-full flex justify-between gap-[20px] sm:gap-0 flex-col sm:flex-row md:px-[50px]'>
                {
                    data.map((item) => (
                        <div key={item.name} className='flex  flex-col items-center'>
                            {/* Title  */}
                            <div className='flex items-center gap-[10px]'>
                                {/* dot  */}
                                <div style={{ background: item.color }} className="w-4 h-4 rounded-full" />
                                <span>{item.name}</span>
                            </div>
                            <div >
                                {item.value}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PieChartCom
