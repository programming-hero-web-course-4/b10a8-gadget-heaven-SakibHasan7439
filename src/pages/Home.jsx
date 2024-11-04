import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-3xl font-semibold">Explore Cutting Edge Gadgets</h2>
            <div className="lg:grid grid-cols-12">
                <div className="col-span-3"></div>
                <div className="col-span-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;