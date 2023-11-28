import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const{user,loading} = useContext(AuthContex)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>

    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;