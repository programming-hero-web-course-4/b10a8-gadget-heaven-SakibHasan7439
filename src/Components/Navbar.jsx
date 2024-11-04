import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar rounded-t-lg bg-purple-600 p-2 md:p-8">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-white w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/statistics'}>Statistics</NavLink>
                <NavLink to={'/dashboard'}>DashBoard</NavLink>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu text-white text-lg menu-horizontal px-1 flex gap-6">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/statistics'}>Statistics</NavLink>
                <NavLink to={'/dashboard'}>DashBoard</NavLink>
            </ul>
        </div>
        <div className="navbar-end">
            <div className="bg-white p-[11px] rounded-full relative w-10 h-10">
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <p className="absolute bg-white rounded-full w-6 h-6 pl-[8px] left-[18px] -top-3">0</p>
                </div>
            <div className="bg-white p-[11px] relative rounded-full w-10 h-10">
                <FaRegHeart></FaRegHeart>
                <p className="absolute bg-white rounded-full w-6 h-6 pl-[8px] left-[18px] -top-3">0</p>
            </div>
        </div>
        </div>
    );
};

export default Navbar;