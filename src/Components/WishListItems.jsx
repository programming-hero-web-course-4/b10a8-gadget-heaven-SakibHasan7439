const WishListItems = ({item}) => {
    return (
    <div className="bg-white shadow-md items-center md:flex gap-4 mb-4 p-4 rounded-xl">
        <img className="h-40 w-40 object-cover" src={item.product_image} alt="product image" />
        <div>
            <p className="font-bold text-xl mb-3">{item.product_title}</p>
            <p className="mb-3">{item.description}</p>
            <p className="font-bold mb-3">Price: $ {item.price}</p>
        </div>
    </div>
    );
};

export default WishListItems;