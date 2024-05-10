import Swal from 'sweetalert2'



const AddTouristSpot = () => {

    const handleAdd = e => {
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
        const spot = {photo,touristsSpotName,country,location,description,cost,seasonality,travelTime,totaVisitorsPerYear,email,name}
        console.log(spot);

        // send data to the server
        fetch('https://tourism-rosy.vercel.app/spot', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(spot)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot added successfully',
                    icon: 'success',
                    confirmButtonText: 'Next'
                  })
            }
        })
    }

    return (
        <div>
            <h2 className="text-center text-3xl mt-7 mb-4 font-extrabold font-luckiestGuy">You can add your desired spots here</h2>
            <div>
                <form onSubmit={handleAdd} className="md:grid grid-cols-2 gap-5 p-10">
                    <div className="my-2">
                        <label className="font-medium">Photo</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="photo" placeholder="Image URL" />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Tourists spot name</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="touristsSpotName" placeholder="Tourists spot name" />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">country_Name</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="country" placeholder="country_Name" />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Location</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="location" placeholder="location" />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Short description</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="description" placeholder="Short description" />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Average_cost</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="cost" placeholder="Average_cost" />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Seasonality</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="seasonality" placeholder="Seasonality" />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">Travel_time</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="travelTime" placeholder="Travel_time" />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">totaVisitorsPerYear</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="totaVisitorsPerYear" placeholder="Image URL" />
                    </div>
                    <div className="my-2">
                        <label className="font-medium">User Email</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="email" name="email" placeholder="User Email" />
                    </div>
                    <div className="my-2 col-span-2">
                        <label className="font-medium">User Name</label><br />
                        <input className="border-2 w-full p-2 mt-2" type="text" name="name" placeholder="User Name" />
                    </div>
                    <div className="my-2 col-span-2">
                        <input className="border-2 w-full font-bold p-3 bg-[tomato] text-white mt-2" type="submit" name="add" value="Add tourist spot" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;
