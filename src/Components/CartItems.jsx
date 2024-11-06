/* eslint-disable react/prop-types */
const CartItems = ({product}) => {
    return (
        <div className="bg-white shadow-md items-center md:flex gap-4 mb-4 p-4 rounded-xl">
            <img className="h-40 w-40 object-cover" src={product.product_image} alt="product image" />
            <div>
                <p className="font-bold text-xl mb-3">{product.product_title}</p>
                <p className="mb-3">{product.description}</p>
                <p className="font-bold mb-3">Price: $ {product.price}</p>
            </div>
        </div>
    );
};

export default CartItems;