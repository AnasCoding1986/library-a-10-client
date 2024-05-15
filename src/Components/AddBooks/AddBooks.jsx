import Swal from 'sweetalert2'

const AddBooks = () => {

    const handleAdd = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const bookName = form.bookName.value;
        const quantity = parseInt(form.quantity.value); // Parse quantity to integer
        const author = form.author.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = parseInt(form.rating.value);
        const contents = form.contents.value;
        
        // Check if quantity is a valid number
        if (isNaN(quantity) || quantity <= 0) {
            Swal.fire({
                title: 'Error!',
                text: 'Quantity must be a positive number',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return; // Stop execution if quantity is invalid
        }

        // Check if rating is within valid range (1-5)
        if (isNaN(rating) || rating < 1 || rating > 5) {
            Swal.fire({
                title: 'Error!',
                text: 'Rating must be a number between 1 and 5',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return; // Stop execution if rating is invalid
        }

        const book = {image, bookName, quantity, author, category, description, rating, contents};
        console.log(book);

        // Send data to the server
        fetch('https://tourism-rosy.vercel.app/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Book added successfully',
                    icon: 'success',
                    confirmButtonText: 'Next'
                });
            }
        });
    };

    return (
        <div className="py-28 px-10 bg-[#f8f8fa]">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">Add Books</h2>
            <p className="mb-20 mt-5 text-center font-medium">Please add only educational Books</p>
            <div>
                <div>
                    <form onSubmit={handleAdd} className="md:grid grid-cols-2 gap-5 p-10">
                        <div className="my-2">
                            <label className="font-medium">Image</label><br />
                            <input className="border-2 w-full p-2 mt-2" type="text" name="image" placeholder="Image URL" />
                        </div>
                        <div className="my-2">
                            <label className="font-medium">Name</label><br />
                            <input className="border-2 w-full p-2 mt-2" type="text" name="bookName" placeholder="Book name" />
                        </div>
                        <div className="my-2">
                            <label className="font-medium">Quantity of the book</label><br />
                            <input className="border-2 w-full p-2 mt-2" type="number" name="quantity" placeholder="Quantity" />
                        </div>
                        <div className="my-2">
                            <label className="font-medium">Author Name</label><br />
                            <input className="border-2 w-full p-2 mt-2" type="text" name="author" placeholder="Author Name" />
                        </div>
                        <div className="my-2">
                            <label className="font-medium">Category</label><br />
                            <input className="border-2 w-full p-2 mt-2" type="text" name="category" placeholder="for example - Novel, Thriller, History, Drama, Sci-Fi, etc" />
                        </div>
                        <div className="my-2">
                            <label className="font-medium">Short description</label><br />
                            <input className="border-2 w-full p-2 mt-2" type="text" name="description" placeholder="Short description" />
                        </div>
                        <div className="my-2">
                            <label className="font-medium">Rating</label><br />
                            <input className="border-2 w-full p-2 mt-2" type="number" name="rating" placeholder="Rating (1-5)" min="1" max="5" />
                        </div>
                        <div className="my-2">
                            <label className="font-medium">Contents</label><br />
                            <input className="border-2 w-full p-2 mt-2" type="text" name="contents" placeholder="Some contents/texts about the book (could be static)" />
                        </div>
                        <div className="my-2 col-span-2">
                            <input className="border-2 w-full font-bold p-3 bg-[#795458] text-white mt-2" type="submit" name="add" value="Add Book" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;
