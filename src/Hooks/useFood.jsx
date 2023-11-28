import {  useEffect, useState } from "react";

import useAxiosPublic from "./useAxiosPublic";


const useFood = () => {
    const[foodItem,setFoodItem]= useState([])
    // const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    

    useEffect(()=>{
        axiosPublic.get('/foodItems')
    .then(res=>{
        setFoodItem(res.data)
    })
    },[axiosPublic])
    return[foodItem]
};

export default useFood;