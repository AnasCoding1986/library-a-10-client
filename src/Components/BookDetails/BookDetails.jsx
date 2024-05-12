import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const BookDetails = () => {
    const { user } = useContext(AuthContext);
    const userName = user.displayName;
    const userEmail = user.email;

    const [returnDate, setReturnDate] = useState("");

    const book = useLoaderData();
    const { image, name, author, category, rating, contents } = book;

    const handleBorrow = () => {
        // Handle borrow action here
    };

    return (
        <div className="py-28 px-10 bg-[#f8f8fa]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-1 p-5">
                    <img className="rounded-xl h-80" src={image} alt="" />
                </div>
                <div className="md:col-span-2 text-center space-y-1">
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <Rating
                        emptySymbol={<CiStar />}
                        fullSymbol={<FaStar />}
                        initialRating={rating}
                        readonly
                    />
                    <p className="font-medium"><span className="font-clicker">Author:</span> {author}</p>
                    <p className="font-medium"><span className="font-clicker">Category:</span> {category}</p>
                    <p className="font-medium"><span className="font-clicker">Read Book:</span> {contents}</p>

                    {/* Borrow button with modal */}
                    <div className="pt-5">
                        <button className="btn bg-[#795458] text-white w-full" onClick={() => document.getElementById('borrowModal').showModal()}>Borrow</button>
                    </div>

                    {/* Modal for Borrow Form */}
                    <dialog id="borrowModal" className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleBorrow}>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('borrowModal').close()}>✕</button>
                                <h3 className="font-bold text-lg">Borrow Form</h3>
                                <label htmlFor="returnDate">Return Date:</label>
                                <input type="date" id="returnDate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
                                <label htmlFor="borrowerName">Your Name:</label>
                                <input type="text" id="borrowerName" value={userName} readOnly />
                                <label htmlFor="borrowerEmail">Your Email:</label>
                                <input type="email" id="borrowerEmail" value={userEmail} readOnly />
                                <button type="submit" className="btn bg-[#795458] text-white w-full">Submit</button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
