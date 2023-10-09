import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, image_url, details, title } = news;
    return (
        <div className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">{title}</h2>
            <img className="mb-4" src={image_url} alt="image_url" />
            {
                // eslint-disable-next-line react/prop-types
                details.length > 200 ?
                    // eslint-disable-next-line react/prop-types
                    <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-orange-500 font-semibold ml-2">Read More...</Link></p>
                    : <p>{details}</p>
            }
        </div>
    );
};

export default NewsCard;