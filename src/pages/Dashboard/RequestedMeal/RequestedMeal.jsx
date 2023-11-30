import { FaTrash } from "react-icons/fa";
import useMeal from "../../../Hooks/useMeal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const RequestedMeal = () => {
    const[meal] = useMeal()
    const axiosSecure = useAxiosSecure()

    const handleDelete = id =>{
        console.log(id);
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
              
                axiosSecure.delete(`meal/${id}`)
                .then(res=>{
                   
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
    
    return (
        <div>
            <h2 className=" text-3xl text-center bg-blue-400 rounded-full">Requested Meal</h2>
            <div>
                
                    <div  className="overflow-x-auto">
                    <table className="table mt-6">
                      {/* head */}
                      <thead>
                        <tr className=" bg-slate-500 text-white">
                            <th>Number</th>
                          <th>
                            image
                          </th>
                          <th>Meal Title</th>
                          <th>Status</th>
                          <th>Order by</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            meal.map((item,idx)=> <tr key={item._id}>
                                <td>{idx+1}</td>
                              <td>
                                <div className="flex items-center gap-3">
                                  <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-bold"></div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                {item.title}
                                <br/>
                              </td>
                              <td>{item.status}</td>
                              <td>{item.email}</td>
                              <td onClick={()=>handleDelete(item._id)} className=" text-3xl"><FaTrash></FaTrash></td>
                            </tr>
                                )
                        }
                       
                        
                      </tbody>
                      {/* foot */}
                      
                    </table>
                  </div>
                
            </div>
        </div>
    );
};

export default RequestedMeal;