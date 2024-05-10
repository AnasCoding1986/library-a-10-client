import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const spot = useLoaderData();

    const { _id, photo, touristsSpotName, country, location, cost, description, email, name, seasonality, totaVisitorsPerYear, travelTime } = spot;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const touristsSpotName = form.touristsSpotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const email = form.email.value;
        const name = form.name.value;
        const updatedSpot = {photo,touristsSpotName,country,location,description,cost,seasonality,travelTime,totaVisitorsPerYear,email,name}
        console.log(updatedSpot);

        // send data to the server
        fetch(`https://tourism-rosy.vercel.app/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedSpot)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount>0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Next'
                  })
            }
        })
    }

    return (
        <div>
            <h2 className="text-center text-3xl mt-7 mb-4 font-extrabold">You can Update this spot here</h2>
            <div>
                <form onSubmit={handleUpdate} className="md:grid grid-cols-2 gap-5 p-10">
                    <div className="my-2">
                        <label className="font-medium">Photo</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="photo" placeholder="Image URL" defaultValue={photo} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Tourists spot name</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="touristsSpotName" placeholder="Tourists spot name" defaultValue={touristsSpotName} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">country_Name</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="country" placeholder="country_Name" defaultValue={country} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Location</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="location" placeholder="location" defaultValue={location} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Short description</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="description" placeholder="Short description" defaultValue={description} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Average_cost</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="cost" placeholder="Average_cost" defaultValue={cost} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Seasonality</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="seasonality" placeholder="Seasonality" defaultValue={seasonality} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Travel_time</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="travelTime" placeholder="Travel_time" defaultValue={travelTime} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">totaVisitorsPerYear</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="totaVisitorsPerYear" placeholder="Image URL" defaultValue={totaVisitorsPerYear} />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">User Email</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="email" name="email" placeholder="User Email" defaultValue={email} />
                    </div>
                    <div className="my-2 col-span-2">
                        <label className="font-medium">User Name</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="name" placeholder="User Name" defaultValue={name} />
                    </div>
                    <div className="my-2 col-span-2">
                        <input className="border-2 w-full font-bold p-3 bg-[tomato] text-white mt-2" type="submit" name="add" value="Update the spot" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;