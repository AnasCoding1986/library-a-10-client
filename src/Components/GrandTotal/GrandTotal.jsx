
import { useLoaderData } from 'react-router-dom';
import TotalSpots from '../TotalSpots/TotalSpots';

const GrandTotal = () => {

    const spots = useLoaderData();

    return (
        <div>
            <div>
                <h2 className="text-center mt-20 text-3xl font-bold font-luckiestGuy">All the spots here</h2>
                <p className="max-w-2xl text-center my-6 mx-auto">Embark on a journey to unearth hidden treasures, from serene landscapes to vibrant cultures, creating unforgettable memories awaits!</p>
                <div className="md:grid grid-cols-2 gap-4 p-10 ">
                    {
                        spots.map(spot => <TotalSpots
                            spot={spot}
                            key={spot._id}
                        ></TotalSpots>)
                    }
                </div>
            </div>

        </div>
    );
};

export default GrandTotal;