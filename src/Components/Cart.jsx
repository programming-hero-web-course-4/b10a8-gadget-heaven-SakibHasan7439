import { useContext, useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { storedCartList } from "../LoadToDataBase/LoadToDataBase"
import CartItems from "./CartItems"
import { ProductContext } from "../Layout/MainLayouts"
import { BiSortAlt2 } from "react-icons/bi"
import success from "/src/assets/Group.png"

const Cart = () => {
    const { setAddItem } = useContext(ProductContext);
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const productsData = useLoaderData();

    useEffect(()=>{
        const storedCartItems = storedCartList();
        const cartItemsInt = storedCartItems.map((id)=> parseInt(id));
        const allCartItems = productsData.filter((product)=> cartItemsInt.includes(product.product_id));
        const getCopy = [...allCartItems].map((item)=> item.price);
        const totalSum = getCopy.reduce((sum, current)=> current + sum, 0);
        setPrice(totalSum);

        setProducts(allCartItems);

    }, [productsData, setAddItem]);

    const handleSortByPrice = () =>{
        const sortedList = [...products].sort((a, b)=> b.price - a.price);
        setProducts(sortedList);
    }

    // const handleCloseModal = () =>{

    // }

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center px-12">
                <img className="mx-auto" src={success} alt="successful image" />
                <h2 className="py-2 mb-2 text-xl md:text-2xl font-bold border-b-2">Payment Successful</h2>
                <p className="text-[16px] font-semibold mb-2">Thanks for purchasing.</p>
                <p className="text-[16px] font-semibold mb-4">Total:{price.toFixed(2)}</p>
                <div className="justify-center w-full">           
                <form method="dialog">
                    <button className="btn w-full rounded-full py-3 bg-base-200">Close</button>
                </form>
                </div>
            </div>
            </dialog>
            <div className="flex justify-between px-2 md:px-6">
                <h2 className="text-xl md:text-2xl mb-4 font-bold">Carts</h2>
                <div className="flex items-center gap-4">
                    <h3 className="text-xl md:text-2xl font-bold md:w-[260px]">Total Cost: {price.toFixed(2)}</h3>
                    <button onClick={handleSortByPrice} className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-purple-600">
                        <p className="text-purple-600 font-semibold">Sort by price</p>
                        <BiSortAlt2 className="text-purple-600 text-xl"></BiSortAlt2>
                    </button>
                    <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="px-5 py-2 rounded-full bg-purple-600 text-white font-semibold">Purchase</button>
                </div>
            </div>
            {
                products.map((product)=> <CartItems 
                key={product.product_id}
                product={product}
                ></CartItems>)
            }
        </div>
    );
};

export default Cart;