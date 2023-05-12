import React from "react";
import { useNavigate } from 'react-router-dom'

const LandingPageBtn = ({text, link, authOfunc}) => {
    const nav = useNavigate()
  return (
    <div className="cursor-pointer">
      <p
        className="text-[#fff] px-6 py-2 text-[1.2rem] font-semibold border-[#fff] rounded-xl border-2 "
        onClick={() => {
          if(link){
            nav(link);
          }
          else{
            authOfunc()
          }
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default LandingPageBtn;
