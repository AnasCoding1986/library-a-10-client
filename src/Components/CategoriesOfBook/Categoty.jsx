import { Link } from "react-router-dom";
import nobel from "../../assets/cNobel2.png.jpg";
import thriller from "../../assets/cThriller.png.jpg";
import drama from "../../assets/cDrama.png.jpg";
import history from "../../assets/cHistory.png.jpg";


const Categoty = () => {
    return (
        <div className="my-32 px-10">
            <h2 className="text-4xl border-b-2 mx-auto border-[#453F78] w-80 text-center font-permanentMarker">Categories</h2>
            <p className="mb-20 mt-5 text-center font-medium">Explore your desired category</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Link to="/nobel">
                    <div className="card bg-base-100 shadow-xl border-[#795458] border-2 border-dotted">
                        <figure className="px-10 pt-10">
                            <img src={nobel} alt="Shoes" className="rounded-xl w-full h-56" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Nobel</h2>
                            <div className="card-actions">
                                <button className="btn bg-[#453F78] border-none btn-primary">Available Books</button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/thriller">
                    <div className="card bg-base-100 shadow-xl  border-[#795458] border-2 border-dotted">
                        <figure className="px-10 pt-10">
                            <img src={thriller} alt="Shoes" className="rounded-xl w-full h-56" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Thriller</h2>
                            <div className="card-actions">
                                <button className="btn bg-[#453F78] border-none btn-primary">Available Books</button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/drama">
                    <div className="card bg-base-100 shadow-xl  border-[#795458] border-2 border-dotted">
                        <figure className="px-10 pt-10">
                            <img src={drama} alt="Shoes" className="rounded-xl w-full h-56" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Drama</h2>
                            <div className="card-actions">
                                <button className="btn bg-[#453F78] border-none btn-primary">Available Books</button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/history">
                    <div className="card bg-base-100 shadow-xl  border-[#795458] border-2 border-dotted">
                        <figure className="px-10 pt-10">
                            <img src={history} alt="Shoes" className="rounded-xl w-full h-56" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">History</h2>
                            <div className="card-actions">
                                <button className="btn bg-[#453F78] border-none btn-primary">Available Books</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Categoty;