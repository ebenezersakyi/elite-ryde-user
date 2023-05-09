import { RouterProvider } from "react-router-dom";
import React from "react";
import { routes } from "./utils/routes";
function App() {
  React.useEffect(()=>{
   
  }, [])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
