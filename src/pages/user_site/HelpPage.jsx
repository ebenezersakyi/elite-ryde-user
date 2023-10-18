import { Icon } from "@iconify/react";
import React from "react";

const HelpPage = () => {
  return (
    <div className="text-[#fff] w-[100%] h-[100%] flex justify-center items-center flex-col 2xl:container 2xl:mx-auto px-[2.5rem]">
      <span className="text-[40px] text-center mt-[20px]">
        How can we help you?
      </span>

      {/* <select
        className=" bg-[transparent] border-bgrey border-[1px] p-2 outline-none rounded-sm "
        // onChange={(e) => setOut(e.currentTarget.value)}
      >
        <option value={0}>Inside Accra</option>
        <option value={1}>Outside Accra</option>
        <option value={2}>Cross Country</option>
      </select> */}
      <div className="flex flex-wrap w-[80%] justify-center items-center mt-[40px]">
        {faq.map((item, index) => {
          return (
            <div className="p-[20px] rounded-lg border-[1px] border-[#FFF] m-[10px] flex flex-col justify-center items-center w-[300px] h-[200px]">
              <Icon
                icon={`material-symbols:${item.icon}`}
                width={40}
                color="#FFF"
              />
              <p className="text-[20px] font-bold mt-[20px]">{item.title}</p>
              <p className="mt-[10px] text-[#7e7e7e]">{item.dec}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const faq = [
  {
    title: "OUR MAIN OFFICE",
    dec: "Accra, Ghana",
    icon: "map-outline",
  },
  { title: "PHONE NUMBER", dec: "+233 45677 6755", icon: "call" },
  // { title: "FAX", dec: "String String String String", icon: "fax" },
  { title: "EMAIL", dec: "help@elite-ryde.com", icon: "mail" },
];

export default HelpPage;
