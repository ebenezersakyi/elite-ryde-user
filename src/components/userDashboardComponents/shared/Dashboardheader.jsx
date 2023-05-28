import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import sample from "../../../assets/dashboard/sample_pp.svg";
import arrow from "../../../assets/dashboard/vendor/arrow.svg";
import { show_log_out, show_settings } from "../../../store/modal_slide";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
const Dashboardheader = () => {
  const nav = useNavigate()
  return (
    <div className="2xl:container 2xl:mx-auto">
      <header className="text-[#fff] flex justify-between px-[2.5rem] py-[1.5rem] items-center">
          <img src={logo} alt="logo" className="cursor-pointer" onClick={() => {
            nav('/dashboard')
          }}/>
        <UserTab />
      </header>
    </div>
  );
};

function UserTab() {
  const {user} = useAuth0()
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const list = [
    {
      name: "Settings",
      func: show_settings,
    },
    {
      name: "Help",
      child: "",
    },
    {
      name: "Log out",
      func: show_log_out,
    },
  ];
  return (
    <div className="flex relative rounded-lg border-[1px] border-bgrey gap-4 items-center py-1 pl-2 pr-4 backdrop-blur-lg bg-[#00000070]">
      <img src={user?.picture} alt="user picture"  className="h-[50px] rounded-full"/>
      <span
        className="flex gap-2 cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        <p className="text-[1.2rem] font-thin">
          Hello, <span className="font-bold ">{user?.name.split(' ')[1]}</span>
        </p>
        <img
          src={arrow}
          alt=""
          className={`${show && "rotate-180"} duration-700`}
        />
      </span>

      <div
        className={`${
          show ? "block " : "hidden "
        } z-[1000000] duration-300 absolute top-[100%] mt-2 py-2 rounded-lg border-[1px] border-bgrey w-[95%] right-0 backdrop-blur-[20px] bg-[#000000dd]`}
      >
        <ul className="flex flex-col gap-2 text-[1.1rem] px-3">
          {list.map(({ name, func }, inx) => {
            return (
              <div
                className="hover:bg-[#ffffff13] cursor-pointer hover:text-egreen duration-700 p-2 flex gap-2 rounded"
                key={inx}
                onClick={() => {
                  if (func) {
                    dispatch(func());
                  }
                  setShow(false);
                }}
              >
                <p>•</p>
                <li key={inx} className="">
                  {name}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Dashboardheader;
