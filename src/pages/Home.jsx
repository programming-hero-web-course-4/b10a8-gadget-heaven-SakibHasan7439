import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Category from "../Components/Category";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-3xl mb-6 font-semibold">Explore Cutting Edge Gadgets</h2>
            <div className="lg:grid grid-cols-12 gap-4 lg:px-8">
                <div className="col-span-2">
                    <div className="bg-white p-4 flex flex-col border-2 rounded-lg">
                        <NavLink to={'/'}>
                            <button className="bg-gray-200 pl-3 pr-12 w-[180px] py-3 rounded-full text-slate-600 font-semibold mb-4">All Products</button>
                        </NavLink>
                        
                        <Category categories={categories}></Category>
                        
                    </div>
                </div>
                <div className="col-span-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;