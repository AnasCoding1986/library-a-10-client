import { useLoaderData } from "react-router-dom";
import ThrillerBook from "./ThrillerBook";

const Thriller = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);

    // Filtering books based on category
    const thrillerBooks = allBooks.filter(book => book.category === 'Thriller');
    return (
        <div className="my-32 px-10">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">Thriller Books</h2>
            <p className="mb-20 mt-5 text-center font-medium">Collection of our Thriller Books are here...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    thrillerBooks.map(book => <ThrillerBook book={book} key={book._id}></ThrillerBook>)
                }
            </div>
        </div>
    );
};

export default Thriller;