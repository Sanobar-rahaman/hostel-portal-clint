import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { FaGoogle } from "react-icons/fa";


const LogIn = () => {
    const{logInUser,GoogleSignIn} = useContext(AuthContex)
    const handleLogin = e =>{
        e.preventDefault()
        // const tostId =toast.loading('login in')
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        logInUser(email,password)
        .then(result=>{
            console.log(result);
            swal("Good job!", "SuccessFully logged In!", "success");
            // toast.success('user looged in')
            // toast.success('user  logged in...',{id:tostId})
        })
        .catch(error=>{
            swal("Good job!", "Failed to please check email and password!", "error");
            // toast.error(error.message,{id:tostId})
            console.log(error);
        })
    }
    const handleGoogleSignIn = ()=>{
        GoogleSignIn()
        .then(result=>{
            swal("Good job!", "SuccessFully logged In!", "success");
            console.log(result.user);
        })
        .catch(error=>{
            swal("Sorry!", "Failed to please check email and password!", "error");
            console.log(error);
        })
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <div className="flex justify-center items-center">
                                <button onClick={handleGoogleSignIn} className="flex justify-center items-center text-white bg-slate-700 rounded-lg"><span className=" mr-5"><FaGoogle></FaGoogle></span> google logIn</button>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>did not have account please<Link to='/register'><button className=" text-red-500 ml-4">Register</button></Link></p>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default LogIn;