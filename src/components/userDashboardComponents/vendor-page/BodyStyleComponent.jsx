import React from "react";
import coupe from "../../../assets/dashboard/vendor/body-styles/coupe.svg";
import van from "../../../assets/dashboard/vendor/body-styles/van.svg";
import truck from "../../../assets/dashboard/vendor/body-styles/truck.svg";
import hatchback from "../../../assets/dashboard/vendor/body-styles/hatchBack.svg";
import { useLocation } from "react-router-dom";
const BodyStyleComponent = () => {
  const { pathname } = useLocation();
  const types = [
    {
      name: "Coupe",
      image: coupe,
    },
    {
      name: "hatchback",
      image: hatchback,
    },
    {
      name: "truck",
      image: truck,
    },
    {
      name: "van",
      image: van,
    },
  ];
  return (
    <div
      className={`${
        pathname == "/dashboard/available" ? "px-[0rem] pt-[2rem] " : " px-[2rem] py-2 "
      } flex flex-col`}
    >
      <h4 className="text-[1.2rem] mb-6">Body type:</h4>

      <div
        className={`${
          pathname == "/dashboard/available" ? "gap-[1rem] " : ' gap-[1.5rem] h-full '
        } grid grid-cols-2 grid-row-2 mx-auto justify-center  w-full`}
      >
        {types.map(({ image, name }, inx) => {
          return (
            <div
              key={inx}
              className={` ${
                pathname == "/dashboard/available" ? "py-[1rem] " : ""
              } flex border-[1px] rounded-xl  items-center justify-center flex-col`}
            >
              <>
                <img
                  src={image}
                  alt=""
                  className={` ${
                    pathname == "/dashboard/available" ? "h-[17px]" : " h-[30px] "
                  } `}
                />
                <p className="capitalize">{name}</p>{" "}
              </>
              {/* {inx} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyStyleComponent;
