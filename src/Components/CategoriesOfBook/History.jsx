import { useLoaderData } from "react-router-dom";
import HistoryBook from "./HistoryBook";

const History = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);

    // Filtering books based on category
    const historyBooks = allBooks.filter(book => book.category === 'History');

    return (
        <div className="my-32 px-10">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">History Books</h2>
            <p className="mb-20 mt-5 text-center font-medium">Collection of our History Books are here...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    historyBooks.map(book => <HistoryBook book={book} key={book._id}></HistoryBook>)
                }
            </div>
        </div>
    );
};

export default History;