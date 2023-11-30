import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {
    const{user,logOut} = useContext(AuthContex)
    const handlogOut =()=>{
        logOut()
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const Links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    {/* <li><NavLink to='/login'>login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li> */}
    <li><NavLink to='/allMeals'>Meals</NavLink></li>
    <li><NavLink to='/upcomeingMeal'>Upcoming Meals</NavLink></li>
    <li><NavLink to='/register'>JoinUs</NavLink></li>
    <li><NavLink className='' to='/dashboard'>
            <button  className=" flex gap-4">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary"></div>
            </button>
        </NavLink></li>

   
    
    </>
    return (
        <div>
            <div className="navbar bg-slate-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                Links
                            }
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className=" rounded-full h-[60px]" src="https://i.ibb.co/NsvJWnC/8e1835e8abbc2b819663d61a034467e4.jpg" alt=""  />
                    <a className="btn btn-ghost normal-case text-xl"> Hostel Portal</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <div className=" flex gap-4 justify-center items-center mr-4">
                            <img className="rounded-full h-[50px]" src={user.photoURL} alt=""  />
                            <p>Logged in as <span className=" font-bold">{user.displayName}</span></p>
                        </div>
                    }
                    {
                        user ? <button className="btn btn-secondary" onClick={handlogOut}>Logout</button> :
                        <Link to='/login'> <button className="btn btn-primary" >login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;