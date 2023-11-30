
import useAxiosSecure from "./useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Provider/AuthProvider";


const useMeal = () => {
    const axioseccure = useAxiosSecure()
    const{user} = useContext(AuthContex)
    const[meal,setMeal] = useState([])

    useEffect(()=>{
        axioseccure.get(`/meal?email=${user?.email}`)
        .then(res=>{
            setMeal(res.data)
        })
    },[axioseccure,user?.email])

    return[meal]
};

export default useMeal;