import { AreaChart, Area, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Sun',
        cost: 4000,
        profit: 2400,
        amount: 2400,
    },
    {
        name: 'Mon',
        cost: 3000,
        profit: 1398,
        amount: 2210,
    },
    {
        name: 'The',
        cost: 2000,
        profit: 9800,
        amount: 2290,
    },
    {
        name: 'Wed',
        cost: 2780,
        profit: 3908,
        amount: 2000,
    },
    {
        name: 'Rhu',
        cost: 1890,
        profit: 4800,
        amount: 2181,
    },
    {
        name: 'Fri',
        cost: 2390,
        profit: 3800,
        amount: 2500,
    },
    {
        name: 'Sat',
        cost: 3490,
        profit: 4300,
        amount: 2100,
    },
];
const BifChartBox = () => {
    return (
        <div className='w-full h-full max-h-[350px] sm:max-h-[300px] space-y-6'>
            <h1 className='text-2xl font-[600]'>
               Total Orders
            </h1>
            <div className='w-full h-full'>
                <ResponsiveContainer width="99%" height="85%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="cost" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="profit" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="amount" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BifChartBox
