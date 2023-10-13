// import Header from "../../components/shared_components/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/shared_components/Loader";
import CModal from "../../components/userDashboardComponents/shared/CModal";
import { bg } from "../../utils/bg";
import Dashboardheader from "../../components/userDashboardComponents/shared/Dashboardheader";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const UserDashBoardLayout = () => {
  const nav = useNavigate();
  const [current, setCurrent] = useState(0);
  const { isAuthenticated, isLoading, error, user } = useAuth0();
  // const { user } = useAuth0();
  const auth0 = useAuth0();

  const { pathname } = useLocation();

  useEffect(() => {
    if (isLoading === false) {
      if (isAuthenticated === false) {
        nav("/");
      }
      if (error) {
        nav("/");
      }
    }
    // console.log("user", user);
    meta();
  }, [isLoading, user]);

  const meta = async () => {
    // if (user) {
    //   const metadata= user.m
    // }
    if (user) {
      const meta = user;
      console.log("meta", meta);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (current < bg.length - 1) {
        setCurrent((_) => {
          return _ + 1;
        });
      } else {
        setCurrent(0);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`relative  min-h-[100vh] overflow-y-hidden bg-no-repeat bg-fixed bg-cover bg-center block duration-700 `}
        >
          <img
            src={bg[current]}
            alt=""
            className="fixed aspect-auto object-cover w-screen h-screen top-0 bottom-0 left-0 right-0 z-[-10]"
          />
          {pathname !== "/dashboard/available" && <Dashboardheader />}
          <Outlet />
        </div>
      )}
      <CModal />
    </>
  );
};

export default UserDashBoardLayout;
