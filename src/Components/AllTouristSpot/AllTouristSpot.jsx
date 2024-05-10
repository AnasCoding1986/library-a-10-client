import { Link } from "react-router-dom";


const AllTouristSpot = ({ spot }) => {

    const { _id, photo, touristsSpotName, country, location, cost, description, email, name, seasonality, totaVisitorsPerYear, travelTime } = spot;


    return (
        <div>
            <div className="card p-7 bg-base-100 shadow-xl image-full">
                <figure className="w-full h-72"><img className="w-full h-60" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-extrabold font-caveatBrush">{touristsSpotName}</h2>
                    <p className="font-light">{description}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/spot/${_id}`}>
                        <button className="btn bg-[tomato] border-none btn-primary">View details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTouristSpot;