
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import swal from "sweetalert";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    // const [users, setUser] = useState([])
    // useEffect(() => {
    //     axiosSecure.get('/users')
    //         .then(res => {
    //             setUser(res.data)
    //         })
    // }, [axiosSecure])
    const {data: users =[],refetch} = useQuery({
        queryKey: ['users'],
        queryFn:async ()=>{
            const res = await axiosSecure.get('/users')
            return res.data

        }
    })
    const handleDelete = user =>{
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
              
                axiosSecure.delete(`users/${user._id}`)
                .then(res=>{
                    refetch()
                    if(res.data.deletedCount>0){
                          Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                    }
                })
            }
        });
    }
    const handleMakeAdmin = (user) =>{
        console.log(user);
        axiosSecure.patch(`users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch()
                swal("Good job!", "User updated as admin!", "success");

            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs text-3xl"><FaUsers className=" text-blue-400"></FaUsers> </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs text-3xl"><FaTrash className=" text-red-400"></FaTrash> </button>
                                </td>
                            </tr>)
                        }

                        {/* row 2 */}

                        {/* row 3 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;