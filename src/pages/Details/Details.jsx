import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const Details = () => {
    const foodDetails = useLoaderData()
    const{user}= useContext(AuthContex)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const { title, image, meal_description, price, rating,meal_distributor,post_time} = foodDetails
    
    const handleAddMeal = () =>{
        if(user && user?.email){
            const mealItem ={
                email:user.email,
                status:'pending',
                image,
                title
            }
            axiosSecure.post('/addMeal',mealItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    swal("Good job!", "Data added to cart!", "success");
                }
            })

        }
        else{
            swal("Sorry!", "Please login", "error");
            navigate('/login')
        }

    }
    
   

    return (
        <div className=" flex justify-center items-center">
            <div className="card  w-96 mx-h-[400px] bg-base-100 shadow-xl mt-6">
                <figure><img className=" max-h-40"  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Meals Distributor{meal_distributor}</p>
                    <p>{meal_description}</p>
                    <p>Price ${price}</p>
                    <p>Post Time: {post_time}</p>
                    <p>{rating}Star</p>
                </div>
                <div className=" flex justify-center items-center mb-6">
                    <button onClick={handleAddMeal} className=" btn btn-primary">Add Meal</button>

                </div>
            </div>
        </div>
    );
};

export default Details;