const CartItems = ({product}) => {
    console.log(product);
    return (
        <div className="bg-white shadow-md items-center md:flex gap-4 mb-4 p-4 rounded-xl">
            <img className="h-40 w-40 object-cover" src={product.product_image} alt="product image" />
            <div>
                <p>{product.product_title}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        </div>
    );
};

export default CartItems;