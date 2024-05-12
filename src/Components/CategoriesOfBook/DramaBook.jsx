import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const DramaBook = ({book}) => {
    const { _id, image, name, quantity, author, category, description, rating, contents } = book;

    return (
        <div className="card card-side bg-base-100 shadow-xl border-[1px] border-[#453F78] border-dotted">
            <div className="w-40 p-5 overflow-hidden">
                <figure className="w-40 h-40 overflow-hidden">
                    <img className="w-40 h-40 overflow-hidden" src={image} alt="Book" />
                </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <Rating
                    emptySymbol={<CiStar />}
                    fullSymbol={<FaStar />}
                    initialRating={rating}
                    readonly
                />
                <p className="font-medium"><span className="font-clicker">Author:</span> {author}</p>
                <p className="font-medium"><span className="font-clicker">Category:</span> {category}</p>
                <div className="card-actions justify-end">
                <Link to={`/detail/${_id}`}><button className="btn text-white bg-[#453F78]">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DramaBook;