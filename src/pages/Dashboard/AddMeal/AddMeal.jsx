import { useContext } from "react";
import { AuthContex } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import swal from "sweetalert";


const AddMeal = () => {
    const{user} = useContext(AuthContex)
    const axiosSecure = useAxiosSecure()
    const handleUpcomeingFood = e =>{
        e.preventDefault()
        const form  = e.target
        const meal_title = form.meal_title.value
        const category = form.category.value
        const meal_image = form.meal_image.value
        const ingredients = form.ingredients.value
        const description = form.description.value
        const price = form.price.value
        const rating = form.rating.value
        const post_time = form.post_time.value
        const distributor_name = form.distributor_name.value
        const distributor_email = form.distributor_email.value
        const comeingMeal ={meal_title,category,meal_image,ingredients,description,price,rating,post_time,distributor_name,distributor_email}
        
        axiosSecure.post('/comeingMeal',comeingMeal)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                swal("Data SuccessFully Send to dataBase");
            }
        })
        
    }
    return (
        <div>
            <h2 className=" text text-4xl text-center bg-blue-300">Add New Meal</h2>
            <form onSubmit={handleUpcomeingFood}>
                {/* frist row */}
            <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="input-group">
                            <span>Meal Title</span>
                            <input type="text" name="meal_title" placeholder="Meal Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        
                        <label className="input-group">
                            <span>category</span>
                            <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* second row */}
                <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="input-group">
                            <span>Meal image</span>
                            <input type="text" name="meal_image" placeholder="Image Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="input-group">
                            <span>Ingredients</span>
                            <input type="text" name="ingredients" placeholder="Ingredients" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 3rd row */}
                <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="input-group">
                            <span>Description</span>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 4th row */}
                <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="input-group">
                            <span>Rating</span>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        
                        <label className="input-group">
                            <span>post time</span>
                            <input type="date" name="post_time" placeholder="post time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 5th row */}
                <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="input-group">
                            <span>Distributor Name</span>
                            <input type="text" name="distributor_name" defaultValue={user.displayName} placeholder="distributor Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        
                        <label className="input-group">
                            <span>distributor Email</span>
                            <input type="text" name="distributor_email" defaultValue={user.email} placeholder="Distributor Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <input className=" btn btn-primary w-full mt-8" type="submit" value="Add Up comeing meal" />

            </form>
        </div>
    );
};

export default AddMeal;