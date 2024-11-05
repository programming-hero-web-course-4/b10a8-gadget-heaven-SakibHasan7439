const BlogCard = ({ image, title, description, buttonText }) => {
    return (
        <div className="card bg-base-100 border-2 rounded-lg">
        <figure className="px-10 pt-10">
            <img
            src={image}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions">
            <button className="font-semibold text-xl text-blue-500">{buttonText}</button>
            </div>
        </div>
        </div>
    );
};

export default BlogCard;