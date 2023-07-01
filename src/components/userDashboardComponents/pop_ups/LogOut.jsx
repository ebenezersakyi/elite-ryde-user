import React from "react";
import { useNavigate } from "react-router-dom";
import { hide_modal } from "../../../store/modal_slide";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
const LogOut = () => {
  const {logout} = useAuth0()
  const nav = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="text-[#fff] gap-[3rem] backdrop-blur-xl px-8 py-8 rounded-[20px] border-[1px] border-bgrey text-center items-center justify-center flex flex-col">
      <p className="font-[100] text-[1.5rem]">
        Are you sure you want to <br /> log out
      </p>

      <span className="flex gap-4">
        <p 
          onClick={() => {
              dispatch(hide_modal())
              logout({ logoutParams: { returnTo: window.location.origin } })
          }}
        className="font-[200] rounded-xl border-[1px] text-[1.3rem] border-[#fff] px-5 text-center py-1 cursor-pointer hover:border-egreen duration-700">
          YES
        </p>
        <p 
        onClick={() => {
          dispatch(hide_modal())
        }}
        className="font-[200] rounded-xl border-[1px] text-[1.3rem] border-[#fff] px-5 text-center py-1 cursor-pointer hover:border-egreen duration-700">
          NO
        </p>
      </span>
    </div>
  );
};

export default LogOut;
