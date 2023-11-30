import axios from "axios";

const axiosPublic = axios.create({
    
    baseURL:'https://hostel-management-system-server-pi.vercel.app/'
    
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;