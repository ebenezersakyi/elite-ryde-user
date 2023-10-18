import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import HeaderBtn from "../header-components/HeaderBtn";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
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

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="hidden md:block">
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
            <HeaderBtn
              text="Rent your car"
              href={"https://ellite-ryde-vendor-site.vercel.app/"}
            />
            <HeaderBtn text="Contact us" link={"/contact"} />
          </div>
        </header>
      </div>

      <div className="flex justify-center p-[10px] md:hidden">
        <div
          onClick={toggleMenu}
          className="absolute left-[10px] flex  justify-center items-center  border-[1px] border-[#FFF] p-[6px] m-[10px] rounded-lg"
        >
          <Icon icon="material-symbols:menu" width={20} color="#FFF" />
          {/* <h1 className="text-egreen">Helloooo</h1> */}
        </div>
        <div
          className="self-center flex m-[10px] cursor-pointer"
          onClick={() => Nav("/")}
        >
          <img src={logo} alt="logo" className="h-[30px]" />
        </div>
      </div>

      <div
        className={`lg:hidden flex flex-col col-span-2 p-8 grid grid-rows-6 h-[100vh] fixed top-0 bottom-0 z-10 bg-white items-center justify-center transition-transform transform ${
          menuVisible ? "translate-x-0" : "-translate-x-full"
        } bg-[#FFF]`}
      >
        <div
          onClick={toggleMenu}
          className="block absolute top-[10px] border-[1px] left-[10px] p-[6px] rounded-lg "
        >
          <Icon icon="material-symbols:close" width={20} />
        </div>

        <div className="  row-span-6 self-center flex flex-col gap-6 pb-8 ">
          {navLinks.map(({ title, path }, indx) => {
            return (
              <p
                onClick={() => {
                  Nav(path);
                  setMenuVisible(false);
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
        </div>
        <div className="flex flex-col gap-4">
          <HeaderBtn
            text="Rent your Car"
            link={"https://ellite-ryde-vendor-site.vercel.app/"}
          />
          <HeaderBtn text="Contact us" link={"/contact"} />
        </div>
      </div>
    </>
  );
};

export default Header;
