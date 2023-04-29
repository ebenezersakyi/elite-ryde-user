import React from "react";
import Slider from "@mui/material/Slider";
import Dropdown from "../shared/Dropdown";
import { transmission, car_model, engine_type } from "../../../utils/dropdowncontents";
import { useLocation } from "react-router-dom";
import dash from '../../../assets/dashboard/vendor/body-styles/dash.svg'
function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

const PriceSlide = () => {
  const { pathname } = useLocation();
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <div className={`  ${pathname == '/dashboard/available' && ' pr-[0px] py-1'} border-[#fff] pr-[1.5rem] py-2`}>
      <div>
        <h4 className="text-[1.2rem] mb-4">Price:</h4>
        <div className="flex flex-row items-center gap-4  mb-3">
          <span className="border-[1px] rounded-md py-2 px-4 flex flex-row justify-between">
            <input
              type="number"
              className={`${pathname == '/dashboard/available' && 'w-[40%]'} bg-[transparent] focus:outline-none inline-block w-[40%]`}
              value={value1[0]}
              onChange={(e) => {
                setValue1(prev => {
                    return [e.target.value, prev[1]]
                })
              }}
            />
            <p>GHS</p>
          </span>
          <img src={dash} alt="" />
          <span className="border-[1px] rounded-md py-2 px-4 flex flex-row justify-between">
            <input
              type="text"
              className={`${pathname == '/dashboard/available' && 'w-[40%]'} bg-[transparent] focus:outline-none inline-block w-[40%]`}
              value={value1[1]}
            />
            <p>GHS</p>
          </span>
        </div>
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        style={{
          color: "#00E124",
          width: "100%"
        }}
      />
      <div className={` flex justify-between gap-2 mt-8 items-center ${pathname == '/dashboard/available' && 'grid grid-cols-2 gap-3'}`}>
        <Dropdown category={"Car model"} options={car_model}/>
        <Dropdown category={"Transmission"} options={transmission}/>
        <Dropdown category={"Engine type"} options={engine_type}/>
      </div>
    </div>
  );
};

export default PriceSlide;
