import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div>
            <Helmet>
            <title>Gadget Heaven | Dashboard</title>
            </Helmet>
            <div className="h-80 p-2 bg-purple-600 md:p-6 text-center mb-4 lg:mb-8">
                <div className="w-11/12 lg:w-6/12 mx-auto">
                    <h2 className="text-white font-bold mb-4 text-xl md:text-2xl lg:text-3xl">Dashboard</h2>
                    <p className="text-white mb-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <NavLink to={'cart'} className={({isActive})=> `border-2 px-6 py-2 md:px-10 rounded-full ${isActive ? "bg-white text-purple-600 font-bold": "border-white text-white"}`}>Cart</NavLink>

                        <NavLink to={'wishList'} className={({isActive})=> `border-2 px-6 py-2 md:px-10 rounded-full ${isActive ? "bg-white text-purple-600 font-bold": "border-white text-white"}`}>WishList</NavLink>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;