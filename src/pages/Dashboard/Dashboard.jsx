import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdNoMeals } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen  bg-blue-300">
                <ul className="menu">
                    {
                        isAdmin ? <>
                             <li><NavLink to='/dashboard/myProfile'> <CgProfile></CgProfile>Admin Profile</NavLink></li>
                            <li><NavLink to='/dashboard/manageUser'> <CgProfile></CgProfile>Manage User</NavLink></li>
                            <li><NavLink to='/dashboard/addmeal'> <CgProfile></CgProfile>Add meal</NavLink></li>
                           

                        </> :
                            <>
                                <li><NavLink to='/dashboard/myProfile'> <CgProfile></CgProfile>My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/requestMeal'> <MdNoMeals></MdNoMeals>Request Meal</NavLink></li>
                            </>
                    }

                    {/* shared components */}
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/allMeals'><GiHotMeal></GiHotMeal>Meal</NavLink></li>

                </ul>

            </div>
            <div className=" flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;