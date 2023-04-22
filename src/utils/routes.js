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
                path: "cars",
                element: <CarsPage />
            },
            {
                path: "available",
                element: <AvailablePage />
            },
        ]
    }
])