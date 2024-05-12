import { useLoaderData } from "react-router-dom";
import NobelBook from "./NobelBook";

const Nobel = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);

    // Filtering books based on category
    const nobelBooks = allBooks.filter(book => book.category === 'Novel');
    console.log(nobelBooks);

    return (
        <div className="my-32 px-10">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">Novel Books</h2>
            <p className="mb-20 mt-5 text-center font-medium">Collection of our Novel Books are here...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    nobelBooks.map(book => <NobelBook book={book} key={book._id}></NobelBook>)
                }
            </div>
        </div>
    );
};

export default Nobel;
