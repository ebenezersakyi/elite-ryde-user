import React, { useEffect } from "react";
import Slider from "@mui/material/Slider";
import Dropdown from "../shared/Dropdown";
import {
  set_starting_price,
  set_end_price,
  set_car_model,
  set_engine_type,
  set_transmisson,
} from "../../../store/dashboard_state_slice";
import { useDispatch } from "react-redux";
import {
  transmission,
  car_model,
  engine_type,
} from "../../../utils/dropdowncontents";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import dash from "../../../assets/dashboard/vendor/body-styles/dash.svg";

const PriceSlide = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  function valuetext(value) {
    return `${value}°C`;
  }
  const minDistance = 10;

  const { pathname } = useLocation();
  const [value1, setValue1] = React.useState([200, 5000]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
    dispatch(set_starting_price(value1[0]));
    dispatch(set_end_price(value1[1]));
  };

  useEffect(() => {
    if (params.get("start_price")) {
      setValue1((prev) => {
        return [params.get("start_price"), prev[1]];
      });
      dispatch(set_starting_price(params.get("start_price")))
    }
    if (params.get("end_price")) {
      setValue1((prev) => {
        return [prev[0], params.get("end_price")];
      });
      dispatch(set_end_price(params.get("end_price")))
    }
  }, [pathname]);
  return (
    <div
      className={`  ${
        pathname == "/dashboard/available"
          ? " pr-[0px] py-1 "
          : " pr-[1.5rem] py-2 "
      } border-[#fff] `}
    >
      <div>
        <h4 className="text-[1.2rem] mb-4">Price:</h4>
        <div className="flex flex-row items-center gap-4  mb-3">
          <span className="border-[1px] border-bgrey rounded-md py-2 px-4 flex flex-row justify-between">
            <input
              type="number"
              className={`${
                pathname == "/dashboard/available" && "w-[40%]"
              } bg-[transparent] focus:outline-none inline-block w-[40%]`}
              value={value1[0]}
              disabled={true}
              onChange={(e) => {
                setValue1((prev) => {
                  return [e.target.value, prev[1]];
                });
              }}
            />
            <p className="text-bgrey">GHS</p>
          </span>
          <img src={dash} alt="" />
          <span className="border-[1px] rounded-md border-bgrey py-2 px-4 flex flex-row justify-between">
            <input
              type="text"
              disabled={true}
              className={`${
                pathname == "/dashboard/available" && "w-[40%]"
              } bg-[transparent] focus:outline-none inline-block w-[40%]`}
              value={value1[1]}
              onChange={(e) => {
                setValue1((prev) => {
                  return [prev[0], e.target.value];
                });
              }}
            />
            <p className="text-bgrey">GHS</p>
          </span>
        </div>
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        min={200}
        max={5000}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        // disableSwap
        style={{
          color: "#00E124",
          width: "100%",
        }}
      />
      <div
        className={` flex justify-between gap-2 mt-8 items-center ${
          pathname == "/dashboard/available" && "grid grid-cols-2 gap-3"
        }`}
      >
        <Dropdown
          category={"Car model"}
          options={car_model}
          setState={set_car_model}
          param={"car_model"}
        />
        <Dropdown
          category={"Transmission"}
          options={transmission}
          setState={set_transmisson}
          param={"transmission"}
        />
        <Dropdown
          category={"Engine type"}
          options={engine_type}
          setState={set_engine_type}
          param={"engine_type"}
        />
      </div>
    </div>
  );
};

export default PriceSlide;
