import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const BookDetails = () => {
    const { user } = useContext(AuthContext);
    const userName = user.displayName;
    const userEmail = user.email;

    const [returnDate, setReturnDate] = useState("");
    const book = useLoaderData();
    const { _id, image, name, quantity, author, category, description, rating, contents } = book;

    const handleBorrow = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log('borrow submit');
        if (quantity > 0) {

            const borrowedDate = new Date().toISOString().split('T')[0]; // Borrowed date

            const updatedBook = {
                bookId: book._id,
                image: book.image,
                name: book.name,
                author: book.author,
                category: book.category,
                rating: book.rating,
                quantity: quantity,
                borrowedDate: borrowedDate, // Include borrowed date
                returnDate: returnDate, // Include return date from modal
                userEmail: userEmail // Include user email address
            };

            // Send borrowed book to server
            fetch('https://tourism-rosy.vercel.app/borrowedBooks', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedBook)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        console.log('borrowed successfully');
                        Swal.fire({
                            title: 'Success!',
                            text: 'Borrowed Book added successfully to borrowed pages',
                            icon: 'success',
                            confirmButtonText: 'Next'
                        });

                        // Send updated book information to update the book in the database
                        // fetch(`https://tourism-rosy.vercel.app/books/${book._id}`, {
                        //     method: 'PUT',
                        //     headers: {
                        //         'content-type': 'application/json'
                        //     },
                        //     body: JSON.stringify(updatedBook)
                        // })
                        // .then(res => res.json())
                        // .then(data => {
                        //     if (data.modifiedCount > 0) {
                        //         Swal.fire({
                        //             title: 'Success!',
                        //             text: 'Book updated successfully',
                        //             icon: 'success',
                        //             confirmButtonText: 'Next'
                        //         });
                        //     }
                        // });
                    }
                })
                .catch(error => {
                    console.error('Error borrowing book:', error);
                    // Handle errors here
                });
        }
    };






    return (
        <div className="py-28 px-10 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-1 p-5" style={{ height: '250px' }}>
                    <img className="rounded-xl h-full w-full object-cover" src={image} alt="" />
                </div>
                <div className="md:col-span-2 text-center space-y-2">
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <Rating
                        emptySymbol={<CiStar />}
                        fullSymbol={<FaStar />}
                        initialRating={rating}
                        readonly
                    />
                    <p className="font-medium"><span className="font-clicker">Author:</span> {author}</p>

                    <div className="flex justify-around">
                        <p className="font-medium"><span className="font-clicker">Category:</span> {category}</p>

                        <p className="font-medium"><span className="font-clicker">Quantity:</span> {quantity}</p>
                    </div>

                    <p className="font-medium"><span className="font-clicker">Read Book:</span> {contents}</p>

                    <button id="borrowButton" className="btn bg-[#795458] text-white w-full" onClick={() => document.getElementById('borrowModal').showModal()}>Borrow now</button>

                    <dialog id="borrowModal" className="modal">
                        <div className="modal-box">
                            <form className="flex flex-col gap-4">
                                <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={() => document.getElementById('borrowModal').close()}>✕</button>
                                <h3 className="font-bold text-lg">Borrow Form</h3>
                                <label htmlFor="returnDate">Return Date:</label>
                                <input type="date" id="returnDate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required className="input-field" />
                                <label htmlFor="borrowerName">Your Name:</label>
                                <input type="text" id="borrowerName" value={userName} readOnly className="input-field" />
                                <label htmlFor="borrowerEmail">Your Email:</label>
                                <input type="email" id="borrowerEmail" value={userEmail} readOnly className="input-field" />
                                <button
                                    className="btn bg-[#795458] text-white w-full"
                                    onClick={handleBorrow} // Call handleBorrow on button click
                                >
                                    Submit
                                </button>

                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
