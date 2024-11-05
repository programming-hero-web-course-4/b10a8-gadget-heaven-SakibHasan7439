import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { createContext, useState } from "react";


export const ProductContext = createContext();

const MainLayouts = () => {
    const [addItem, setAddItem] = useState(0);
    return (
        <div className="container mx-auto px-2 md:px-6">
            <ProductContext.Provider value={{setAddItem, addItem}}>
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-450px)]">
                    <Outlet></Outlet>
                </div>
            </ProductContext.Provider>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;