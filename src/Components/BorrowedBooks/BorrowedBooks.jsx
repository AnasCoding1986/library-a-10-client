import { useLoaderData } from "react-router-dom";
import BorrowedBook from "./BorrowedBook";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const BorrowedBooks = () => {

    const allBorrowedBooks = useLoaderData();

    const { user } = useContext(AuthContext);

    const borrowedBooks = allBorrowedBooks?.filter(borrowedBook => borrowedBook.userEmail === user?.email)

    // const mySpots = spots?.filter(spot => spot.email === user?.email);

    const [deletedBookId, setDeletedBookId] = useState(null);

    const remainingBorrowedBooks = borrowedBooks.filter(book => book._id !== deletedBookId);

    // Callback function to handle deletion
    const handleBookDelete = (id) => {
        // Handle the deleted book _id here, for example, update state
        setDeletedBookId(id);
    };

    return (
        <div className="my-32 px-10">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">Borrowed Books</h2>
            <p className="mb-20 mt-5 text-center font-medium">Your Borrowed Books are here ......</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    remainingBorrowedBooks.map(book => <BorrowedBook onDelete={handleBookDelete}  book={book} key={book._id}></BorrowedBook>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;