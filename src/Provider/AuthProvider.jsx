import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut   } from "firebase/auth";
import auth from "../config/FireBase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";





 export const AuthContex = createContext(null)
 const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null)
    const[loading,setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const GoogleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)

    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscrive = onAuthStateChanged(auth,currentUser=>{
            // token related work
            // const userEmail =  currentUser?.email || user?.email;
            // const loogedUser = {email: userEmail}
            setUser(currentUser)
            console.log('observe the webside',currentUser);
            if(currentUser){
                const userInfo = {email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('accesss-token',res.data.token);
                        setLoading(false)
                    }
                })
            }
            else{
               
                localStorage.removeItem('accesss-token')
                setLoading(false)
            }

           
           
            
        })
        return ()=>{
            unSubscrive()
        }
    },[axiosPublic])

    const authInfo = {user,createUser,logInUser,GoogleSignIn,logOut,loading}
    return (
        <AuthContex.Provider value={authInfo}>
            {
                children
            }
        </AuthContex.Provider>
    );
};

export default AuthProvider;