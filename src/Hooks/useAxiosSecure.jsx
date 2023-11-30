import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://hostel-management-system-server-pi.vercel.app/'
})
const useAxiosSecure = () => {
    return axiosSecure;
    
};

export default useAxiosSecure;