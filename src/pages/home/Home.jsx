import ChartBox from "../../components/chartBox/ChartBox"
import { GoListOrdered } from "react-icons/go";
import { FcCustomerSupport } from "react-icons/fc";
import { FaMapLocation } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

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

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid sm:grid-cols-2 900:grid-cols-3 1200:grid-cols-4 gap-[20px]">
        <div className="min-h-[160px]  bg-[#232F47]  p-2">
          <ChartBox {...OrdersData} />
        </div>
        <div className="min-h-[160px]  bg-[#232F47]  p-2">
          <ChartBox {...customersData} />
        </div>
        <div className="min-h-[160px]  bg-[#232F47]  p-2">
          <ChartBox {...LocationsData} />
        </div>
        <div className="min-h-[160px] 900:col-span-3 1200:col-span-1  bg-[#232F47]  p-2">
          <ChartBox {...productsData} />
        </div>
      </div>

    </div>
  )
}

export default Home
