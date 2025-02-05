import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";


const Navbar = () => {

    const [theme,setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/">Home</NavLink></li>
        {
            user ?
                <div className="flex">
                    <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" className="mr-3" to="/addBooks">Add Books</NavLink></li>
                    <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/allBooks">All Books</NavLink></li>
                    <li><NavLink data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className="mr-3" to="/borrowedBooks">Borrowed Books</NavLink></li>
                </div> :
                ""
        }
    </>

    return (
        <div className="h-24 lg:h-20">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul data-aos="zoom-in" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <a className="btn btn-ghost text-lg lg:text-2xl font-permanentMarker text-[#453F78]"><img className="w-6 border-2 border-[#32012F] rounded-full" src={logo} alt="" />BookshelfXchange</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    <label className="swap swap-rotate mr-5">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" 
                        onChange={handleToggle}
                        checked={theme === "light" ? false : true}
                         />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

                    {
                        user ?
                            <div className="flex items-center">
                                <div className="w-10 z-10 rounded-full mr-4 tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2000" className="rounded-full" alt="User Pic" src={user.photoURL} />
                                </div>
                                <button data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2000" onClick={logOut} className="btn bg-[#795458] text-white">Logout</button>
                            </div> :
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2000">
                                <Link to="/login"><button onClick={logOut} className="btn bg-[#795458] text-white">Login</button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;