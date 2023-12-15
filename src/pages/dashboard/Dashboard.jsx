import SibeBar from '../../components/sidebar/SibeBar'
import { Outlet } from 'react-router-dom'
import { RiMenu2Fill } from "react-icons/ri";
import PropTypes from "prop-types"
import { IoSearch } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const Dashboard = ({ setSideBarOpen, sideBarOpen }) => {

    return (
        <div className="flex">
            <SibeBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
            <div className="flex-1 sm:min-h-[100vh] sm:max-h-[100vh] overflow-y-auto relative">
                <TopBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />
                <div className='w-full p-3'>
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


const TopBar = ({ setSideBarOpen, sideBarOpen }) => {
    return (
        <div className='w-full border-b-[1px] border-[#ffffff3c] py-5 px-3 flex items-center justify-between'>
            <div className='flex items-center justify-center gap-[0px]'>
                <RiMenu2Fill onClick={() => setSideBarOpen(!sideBarOpen)} className='text-[30px] cursor-pointer lg:hidden mr-2' />
                <IoSearch className=' cursor-pointer text-2xl' />
                <input type="text" placeholder='Search..' name="" id="" className='px-2 bg-transparent outline-none border-none text-sm max-w-[100px] lg:max-w-none' />
            </div>
            <div className='flex items-center justify-center gap-[15px] px-2'>
                <div className='relative hover:opacity-[.7]'>
                    <FiMessageSquare className='cursor-pointer text-2xl ' />
                    <div className='bg-blue-500 h-4 w-4 rounded-full absolute -top-2 -right-[5px] text-[10px] font-[500] leading-[1] flex items-center justify-center'>
                        8
                    </div>
                </div>
                <div className='relative hover:opacity-[.7]'>
                    <FaRegBell className='cursor-pointer text-2xl ' />
                    <div className='bg-blue-500 h-4 w-4 rounded-full absolute -top-2 -right-[5px] text-[10px] font-[500] leading-[1] flex items-center justify-center'>
                        5
                    </div>
                </div>
                <FaPowerOff className='cursor-pointer text-2xl hover:opacity-[.7]' />
            </div>
        </div>
    )
}

TopBar.propTypes = {
    setSideBarOpen: PropTypes.func,
    sideBarOpen: PropTypes.bool
}