import { Link } from "react-router-dom";


const TotalSpots = ({ spot }) => {

    const { _id, photo, touristsSpotName, country, location, cost, description, email, name, seasonality, totaVisitorsPerYear, travelTime } = spot;

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col gap-5 rounded-xl p-7 lg:flex-row">
                    <div className="flex-1">
                    <img src={photo} className="w-full h-[250px] rounded-lg shadow-2xl" />
                    </div>
                    <div className="flex-1">
                        <p className="text-lg font-semibold">Spot name : <span className="text-sm font-light">{touristsSpotName}</span></p>
                        <p className="text-lg font-semibold">Approximate costing : <span className="text-sm font-light">{cost}</span></p>
                        <p className="text-lg font-semibold">yearly visitors : <span className="text-sm font-light">{totaVisitorsPerYear}</span></p>
                        <p className="text-lg font-semibold">Trovel time : <span className="text-sm font-light">{travelTime}</span></p>
                        <p className="text-lg font-semibold">Preferred season : <span className="text-sm font-light">{seasonality}</span></p>
                        <Link to={`/spot/${_id}`}>
                        <button className="btn mt-2 bg-[tomato] border-none btn-primary">View details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TotalSpots;