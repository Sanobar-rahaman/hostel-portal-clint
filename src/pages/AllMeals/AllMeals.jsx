
import useFood from "../../Hooks/useFood";
import AllMealsCard from "./AllMealsCard";


const AllMeals = () => {
    const[foodItem] = useFood()
    

    return (
       <div className=" mt-6" >
        <div className=" flex justify-between">
            <div>
                <select className=" text-3xl" name="" id="">
                    <option value="">Brakfast</option>
                    <option value="">Lunch</option>
                    <option value="">Dinner</option>
                </select>
            </div>
            <div>
                <input className="p-3 bg-slate-300" type="text" />
                <button className=" btn btn-outline ml-2">Search</button>
            </div>
        </div>
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                foodItem.map(items=><AllMealsCard key={items._id} items={items} ></AllMealsCard>)
            }
        </div>
       </div>
    );
};

export default AllMeals;