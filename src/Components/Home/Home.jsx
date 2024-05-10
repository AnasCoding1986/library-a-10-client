import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AllTouristSpot from "../AllTouristSpot/AllTouristSpot";

import ContactUs from "../ContactUs/ContactUs";
import CategoryList from "../CategoryList/CategoryList";
import OurTeam from "../OurTeam/OurTeam";



const Home = () => {

    const spots = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-center mt-20 text-3xl font-bold font-luckiestGuy">Explore Exotic Tourist Havens</h2>
                <p className="max-w-2xl text-center my-6 mx-auto">Embark on a journey to unearth hidden treasures, from serene landscapes to vibrant cultures, creating unforgettable memories awaits!</p>
                <div className="md:grid grid-cols-2 gap-4 p-10 ">
                    {
                        spots.slice(1,7).map(spot => <AllTouristSpot
                            spot={spot}
                            key={spot._id}></AllTouristSpot>)
                    }
                </div>
                <CategoryList></CategoryList>
            </div>
            <OurTeam></OurTeam>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;