import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Layout/MainLayouts";
import { useLoaderData } from "react-router-dom";
import { storedWishList } from "../LoadToDataBase/LoadToDataBase";
import WishListItems from "./WishListItems";

const WishList = () => {
    const { setAddToWish } = useContext(ProductContext);
    const [items, setItems] = useState([]);
    const allItems = useLoaderData();

    useEffect(()=>{
        const allWishListData = storedWishList();
        const makeItemsInt = allWishListData.map((item)=> parseInt(item));
        setAddToWish(makeItemsInt);
        const allWishListItems = allItems.filter((item)=> makeItemsInt.includes(item.product_id));
        setItems(allWishListItems);

    }, [allItems, setAddToWish]);

    return (
        <div>
            <h2 className="text-xl md:text-2xl mb-4 font-bold">WishList</h2>
             
            {
                items.map((item)=> <WishListItems 
                key={item.product_id}
                item={item}
                ></WishListItems>)
            }
        </div>
    );
};

export default WishList;