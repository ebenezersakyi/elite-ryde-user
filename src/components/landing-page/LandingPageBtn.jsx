import React from "react";
import { useNavigate } from 'react-router-dom'

const LandingPageBtn = ({text, link}) => {
    const nav = useNavigate()
  return (
    <div className="cursor-pointer">
      <p
        className="text-[#fff] px-4 py-2 text-[1.2rem] border-[#fff] rounded-md border-2 "
        onClick={() => {
          nav(link);
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default LandingPageBtn;
