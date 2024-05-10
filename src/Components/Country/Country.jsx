import { Link } from "react-router-dom";


const Country = ({ country }) => {
    const { _id, photo, name, description } = country;
    return (
        <div>
            <Link to={`/countries/${_id}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Country;