import ChartBox from "../../components/chartBox/ChartBox"
import { GoListOrdered } from "react-icons/go";
import { FcCustomerSupport } from "react-icons/fc";
import { FaMapLocation } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import BarChartLines from "../../components/bar-chart/BarChart";
import PieChartCom from "../../components/pie-chart/PieChartCom";
import BifChartBox from "../../components/big-chart/BifChartBox";
import TableData from "../../components/table-data/TableData";

const OrdersData = {
  icon: GoListOrdered,
  title: "Orders",
  number: 16,
  durationText: "Since last month",
  dayaKey: "orders",
  chartColor: "#8884d8",
  percentage: 25,
  chartData: [
    {
      name: 'Mon',
      orders: 24,
    },
    {
      name: 'Tue',
      orders: 13,
    },
    {
      name: 'Wed',
      orders: 90,
    },
    {
      name: 'Thu',
      orders: 39,
    },
    {
      name: 'Fri',
      orders: 48,
    },
    {
      name: 'Sat',
      orders: 38,
    },
    {
      name: 'Sun',
      orders: 80,
    },
  ]
}
const customersData = {
  icon: FcCustomerSupport,
  title: "Customers",
  number: 5,
  durationText: "Since last month",
  dayaKey: "customers",
  chartColor: "skyblue",
  percentage: -25,
  chartData: [
    {
      name: 'Mon',
      customers: 2,
    },
    {
      name: 'Tue',
      customers: 3,
    },
    {
      name: 'Wed',
      customers: 9,
    },
    {
      name: 'Thu',
      customers: 3,
    },
    {
      name: 'Fri',
      customers: 4,
    },
    {
      name: 'Sat',
      customers: 8,
    },
    {
      name: 'Sun',
      customers: 1,
    },
  ]
}

const LocationsData = {
  icon: FaMapLocation,
  title: "Locations",
  number: 3,
  durationText: "Since last month",
  dayaKey: "locations",
  chartColor: "teal",
  percentage: 18,
  chartData: [
    {
      name: 'Mon',
      locations: 2,
    },
    {
      name: 'Tue',
      locations: 3,
    },
    {
      name: 'Wed',
      locations: 9,
    },
    {
      name: 'Thu',
      locations: 3,
    },
    {
      name: 'Fri',
      locations: 4,
    },
    {
      name: 'Sat',
      locations: 8,
    },
    {
      name: 'Sun',
      locations: 1,
    },
  ]
}

const productsData = {
  icon: MdOutlineProductionQuantityLimits,
  title: "Products",
  number: 17,
  durationText: "Since last month",
  dayaKey: "products",
  chartColor: "gold",
  percentage: -9,
  chartData: [
    {
      name: 'Mon',
      products: 2,
    },
    {
      name: 'Tue',
      products: 3,
    },
    {
      name: 'Wed',
      products: 9,
    },
    {
      name: 'Thu',
      products: 3,
    },
    {
      name: 'Fri',
      products: 4,
    },
    {
      name: 'Sat',
      products: 8,
    },
    {
      name: 'Sun',
      products: 1,
    },
  ]
}

const vistsData = {
  color: "orange",
  dataKey: "vists",
  chartdata: [
    {
      name: 'Mon',
      vists: 2388,
    },
    {
      name: 'Tue',
      vists: 3200,
    },
    {
      name: 'Wed',
      vists: 1500,
    },
    {
      name: 'Thu',
      vists: 1300,
    },
    {
      name: 'Fri',
      vists: 3400,
    },
    {
      name: 'Sat',
      vists: 2400,
    },
    {
      name: 'Sun',
      vists: 2800,
    },
  ]
}
const ProfitEarnedData = {
  color: "#8882d8",
  dataKey: "profit",
  chartdata: [
    {
      name: 'Mon',
      profit: 2388,
    },
    {
      name: 'Tue',
      profit: 3200,
    },
    {
      name: 'Wed',
      profit: 1500,
    },
    {
      name: 'Thu',
      profit: 1300,
    },
    {
      name: 'Fri',
      profit: 3400,
    },
    {
      name: 'Sat',
      profit: 2400,
    },
    {
      name: 'Sun',
      profit: 3800,
    }
  ]
}

const Home = () => {
  return (
    <div className="w-full space-y-[20px]">
      {/* Top Stats  */}
      <div className="w-full grid grid-cols-4 gap-[20px]">
        <div className="min-h-[190px] max-h-[200px] col-span-4 700:col-span-2 1200:col-span-1  bg-[#232F47] p-2 w-full">
          <ChartBox {...OrdersData} />
        </div>
        <div className="min-h-[190px]  max-h-[200px] col-span-4 700:col-span-2 1200:col-span-1  bg-[#232F47]  p-2 w-full">
          <ChartBox {...customersData} />
        </div>
        <div className="min-h-[190px]  max-h-[200px] col-span-4 700:col-span-2 1200:col-span-1  bg-[#232F47]   p-2 w-full">
          <ChartBox {...LocationsData} />
        </div>
        <div className="min-h-[190px] col-span-4 700:col-span-2 1200:col-span-1 max-h-[200px] bg-[#232F47]  p-2">
          <ChartBox {...productsData} />
        </div>
      </div>
      {/* Middle Data  */}
      <div className="grid grid-cols-4 w-full gap-[20px]">
        {/* Pie Chart  */}
        <div className="bg-[#232F47] col-span-4 1200:col-span-3 p-2">
          <PieChartCom />
        </div>
        <div className="flex flex-col sm:justify-between space-y-[10px] col-span-4 sm:col-span-2 1200:col-span-1  bg-[#232F47]  p-2">
          <h1 className="font-[600] text-xl">
            Profit Earned
          </h1>
          <BarChartLines {...ProfitEarnedData} />
        </div>
        <div className="flex flex-col  sm:justify-between space-y-[10px] col-span-4 sm:col-span-2 1200:col-span-1 bg-[#232F47]  p-2">
          <h1 className="font-[600] text-xl">
            Total Visits
          </h1>
          <BarChartLines {...vistsData} />
        </div>
        {/* Pie Chart  */}
        <div className=" bg-[#232F47] col-span-4 1200:col-span-3  p-3">
          <BifChartBox />
        </div>
        {/* <div className="flex flex-col items-center col-span-1 justify-center text-3xl font-[500] space-y-[10px] min-h-[170px]  bg-[#232F47]  p-2">
          Best Year Ever
        </div> */}
      </div>
      {/* Data Table  */}
      <div className="w-full">
        <TableData />
      </div>
    </div>
  )
}

export default Home
