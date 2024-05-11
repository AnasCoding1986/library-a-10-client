import { useLoaderData } from "react-router-dom";
import Book from "./Book";


const AllBooks = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    return (
        <div className="my-32 px-10">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">All Books</h2>
            <p className="mb-20 mt-5 text-center font-medium">Colection of our Books are here ......</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    allBooks.map(book => <Book book={book} key={book._id}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;