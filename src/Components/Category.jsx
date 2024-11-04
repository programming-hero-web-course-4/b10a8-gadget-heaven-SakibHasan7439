import { NavLink } from "react-router-dom";

const Category = ({categories}) => {
    return (
        <div>
            {
                categories.map((category)=> (
                    <NavLink className={({isActive})=> `pl-3 py-3 rounded-full ${isActive ? "bg-purple-600 text-white": "hover:text-purple-600"}`} 
                    key={category.name_id} to={`/category/${category.category}`}>
                        <button className={`w-[180px] mb-4 pl-3 pr-12 py-3 rounded-full`}>{category.category}</button>
                    </NavLink>  
                ))
            }
        </div>
    );
};

export default Category;