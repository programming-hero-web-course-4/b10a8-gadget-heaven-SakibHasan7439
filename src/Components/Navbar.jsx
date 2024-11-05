import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { ProductContext } from "../Layout/MainLayouts";
import { storedCartList, storedWishList } from "../LoadToDataBase/LoadToDataBase";

const Navbar = () => {
    const { addItem, addToWish,setAddItem, setAddToWish } = useContext(ProductContext);

    useEffect(()=>{
        const storedCartItems = storedCartList();
        const cartItemsInt = storedCartItems.map((id)=> parseInt(id));
        setAddItem(cartItemsInt);

        const storedWishItem = storedWishList();
        const wishListItemInt = storedWishItem.map((id)=> parseInt(id));
        setAddToWish(wishListItemInt);
    },[]);

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
                <NavLink className={({isActive})=> `${isActive ? "font-bold": "hover:font-bold"}`}  to={'/'}>Home</NavLink>
                <NavLink className={({isActive})=> `${isActive ? "font-bold": "hover:font-bold"}`}  to={'/statistics'}>Statistics</NavLink>
                <NavLink className={({isActive})=> `${isActive ? "font-bold": "hover:font-bold"}`}  to={'/dashboard'}>DashBoard</NavLink>
                <NavLink className={({isActive})=> `${isActive ? "font-bold": "hover:font-bold"}`}  to={'/blog'}>Blogs</NavLink>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu text-white text-lg menu-horizontal px-1 flex gap-6">
                <NavLink className={({isActive})=> `${isActive ? "font-bold underline": "hover:font-bold"}`}  to={'/'}>Home</NavLink>
                <NavLink className={({isActive})=> `${isActive ? "font-bold underline": "hover:font-bold"}`}  to={'/statistics'}>Statistics</NavLink>
                <NavLink className={({isActive})=> `${isActive ? "font-bold underline": "hover:font-bold"}`}  to={'/dashboard'}>DashBoard</NavLink>
                <NavLink className={({isActive})=> `${isActive ? "font-bold underline": "hover:font-bold"}`}  to={'/blog'}>Blogs</NavLink>
            </ul>
        </div>
        <div className="navbar-end">
            <div className="bg-white p-[11px] rounded-full relative w-10 h-10">
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <p className="absolute bg-white rounded-full w-6 h-6 pl-[8px] left-[18px] -top-3">{addItem.length}</p>
                </div>
            <div className="bg-white p-[11px] relative rounded-full w-10 h-10">
                <FaRegHeart></FaRegHeart>
                <p className="absolute bg-white rounded-full w-6 h-6 pl-[8px] left-[18px] -top-3">{addToWish.length}</p>
            </div>
        </div>
        </div>
    );
};

export default Navbar;