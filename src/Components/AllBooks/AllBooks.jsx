import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';
import TableBook from './TableBook';

const AllBooks = () => {
    const allBooks = useLoaderData();

    // const [allBooks,setAllbooks] = useState([]);

    // const url = `http://localhost:5000/books`;
    // useEffect(() => {
    //     axios.get(url, {withCredentials:true})
    //     .then(res => {
    //         setAllbooks(res.data)
    //     })
    // },[url])



    const [viewMode, setViewMode] = useState('card'); // Default view mode is card

    const handleViewModeChange = (mode) => {
        setViewMode(mode);
    };

    return (
        <div className="my-32 px-10">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">All Books</h2>
            <p className="mb-20 mt-5 text-center font-medium">Collection of our Books are here...</p>

            {/* Dropdown menu for selecting view mode */}
            <div className="flex justify-center mb-5">
                <select value={viewMode} onChange={(e) => handleViewModeChange(e.target.value)} className="p-2 border border-gray-300 rounded-md">
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
            </div>

            <div className={viewMode === 'card' ? "grid grid-cols-1 md:grid-cols-2 gap-10" : ""}>
                {viewMode === 'card' ? (
                    // Render books as cards
                    allBooks.map((book) => <Book book={book} key={book._id} />)
                ) : (
                    // Render books in table format
                    allBooks.map((book) => <TableBook book={book} key={book._id} />)
                )}
            </div>
        </div>
    );
};

export default AllBooks;
