import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import MealsCategory from "../pages/Home/MealsCategory/MealsCategory";
import AllMeals from "../pages/AllMeals/AllMeals";
import Details from "../pages/Details/Details";
import Payment from "../pages/Home/Payment/Payment";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyProfile from "../pages/Dashboard/myProfile/MyProfile";
import RequestedMeal from "../pages/Dashboard/RequestedMeal/RequestedMeal";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import AddMeal from "../pages/Dashboard/AddMeal/AddMeal";
import UpcomeingMeal from "../pages/UpcomeingMeal/UpcomeingMeal";


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

        },
        {
            path:'/allMeals',
            element:<AllMeals></AllMeals>

        },
        {
            path:'/upcomeingMeal',
            element:<UpcomeingMeal></UpcomeingMeal>
        },
        {
            path:'details/:id',
            element:<Details></Details>,
            loader:({params})=>fetch(`https://hostel-management-system-server-pi.vercel.app/detailsFood/${params.id}`)
        },
        {
            path:'/payment/:title',
            element:<PrivateRoutes><Payment></Payment></PrivateRoutes>
        }

      ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'myProfile',
                element:<MyProfile></MyProfile>
            },
            {
                path:'requestMeal',
                element:<RequestedMeal></RequestedMeal>
            },
            {
                path:'manageUser',
                element:<ManageUser></ManageUser>
            },
            {
                path:'addMeal',
                element:<AddMeal></AddMeal>

            }

        ]

    }
  ]);
  export default router