import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const CategoryList = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://tourism-rosy.vercel.app/countries')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])

    return (
        <div className="">
                <h2 className="text-center mt-20 text-3xl font-bold font-luckiestGuy">Explore Countries</h2>
                <p className="max-w-2xl text-center my-6 mx-auto">Embark on a journey to unearth hidden treasures, from serene landscapes to vibrant cultures, creating unforgettable memories awaits!</p>
            <div className="grid grid-cols-2 gap-5">
            {
                countries.map(country => <Country key={country._id} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default CategoryList;