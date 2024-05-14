import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const TableBook = ({ book }) => {

    const { _id, image, name, quantity, author, category, description, rating, contents } = book;

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>
                            <div>Name &</div>
                            <div>Author</div>
                        </th>
                        <th>
                            <div>Category &</div>
                            <div>Rating</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={image} alt="Book Image" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>{name}</div>
                            <div>{author}</div>
                        </td>
                        <td>
                            <div>
                                {category}
                            </div>
                            <div>
                                <Rating
                                    emptySymbol={<CiStar />}
                                    fullSymbol={<FaStar />}
                                    initialRating={rating}
                                    readonly
                                />
                            </div>
                        </td>
                        <th>
                            <Link to={`/update/${_id}`}><button className="btn text-white bg-[#453F78]">Update</button></Link>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default TableBook;