import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";


import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [showpassword, setShowpassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;

        createUser(email, password)
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully registered",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate("/");
                console.log(res.user);
            })
            .catch(data => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                console.log(data);

            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div data-aos="zoom-in" data-aos-duration="1500" className="hero-content">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Your Name" className="input input-bordered" {...register("name", {
                                    required: {
                                        value: true,
                                        message: "You must fill your name"
                                    }
                                })} />
                                {errors.name && <span className="text-sm text-red-500 font-medium">{errors.name.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered"  {...register("email", {
                                    required: {
                                        value: true,
                                        message: "You must fill your Email address"
                                    }
                                })} />
                                {errors.email && <span className="text-sm text-red-500 font-medium">{errors.email.message}</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                type={
                                    showpassword ? "text" : "password"
                                } 
                                placeholder="password" 
                                className="input input-bordered" {...register("password", {
                                    required: {
                                        value: true,
                                        message: "You must input your password"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).+$/,
                                        message: "Password must contain at least one uppercase letter and one special character"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least six characters"
                                    }
                                })} />
                                <span className="absolute right-2 bottom-12" onClick={() => setShowpassword(!showpassword)}>
                                {
                                    showpassword ? <FaEyeSlash /> : <FaEye />
                                }</span>
                                {errors.password && <span className="text-sm text-red-500 font-medium">{errors.password.message}</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#795458] border-none">Register</button>
                            </div>
                        </form>
                        <p className="text-sm text-center mb-4">Already have an account? Please <Link className="text-[#795458] font-bold" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
