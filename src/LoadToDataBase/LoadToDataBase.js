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
        console.log(id,"already exists");

    }else {
        cartList.push(id);
        const makeStr = JSON.stringify(cartList);
        localStorage.setItem("cart-list", makeStr);
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
        console.log(id,"already exists");

    }else {
        cartList.push(id);
        const makeStr = JSON.stringify(cartList);
        localStorage.setItem("wish-list", makeStr);
    }
}

export { addToCartList, addToWishList, storedCartList, storedWishList };