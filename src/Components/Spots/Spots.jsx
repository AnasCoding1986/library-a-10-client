import { useLoaderData } from "react-router-dom";
import Spot from "../Spot/Spot";


const Spots = () => {

    const allSpots = useLoaderData();
    console.log(allSpots);

    return (
        <div>
            <h2>{allSpots.spots.length}</h2>
            {
               allSpots.spots.map(spot => <Spot spot={spot} key={spot.tourist_spot_name}></Spot>) 
            }
            
        </div>
    );
};

export default Spots;