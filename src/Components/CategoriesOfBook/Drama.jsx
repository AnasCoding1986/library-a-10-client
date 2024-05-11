import { useLoaderData } from "react-router-dom";
import DramaBook from "./DramaBook";

const Drama = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);

    // Filtering books based on category
    const dramaBooks = allBooks.filter(book => book.category === 'Drama');

    return (
        <div className="my-32 px-10">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">Drama Books</h2>
            <p className="mb-20 mt-5 text-center font-medium">Collection of our Drama Books are here...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    dramaBooks.map(book => <DramaBook book={book} key={book._id}></DramaBook>)
                }
            </div>
        </div>
    );
};

export default Drama;