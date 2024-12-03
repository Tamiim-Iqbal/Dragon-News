import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    }, [])

    return (
        <div className="w-10/12">
            <h2 className="text-base font-semibold mb-6">All Category</h2>
            <div className="flex flex-col gap-2">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`}className="btn hover:text-black" key={category.category_id}>
                        {category.category_name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;