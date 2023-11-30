import { useContext } from "react";
import { AuthContex } from "../../../Provider/AuthProvider";


const MyProfile = () => {
    const { user } = useContext(AuthContex)
    return (
        <div>
            <div className=" flex justify-center items-center">
                <img className=" rounded-full h-36 w-36" src={user.photoURL} alt="" />
            </div>
            <div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Email</th>
                                <th>Badge</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                               
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>Bronze</td>
                                
                            </tr>
                            {/* row 2 */}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;