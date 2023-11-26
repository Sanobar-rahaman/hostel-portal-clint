import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import MealsCategory from "../pages/Home/MealsCategory/MealsCategory";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
            
        },
        {
            path:'/mealsCategory',
            element:<MealsCategory></MealsCategory>

        }
      ]
    },
  ]);
  export default router