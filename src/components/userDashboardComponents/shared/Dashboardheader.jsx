import React from "react";
import logo from "../../../assets/logo.svg";
import HeaderBtn from "../../header-components/HeaderBtn";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Dashboardheader = () => {
  const { logout } = useAuth0();
  const Nav = useNavigate();
  const { pathname } = useLocation();
  const navLinks = [
    {
      path: "/dashboard",
      title: "Home",
    },
    {
      path: "/dashboard/vendors",
      title: "Vendors",
    },
    {
      path: "/dashboard/cars",
      title: "Cars",
    },
  ];
  return (
    <div className="2xl:container 2xl:mx-auto">
      <header className="text-[#fff] flex justify-between px-[2.5rem] py-[2.5rem] items-center">
        <nav className="flex gap-[2rem]">
          {navLinks.map(({ title, path }, indx) => {
            return (
              <p
                onClick={() => {
                  Nav(path);
                }}
                className={`text-[1.3rem] font-[500] hover:text-egreen cursor-pointer  ${
                  pathname === path && "border-b-2 border-egreen text-egreen "
                }`}
                key={indx}
              >
                {title}
              </p>
            );
          })}
        </nav>
        {/* logo */}
        <div>
          <img src={logo} alt="logo" />
        </div>

        {/* btns */}
        <div className="flex gap-4">
          <HeaderBtn text="Contact Us" link={"/"} />
          <HeaderBtn text="log out" authOFunc={logout} />
        </div>
      </header>
    </div>
  );
};

export default Dashboardheader;
