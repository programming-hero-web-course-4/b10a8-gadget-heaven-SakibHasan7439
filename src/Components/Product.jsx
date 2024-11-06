/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {product_title, product_id, price, product_image} = product;
    return (
    <div className="card bg-base-100 border-2 rounded-lg p-4">
        <figure className="bg-base-100 rounded-lg">
            <img className="h-[300px]"
            src={product_image}
            alt={`${product_title} image`} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p>Price{price}k</p>
            <div className="card-actions justify-start">
            <Link to={`/product/${product_id}`} className="px-6 py-2 rounded-full border-2 border-purple-700 font-bold text-purple-700">View Details</Link>
            </div>
        </div>
    </div>
    );
};

export default Product;