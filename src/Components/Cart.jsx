import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { storedCartList } from "../LoadToDataBase/LoadToDataBase";
import CartItems from "./CartItems";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const productsData = useLoaderData();
    useEffect(()=>{
        const storedCartItems = storedCartList();
        const cartItemsInt = storedCartItems.map((id)=> parseInt(id));
        
        const allCartItems = productsData.filter((product)=> cartItemsInt.includes(product.product_id));

        setProducts(allCartItems);

    }, [productsData]);
    console.log(products);

    return (
        <div>
            <h2 className="text-xl md:text-2xl mb-4 font-bold">Carts</h2>
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