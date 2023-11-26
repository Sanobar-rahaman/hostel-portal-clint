import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const MainLayout = () => {
    return (
        <div>
            <h2>Hello From mainw</h2>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;