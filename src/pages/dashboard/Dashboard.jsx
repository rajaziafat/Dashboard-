import SibeBar from '../../components/sidebar/SibeBar'
import { Outlet } from 'react-router-dom'
import { RiMenu2Fill } from "react-icons/ri";
import PropTypes from "prop-types"
const Dashboard = ({ setSideBarOpen, sideBarOpen }) => {

    return (
        <div className="flex">
            <SibeBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
            <div className="flex-1">
                <div className='w-full border-b-[1px] border-[#ffffff3c] py-3 p-2 flex items-center justify-between'>
                    <RiMenu2Fill onClick={() => setSideBarOpen(!sideBarOpen)} className='text-[30px] cursor-pointer lg:hidden' />  Top Menu
                </div>
                <div className='w-full p-2'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard


Dashboard.propTypes = {
    setSideBarOpen: PropTypes.func.isRequired,
    sideBarOpen: PropTypes.bool.isRequired
}