import React from "react";
import { Icon } from "@iconify/react";

const Tab = ({ icon, text }) => {
  return (
    <span className="flex gap-6 items-center">
      <Icon icon={icon} color="white" width={27}/>
      <p className="font-light text-[1.3rem]">{text}</p>
    </span>
  );
};

export default Tab;
