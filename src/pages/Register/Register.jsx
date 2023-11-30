import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";

import { updateProfile } from "firebase/auth";
import swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Register = () => {
    const{createUser}=useContext(AuthContex)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const handleRegister = e => {
        e.preventDefault()
        // const tostId = toast.loading('log in success...')
        const form = e.target
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value
        const image = form.image.value
        console.log(name,email, password,image);
        createUser(email,password)
        .then(result=>{
            const userInfo ={email:email}
            axiosPublic.post('users',userInfo)
            .then(res=>{
                if(res.data.insertedId){
                    swal("Good job!", "user created successfully", "success");
    
                    console.log(result.user);
                }
            })

            swal("Good job!", "User created SuccessFully!", "success");
            console.log(result.user);
            updateProfile(result.user,{
                displayName:name,
                photoURL:image
            })
            .then(()=>{
                console.log('profile updated');
            })
            .catch((error)=>{
                console.log(error);
            })
            navigate('/login')
            // toast.success('user created..',{id:tostId})
        })
        .catch(error=>{
            swal("Sorry!", "Failed to please check email and password!", "error");
            // toast.error(error.message,{id:tostId})
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Image url" name="image" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>already have a account please<Link to='/login'><button className=" text-green-500 ml-4">login</button></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;