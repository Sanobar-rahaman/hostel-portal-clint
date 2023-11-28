import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useMember = () => {
    const axiosSecure = useAxiosSecure()
    const[memberShip,setMemberShip] = useState([])
    useEffect(()=>{
        axiosSecure.get('/memberShip')
        .then(res=>{
            setMemberShip(res.data)
        })
    },[axiosSecure])
    return[memberShip]
};

export default useMember;