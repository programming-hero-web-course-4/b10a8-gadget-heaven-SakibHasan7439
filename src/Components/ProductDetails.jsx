import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
    const details = useLoaderData();
    const {product_id} = useParams();
    const makeIntId = parseInt(product_id);
    const [products, setProducts] = useState({});

    useEffect(()=>{
        const product = [...details].find((detail)=> detail.product_id === makeIntId);
        setProducts(product);
    }, [details, makeIntId]);

    const {product_image, product_title, price, availability, Specification, rating, description} = products;

    return (
        <div className="h-[900px] md:h-[650px] ">
            <div className="bg-purple-600 h-80 w-full p-4 lg:p-6">
                <div className="lg:w-10/12 xl:w-6/12 mb-6 mx-auto text-center">
                    <h2 className="text-xl mb-4 md:text-3xl text-white font-bold">Product Details</h2>
                    <p className="text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
                <div className="w-11/12 rounded-2xl md:grid grid-cols-3 p-2 gap-4 md:p-4 lg:p-6 lg:w-8/12 h-[400px] mx-auto bg-white">
                    <img className="col-span-1" src={product_image} alt={`${product_title} image`} />
                    <div className="col-span-2">
                        <h2 className="text-lg md:text-2xl mb-3 font-semibold">{product_title}</h2>
                        <p className="mb-3">price: $ {price}</p>
                        <p className={availability ? "bg-green-200 border-2 border-green-500 px-4 text-center py-2 rounded-full mb-4 w-32": "bg-red-200 border-2 text-center border-red-500 rounded-full px-4 py-2 mb-4 w-32"}>{availability ? "in Stock" : "Stock Out"}</p>
                        <p className="mb-3">{description}</p>
                        <p className="font-bold mb-3">Specification: </p>
                        <ol className="mb-3 list-decimal ml-4">
                            {
                                Specification && Specification.map((config, index)=> <li key={index}>{config}</li>)   
                            }
                        </ol>
                        <p className="font-bold">Rating</p>
                        <div className="flex gap-2 items-center mb-4 text-yellow-400">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaRegStar></FaRegStar>
                            <p className="bg-base-200 px-3 py-1 text-black font-bold rounded-full">{rating}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button className="bg-purple-600 flex items-center gap-3 text-white px-6 py-2 rounded-full"><span>Add To Cart </span><MdOutlineShoppingCart className="text-xl"></MdOutlineShoppingCart></button>
                            <Link className="border-2 p-[11px] w-[40px] h-[40px] rounded-full">
                                <FaRegHeart></FaRegHeart>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;