import React, { useEffect, useState } from "react";
import coupe from "../../../assets/dashboard/vendor/body-styles/coupe.svg";
import van from "../../../assets/dashboard/vendor/body-styles/van.svg";
import truck from "../../../assets/dashboard/vendor/body-styles/truck.svg";
import hatchback from "../../../assets/dashboard/vendor/body-styles/hatchBack.svg";
import { set_body_style } from "../../../store/dashboard_state_slice";
import { useDispatch, useSelector} from "react-redux";
import { useLocation, useSearchParams} from "react-router-dom";
const BodyStyleComponent = () => {
  const { body_style } = useSelector((data) => data.details)
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [param, _] = useSearchParams()

  useEffect(() => {
      if(param.get("body_style")){
        dispatch(set_body_style(param.get("body_style")))
      }

  }, [])
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
        pathname == "/dashboard/available"
          ? "px-[0rem] pt-[2rem] "
          : " px-[1.5rem] py-2 "
      } flex flex-col`}
    >
      <h4 className="text-[1.2rem] mb-6">Body type:</h4>

      <div
        className={`${
          pathname == "/dashboard/available"
            ? "gap-[1rem] "
            : " gap-[1.5rem] h-full "
        } grid grid-cols-2 grid-row-2 mx-auto justify-center  w-full`}
      >
        {types.map(({ image, name }, inx) => {
          return (
            <div
              key={inx}
              className={` ${
                pathname == "/dashboard/available" ? "py-[1rem] " : ""
              } flex border-[1px]  rounded-xl ${
                (body_style == inx)  ? "border-egreen " : ' border-bgrey '
              } items-center justify-center flex-col cursor-pointer`}
              onClick={() => {
                dispatch(set_body_style(inx));
              }}
            >
              <>
                <img
                  src={image}
                  alt=""
                  className={` ${
                    pathname == "/dashboard/available"
                      ? "h-[17px]"
                      : " h-[30px] "
                  } `}
                />
                <p className="capitalize">{name}</p>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BodyStyleComponent;
