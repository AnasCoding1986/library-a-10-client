import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { MdBrowserUpdated, MdDelete } from "react-icons/md";


const MyList = () => {

    const spots = useLoaderData();
    console.log(spots);

    const { user } = useContext(AuthContext);
    console.log(user);

    const mySpots = spots?.filter(spot => spot.email === user?.email);
    console.log(mySpots);

    const [myPlace, setMyPlace] = useState(mySpots);



    const handleDelete = id => {
        fetch(`https://tourism-rosy.vercel.app/spot/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
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
                    const remainingSpot = mySpots.filter(spot => spot._id !== id);
                    setMyPlace(remainingSpot);
                }
            })
    }

    return (
        <div className="mb-20">
            <h2 className="text-center mt-20 text-3xl font-bold font-luckiestGuy">My added spots here</h2>
            <p className="max-w-2xl text-center my-6 mx-auto">Embark on a journey to unearth hidden treasures, from serene landscapes to vibrant cultures, creating unforgettable memories awaits!</p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Spot Name</th>
                            <th>Country</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPlace?.length > 0 ? (
                                myPlace?.map(spot => <tr key={spot._id}>
                                    <td></td>
                                    <td>{spot.touristsSpotName}</td>
                                    <td>{spot.country}</td>
                                    <td>
                                        <Link to={`update/${spot._id}`}>
                                            <button data-for='happyFace'><MdBrowserUpdated /></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(spot._id)}><MdDelete /></button>
                                    </td>


                                </tr>)
                            ) : (
                                <p className="text-center text-xl my-6">No spots found for this user.</p>
                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyList;