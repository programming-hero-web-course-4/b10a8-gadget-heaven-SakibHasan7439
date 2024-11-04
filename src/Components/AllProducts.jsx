import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const AllProducts = () => {
    const allProducts = useLoaderData();
    const {category} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        if(category) {
            const filteredByCategory = [...allProducts].filter((product)=>product.category === category)
            setProducts(filteredByCategory);
            
        }else {
            setProducts(allProducts)
        }
    }, [allProducts, category])

    return (
        <div className="md:grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map((product)=> <Product
                key={product.product_id} 
                product={product}></Product>)
            }
        </div>
    );
};

export default AllProducts;