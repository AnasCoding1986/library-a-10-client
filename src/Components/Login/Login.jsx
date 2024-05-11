

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {

    const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(res => {
                console.log(res);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                alert("Email or password not matched")
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch()
    }

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(res => {
            console.log(res.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch()
    }

    //   console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div data-aos="zoom-in" data-aos-duration="1500" className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-sm text-red-500 font-medium">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                {errors.email && <span className="text-sm text-red-500 font-medium">This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#795458] border-none">Login</button>
                            </div>
                        </form>

                        <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-3 w-3/4 mx-auto mb-5 p-3 rounded-md bg-[#0266C8] text-sm text-[white]"><FaGoogle /> Sign Up With Google</button>

                        <button onClick={handleGithubSignIn} className="flex items-center justify-center gap-3 w-3/4 mx-auto mb-5 p-3 rounded-md bg-[#24292e] text-sm text-[white]"><FaGithub /> Sign Up With Github</button>

                        <p className="text-sm text-center mb-4">New here? Let&apos;s get started! <br /> <Link className="text-[#795458] font-bold" to="/register">Create an account</Link> now.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;