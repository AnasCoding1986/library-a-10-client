import tone from "../../assets/t-1.jpg";
import ttwo from "../../assets/t-2.jpg";
import tthree from "../../assets/t-3.jpg";
import tfour from "../../assets/t-4.jpg";

const OurTeam = () => {
    return (
        <div className="py-28 px-10 bg-[#f8f8fa]">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">Our Team</h2>
            <p className="mb-20 mt-5 text-center font-medium">Our members are always ready to help you</p>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 flex justify-center flex-col">
                    <h2 className="text-2xl font-semibold">Our people make us great</h2>
                    <p className="my-5 font-medium">All the members of our taem are really helpful towards our student. <br />
                        They are always ready to give their best for making your best experience.
                        <div className="mt-5">
                            <button className="btn btn-secondary border-none bg-[#795458]">Contact</button>
                        </div>
                    </p>
                </div>
                <div className="md:col-span-2">
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                        <div className="text-center p-10 bg-[#795458] rounded-xl">
                            <div className="avatar">
                                <div className="w-32 rounded-full">
                                    <img src={tone} />
                                </div>
                            </div>
                            <h2 className="text-xl font-bold">John Doe</h2>
                            <p>Maneger</p>
                        </div>
                        <div className="text-center p-10 bg-[#795458] rounded-xl">
                            <div className="avatar">
                                <div className="w-32 rounded-full">
                                    <img src={ttwo} />
                                </div>
                            </div>
                            <h2 className="text-xl font-bold">Mpopu</h2>
                            <p>Store Keeper</p>
                        </div>
                        <div className="text-center p-10 bg-[#795458] rounded-xl">
                            <div className="avatar">
                                <div className="w-32 rounded-full">
                                    <img src={tthree} />
                                </div>
                            </div>
                            <h2 className="text-xl font-bold">Mujbarani</h2>
                            <p>Store Keeper</p>
                        </div>
                        <div className="text-center p-10 bg-[#795458] rounded-xl">
                            <div className="avatar">
                                <div className="w-32 rounded-full">
                                    <img src={tfour} />
                                </div>
                            </div>
                            <h2 className="text-xl font-bold">John Macgil</h2>
                            <p>Store Keeper</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;