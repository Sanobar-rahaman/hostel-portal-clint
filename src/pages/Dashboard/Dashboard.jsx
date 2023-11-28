import { FaHome, FaSearch,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdNoMeals } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li><NavLink to='/dashboard/myProfile'> <CgProfile></CgProfile>My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/requestMeal'> <MdNoMeals></MdNoMeals>Request Meal</NavLink></li>
                    {/* shared components */}
                    <div className=" divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/allMeals'><FaSearch></FaSearch>Meal</NavLink></li>
                    
                </ul>

            </div>
            <div className=" flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;