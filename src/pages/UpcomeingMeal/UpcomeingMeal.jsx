import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UpcomeinMealCard from "./UpcomeinMealCard";


const UpcomeingMeal = () => {
    const[meal,setMeal] = useState([])
    const axiosPublic =useAxiosPublic()
    useEffect(()=>{
        axiosPublic.get('/comeingMeal')
        .then(res=>{
            setMeal(res.data)
        })
    },[axiosPublic])
   
    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {
                    meal.map(items=><UpcomeinMealCard key={items._id} items={items}></UpcomeinMealCard>)
                }

            </div>
            
        </div>
    );
};

export default UpcomeingMeal;