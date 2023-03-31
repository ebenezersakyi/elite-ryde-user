import React from "react";
import logo from "../../assets/logo.svg";
import HeaderBtn from "../header-components/HeaderBtn";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const Nav = useNavigate();
  const { pathname } = useLocation();
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/help",
      title: "Help",
    },
  ];
  return (
    <div className="container mx-auto">
      <header className="text-[#fff] flex justify-between p-[2.5rem] items-center">
      <nav className="flex gap-[2rem]">
        {navLinks.map(({ title, path }, indx) => {
          return (
            <p
              className={`text-[1.3rem] uppercaser font-[500] hover:text-egreen cursor-pointer duration-700  ${
                pathname === path && "border-b-2 border-egreen text-egreen"
              }`}
              onClick={() => {
                Nav(path);
              }}
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
        <HeaderBtn text="Become a vendor" link={"/"} />
        <HeaderBtn text="Contact us" link={"/"} />
      </div>
    </header>
    </div>
    
  );
};

export default Header;
