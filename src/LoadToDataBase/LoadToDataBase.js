import { toast } from "react-toastify";

const storedCartList = () =>{
    const storedItem = localStorage.getItem("cart-list");
    if(storedItem){
        const parseItems = JSON.parse(storedItem);
        return parseItems;

    }else {
        return [];
    }
}

const addToCartList = (id) =>{
    const cartList = storedCartList();
    if(cartList.includes(id)){
        toast.error('Item already exists', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }else {
        cartList.push(id);
        const makeStr = JSON.stringify(cartList);
        localStorage.setItem("cart-list", makeStr);
        toast("Successfully added");
    }
}

const storedWishList = () =>{
    const storedItem = localStorage.getItem("wish-list");
    if(storedItem){
        const parseItems = JSON.parse(storedItem);
        return parseItems;

    }else {
        return [];
    }
}

const addToWishList = (id) =>{
    const cartList = storedWishList();
    if(cartList.includes(id)){
        toast.error('Item Already exist', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

    }else {
        cartList.push(id);
        const makeStr = JSON.stringify(cartList);
        localStorage.setItem("wish-list", makeStr);
        toast.info('Added to WishList', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
}

export { addToCartList, addToWishList, storedCartList, storedWishList };