import { list } from "postcss";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();

    return (
        <div>
           <h2 className="text-base font-semibold text-center mb-7">Dragon News Home</h2>
           <p className="text-gray-400 text-sm mb-3">{news.length} News Found On This Category</p>

           <div>
            {
                news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
            }
           </div>
        </div>
    );
};

export default CategoryNews;