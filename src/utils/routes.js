import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/user_site/Layout";
import LandingPage from "../pages/user_site/LandingPage";
export const routes = createBrowserRouter([
    {
        path:"/",
        element: <Layout /> ,
        children: [
            {
                path: "",
                element: <LandingPage />
            }
        ]
    }
])