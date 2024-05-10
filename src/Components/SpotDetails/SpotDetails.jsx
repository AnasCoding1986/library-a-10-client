import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdSupervisedUserCircle, MdOutlineAccountBalance } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";


const SpotDetails = () => {

    const SpotDetails = useLoaderData();

    const { _id, photo, touristsSpotName, country, location, cost, description, email, name, seasonality, totaVisitorsPerYear, travelTime } = SpotDetails;


    return (
        <div>
            <div className="relative bg-cover bg-center h-[1000px] lg:h-[500px]" style={{ backgroundImage: `url(${photo})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div data-aos="zoom-in-right" data-aos-duration="1500" className="text-center p-10 flex flex-col items-center justify-center border-[white] "> {/* First grid item */}
                                <h1 className="text-xl my-5 font-semibold">${cost}</h1>
                                <h1 className="text-5xl font-black font-clicker mb-4">{touristsSpotName}</h1>
                                <p className="text-base font-light">{location}</p>
                                <p className="p-5 border-2 border-[white] m-5 rounded-lg font-extralight font-mono">{description}</p>
                            </div>
                            <div data-aos="zoom-in-left" data-aos-duration="1500" className="p-10"> {/* Second grid item, hidden on smaller devices */}
                                <div className="grid grid-cols-2 gap-5 p-5">
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <GiDuration />
                                        <p>{travelTime}</p>
                                    </div>
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <GrOptimize />
                                        <p>{seasonality}</p>
                                    </div>
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <MdSupervisedUserCircle />
                                        <p>{totaVisitorsPerYear}</p>
                                    </div>
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <MdOutlineAccountBalance />
                                        <p>{country}</p>
                                    </div>
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <FaUser />
                                        <p>{name}</p>
                                    </div>
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <MdEmail />
                                        <p>{email}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SpotDetails;