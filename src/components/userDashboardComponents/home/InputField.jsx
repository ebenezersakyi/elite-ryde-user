import React, { useState } from "react";
import { show_filter } from "../../../store/modal_slide";
import { useDispatch } from "react-redux";
import search from "../../../assets/dashboard/home/search.svg";
import filter from "../../../assets/dashboard/home/filter.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InputField = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchCar = async (sting) => {
    if (sting.length < 2) {
      setSearchResults([]);
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:7073/api/search-car/?car=${sting}`
      );
      console.log("response", response?.data?.data);
      setSearchResults(response?.data?.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="relative">
      <div className="border-[1px] border-bgrey rounded-[5px] px-4 py-[1.2rem] bg-[#00000042] backdrop-blur-lg flex justify-between items-center">
        <img src={search} alt="" className="w-[20px]" />
        <input
          type="text"
          className="w-[90%] outline-none bg-[transparent] text-bgrey text-[1.1rem] font-light"
          placeholder="Search for a car here"
          onChange={(e) => searchCar(e.target.value)}
        />
        <img
          src={filter}
          alt=""
          className="w-[20px]"
          onClick={() => {
            dispatch(show_filter());
          }}
        />
      </div>
      {searchResults.length > 0 && (
        <div className="absolute top-[100%] z-10 bg-[#484848] w-full p-[6px]">
          {searchResults?.slice(0, 10).map((item, index) => {
            return (
              <div
                className="w-[100%] p-[5px] border-b-[2px] flex border-b-[#dedede] items-center"
                onClick={() => {
                  // dispatch(setData(data))
                  nav(`/dashboard/car?id=${item._id}`);
                }}
              >
                <img
                  src={item.photos[0]}
                  alt=""
                  className="w-[60px] h-[60px] rounded-lg"
                />
                <div className="ml-[5px] items-center">
                  <p className="text-[14px]">
                    {item.basicInformation.make} {item.basicInformation.model}
                  </p>
                  <p className="text-[10px]">
                    {item.basicInformation.transmission}
                  </p>
                  <p className="text-[10px]">{item.basicInformation.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputField;
