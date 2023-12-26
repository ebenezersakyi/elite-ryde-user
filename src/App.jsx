import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { routes } from "./utils/routes";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { baseURLGeneral } from "./utils";

import AccountSuspended from "./pages/user_site/AccountSuspendedPage";
import AccessDeniedPage from "./pages/user_site/AccessDeniedPage";

function App() {
  const { user, logout } = useAuth0();
  const [isSuspended, setIsSuspended] = useState(false);
  const [isAccessDenied, setIsAccessDenied] = useState(false);
  // const nav = useNavigate();

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

  const checkRole = async () => {
    axios
      .get(
        `https://elite-ryde-management-api.azurewebsites.net/api/check-role?userSub=${user.sub}`
      )
      .then((response) => {
        console.log("responseresponseresponse", response?.data?.data[0]);
        if (response?.data?.data[0]?.name !== "user") {
          setIsAccessDenied(true);
        } else {
          setIsAccessDenied(false);
        }
      })
      .catch(function (error) {
        console.error("error", error);
      });
  };

  React.useEffect(() => {
    isAccountSuspended();
    if (user?.sub) {
      checkRole();
    }
    // console.log("user?.sub", user?.sub);
  }, [user]);

  if (isSuspended) {
    return <AccountSuspended />;
  }

  if (isAccessDenied) {
    return <AccessDeniedPage />;
  }

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
