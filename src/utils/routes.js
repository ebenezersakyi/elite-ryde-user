import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/user_site/Layout";
import LandingPage from "../pages/user_site/LandingPage";
import AboutPage from "../pages/user_site/AboutPage";
import HelpPage from "../pages/user_site/HelpPage";
import UserDashBoardLayout from "../layouts/user_dashboard/UserDashBoardLayout";
import UserHome from "../pages/userDashboard/UserHome";
import VendorsPage from '../pages/userDashboard/VendorsPage'
import CarsPage from '../pages/userDashboard/CarsPage'
import AvailablePage from "../pages/userDashboard/AvailablePage";
import SignUpPage from "../pages/user_site/SignUp";
import SuccessPage from "../pages/user_site/SucessPage";
import History from "../pages/userDashboard/History";
export const routes = createBrowserRouter([
    {
        path:"/",
        element: <Layout /> ,
        children: [
            {
                path: "",
                element: <LandingPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/help",
                element: <HelpPage/>
            },
            {
                path: '/sign-up',
                element: <SignUpPage />
            }, 
            {
                path: '/sucess', 
                element: <SuccessPage />
            }
        ]
    },
    {
        path: '/dashboard/',
        element: <UserDashBoardLayout />,
        children: [
            {
                path: "",
                element: <UserHome />
            },
            {
                path: "vendors",
                element: <VendorsPage />
            },
            {
                // will have an id as query param
                path: "car",
                element: <CarsPage />
            },
            {
                path: "available",
                element: <AvailablePage />
            },
            {
                path:"history",
                element:<History/>
            }
        ]
    }
])