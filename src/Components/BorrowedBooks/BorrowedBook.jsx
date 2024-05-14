import Swal from "sweetalert2";


const BorrowedBook = ({book, onDelete}) => {

    const {_id, image, name, category, borrowedDate, returnDate} = book;
    console.log(book);

    const handleReturn = id => {
        console.log('return clicked');
        fetch(`http://localhost:5000/borrowedBooks/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    onDelete(_id);

                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
                    console.log("daleted successfully");
                }
            })
    }


    return (
        <div className="p-5 rounded-2xl bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-1 p-5" style={{ height: '250px' }}>
                    <img className="rounded-xl h-full w-full object-cover" src={image} alt="" />
                </div>
                <div className="md:col-span-2 text-center space-y-2 p-5">
                    <h3 className="text-2xl font-bold">{name}</h3>

                    <p className="font-medium"><span className="font-clicker">Category:</span> {category}</p>

                    <div className="flex justify-around">
                        <p className="font-medium"><span className="font-clicker block">Borrow date:</span> {borrowedDate}</p>

                        <p className="font-medium"><span className="font-clicker block">Return date:</span> {returnDate}</p>
                    </div>


                    <button onClick={()=>handleReturn(_id)} className="btn bg-[#795458] text-white w-full">Return the book</button>

                </div>
            </div>
        </div>
    );
};

export default BorrowedBook;