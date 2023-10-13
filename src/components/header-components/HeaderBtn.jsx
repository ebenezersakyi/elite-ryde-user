import React from "react";
import { useNavigate } from "react-router-dom";
const HeaderBtn = ({ text, link, authOFunc, href }) => {
  const nav = useNavigate();
  return (
    <div className="cursor-pointer mr-[10px]">
      <p
        className="text-white px-2 py-[5px] text-[15px] border-white rounded-md border-[1px] uppercase hover:text-egreen  duration-700 "
        onClick={() => {
          link && nav(link);
          href && window.location.replace(href);
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default HeaderBtn;
