import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { routes } from "./utils/routes";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { baseURLGeneral } from "./utils";

import AccountSuspended from "./pages/user_site/AccountSuspendedPage";

function App() {
  const { user } = useAuth0();
  const [isSuspended, setIsSuspended] = useState(false);

  const isAccountSuspended = async () => {
    try {
      const response = await axios.post(`${baseURLGeneral}/account-suspended`, {
        id: user?.sub?.slice(6),
        accountType: "user",
      });
      console.log("response", response);
      if (response?.data?.data.suspended) {
        setIsSuspended(response?.data?.data.suspended);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    isAccountSuspended();
    // console.log("user?.sub", user?.sub);
  }, [user]);

  if (isSuspended) {
    return <AccountSuspended />;
  }

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
