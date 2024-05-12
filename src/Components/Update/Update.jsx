import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const book = useLoaderData();

    const { _id, image, name, quantity, author, category, description, rating, contents } = book;

    console.log(book);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const updatedBook = { photo, name, author, category, rating };
        console.log(updatedBook);

        // send data to the server
        fetch(`http://localhost:5000/books/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Next'
                    })
                }
            })
    }

    return (
        <div className="py-28 px-10 bg-[#f8f8fa]">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">Update</h2>
            <p className="mb-20 mt-5 text-center font-medium">You may bring necessary updates here</p>
            <div>
                <form onSubmit={handleUpdate} className="md:grid grid-cols-2 gap-5 p-10">
                    <div className="my-2 col-span-2">
                        <label className="font-medium">Photo</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="photo" placeholder="Image URL" defaultValue={image} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Book Name</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="name" placeholder="Book Name" defaultValue={name} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Author Name</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="author" placeholder="Author Name" defaultValue={author} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Category</label><br />
                        <select className="border-2 w-full p-2 mt-2" name="category" defaultValue={category}>
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                            <option value="Scientific">Scientific</option>
                        </select>
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Rating</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="rating" placeholder="Rating" defaultValue={rating} />
                    </div>
                    <div className="my-2 col-span-2">
                        <input className="border-2 w-full font-bold p-3 bg-[#795458] text-white mt-2" type="submit" name="add" value="Update the Book" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
