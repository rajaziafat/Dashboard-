import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaChartArea } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { FaTableCells } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types"

const Sidebar = ({ sideBarOpen,setSideBarOpen }) => {
  return (
    <>
      <div className={`flex-1 max-w-[240px] z-[200] bg-[#232F47] min-h-[100vh] max-h-[100vh] overflow-y-scroll small-scroll pb-10 flex flex-col fixed lg:relative w-full top-0 left-0  lg:translate-x-0 ${sideBarOpen ? "translate-x-[0%]" : "translate-x-[-100%]"} transition`}>
        {/* Logo */}
        <div className="p-2 flex items-center justify-between">
          <img src="./logo.png" alt="" className="max-w-[110px] mt-3" />
          <RxCross2 onClick={()=>setSideBarOpen(!sideBarOpen)} className="text-[25px] cursor-pointer lg:hidden" />
        </div>
        {/* Bottom Menus */}
        <NavigationLinks />
      </div>
    </>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  sideBarOpen: PropTypes.bool,
  setSideBarOpen: PropTypes.func,
}

const NavigationLinks = () => {
  return (
    <div className="w-full space-y-[5px] mt-3">
      <div className="">
        <p className="px-2 font-[500] text-sm">
          Default
        </p>
        <div className="w-full mt-1">
          <MenuItem to="/" Icon={MdSpaceDashboard} label="Dashboard" />
        </div>
      </div>
      <div className="">
      <p className="px-2 font-[500] text-sm">
          Intractive
        </p>
        <div className="w-full mt-1">
          <MenuItem to="/" Icon={RiPagesFill} label="Pages" />
          <MenuItem to="/" Icon={FaProjectDiagram} label="Projects" />
          <MenuItem to="/" Icon={FaCartArrowDown} label="Orders" />
          <MenuItem to="/" Icon={FaFileInvoice} label="Invoices" />
          <MenuItem to="/" Icon={MdOutlineTaskAlt} label="Tasks" />
          <MenuItem to="/" Icon={SlCalender} label="Calender" />
        </div>
      </div>
      <div className="">
      <p className="px-2 font-[500] text-sm">
          Activity
        </p>
        <div className="w-full mt-1">
          <MenuItem to="/" Icon={FaChartArea} label="Charts" />
          <MenuItem to="/" Icon={FaWpforms} label="Forms" />
          <MenuItem to="/" Icon={FaTableCells} label="Tables" />
          <MenuItem to="/" Icon={FaRegHeart} label="Icons" />
          <MenuItem to="/" Icon={FaMapMarkedAlt} label="Maps" />
        </div>
      </div>
      <div className="">
      <p className="px-2 font-[500] text-sm">
          MFA
        </p>
        <div className="w-full mt-1 text-sm">
          <MenuItem to="/" Icon={IoDocumentText} label="Documentation" />
          <MenuItem to="/" Icon={MdOutlinePayment} label="Charging" />

        </div>
      </div>
    </div>

  )
}

const MenuItem = ({ to = "", Icon, label = "default" }) => {
  const CustomIcon = Icon;
  return (
    <Link to={to} className="flex items-center gap-[9px] hover:bg-[#1E2A38] transition p-2 px-5 opacity-[.7] hover:opacity-[1]">
      <CustomIcon className="text-[22px]" />
      <p className="">{label}</p>
    </Link>
  );
};

MenuItem.propTypes = {
  /** The route of the link */
  to: PropTypes.string,
  /** The icon component for this menu item */
  Icon: PropTypes.elementType,
  /** Label text for the menu item */
  label: PropTypes.string,
}
