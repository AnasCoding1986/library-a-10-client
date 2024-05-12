import { useLoaderData } from "react-router-dom";


const BookDetails = () => {

    const book = useLoaderData();

    const { _id, image, name, quantity, author, category, description, rating, contents } = book;

    return (
        <div>
            <h2>book details of {name}</h2>
        </div>
    );
};

export default BookDetails;