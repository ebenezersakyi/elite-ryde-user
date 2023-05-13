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
import { useDispatch, useSelector } from "react-redux";
import {
  transmission_t,
  car_model_t,
  engine_type_t,
} from "../../../utils/dropdowncontents";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import dash from "../../../assets/dashboard/vendor/body-styles/dash.svg";

const PriceSlide = () => {
  const dispatch = useDispatch();
  const { start_price, end_price, transmission, car_model, engine_type } = useSelector(state => state.details)
  const [params, setParams] = useSearchParams();

  function valuetext(value) {
    return `${value}°C`;
  }
  const minDistance = 10;

  const { pathname } = useLocation();
  const handleChange1 = (event, newValue, activeThumb) => {
      dispatch(set_starting_price(newValue[0]))
      dispatch(set_end_price(newValue[1]))
  }
  useEffect(() => {
    if (params.get("start_price")) {
      dispatch(set_starting_price(params.get("start_price")))
    }
    if (params.get("end_price")) {
      dispatch(set_end_price(params.get("end_price")))
    }
  }, []);

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
              value={start_price}
              disabled={true}
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
              value={end_price}
            />
            <p className="text-bgrey">GHS</p>
          </span>
        </div>
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={[start_price, end_price]}
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
        className={` grid grid-cols-3 gap-2 mt-8  ${
          pathname == "/dashboard/available" && "grid grid-cols-2 gap-3"
        }`}
      >
        <Dropdown
          category={"Car model"}
          options={car_model_t}
          setState={set_car_model}
          param={"car_model"}
          val={car_model}
        />
        <Dropdown
          category={"Transmission"}
          options={transmission_t}
          setState={set_transmisson}
          param={"transmission"}
          val={transmission}
        />
        <Dropdown
          category={"Engine type"}
          options={engine_type_t}
          setState={set_engine_type}
          param={"engine_type"}
          val={engine_type}
        />
      </div>
    </div>
  );
};

export default PriceSlide;
