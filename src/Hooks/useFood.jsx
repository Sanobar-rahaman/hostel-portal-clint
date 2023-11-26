import { useEffect, useState } from "react";


const useFood = () => {
    const[foodItem,setFoodItem]= useState([])
    useEffect(()=>{
        fetch('foodItem.json')
        .then(res=>res.json())
        .then(data=>setFoodItem(data))
    },[])
    return[foodItem]
};

export default useFood;