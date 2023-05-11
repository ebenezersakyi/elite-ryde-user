import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { routes } from "./utils/routes";
function App() {
  React.useEffect(()=>{
   
  }, [])
  return (
    <>
    <ToastContainer />
    <RouterProvider router={routes}/>
    </>
  );
}

export default App;
