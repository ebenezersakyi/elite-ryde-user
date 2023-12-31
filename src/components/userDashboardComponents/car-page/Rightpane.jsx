import React, { useState } from "react";
import SectionLayout from "./rightPane/SectionLayout";
import BasicInformation from "./rightPane/BasicInformation";
import AdditionalInformation from "./rightPane/AdditionalInformation";
import CarFeatures from "./rightPane/CarFeatures";
import TimeDetails from "./rightPane/TimeDetails";
import DriverDetails from "./rightPane/DriverDetails";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const Rightpane = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data } = useSelector((d) => d?.selected_car);

  return (
    <div className="col-span-2  flex flex-col gap-[2.5rem] scrollbar-hide mt-[90px] sm:mt-0">
      <div className="flex w-[100%] sm:hidden pt-[25px] border-t-[1px] border-t-[#cdcdcd]">
        <span
          className={`${
            activeTab == 0 && "border-b-[3px] border-b-egreen"
          } w-[25%] flex p-[3px] pb-[10px] justify-center items-center`}
          onClick={() => {
            setActiveTab(0);
          }}
        >
          <Icon
            icon="material-symbols:book"
            width={30}
            className={`${activeTab == 0 ? "text-egreen" : "text-[#FFF]"}`}
          />
        </span>
        <span
          className={`${
            activeTab == 1 && "border-b-[3px] border-b-egreen"
          } w-[25%] flex p-[3px] pb-[10px] justify-center items-center`}
          onClick={() => {
            setActiveTab(1);
          }}
        >
          <Icon
            icon="material-symbols:add"
            width={30}
            className={`${activeTab == 1 ? "text-egreen" : "text-[#FFF]"}`}
          />
        </span>
        <span
          className={`${
            activeTab == 2 && "border-b-[3px] border-b-egreen"
          } w-[25%] flex p-[3px] pb-[10px] justify-center items-center`}
          onClick={() => {
            setActiveTab(2);
          }}
        >
          <Icon
            icon="mdi:car"
            width={30}
            className={`${activeTab == 2 ? "text-egreen" : "text-[#FFF]"}`}
          />
        </span>
        <span
          className={`${
            activeTab == 3 && "border-b-[3px] border-b-egreen"
          } w-[25%] flex p-[3px] pb-[10px] justify-center items-center`}
          onClick={() => {
            setActiveTab(3);
          }}
        >
          <Icon
            icon="mdi:clock"
            width={30}
            className={`${activeTab == 3 ? "text-egreen" : "text-[#FFF]"}`}
          />
        </span>
        {data?.driver && (
          <span
            className={`${
              activeTab == 4 && "border-b-[3px] border-b-egreen"
            } w-[25%] flex p-[3px] pb-[10px] justify-center items-center`}
            onClick={() => {
              setActiveTab(4);
            }}
          >
            <Icon
              icon="mdi:user"
              width={30}
              className={`${activeTab == 4 ? "text-egreen" : "text-[#FFF]"}`}
            />
          </span>
        )}
      </div>

      <div className={`${activeTab == 0 ? "block" : "hidden"} sm:block`}>
        <SectionLayout title="Basic Information">
          <BasicInformation />
        </SectionLayout>
      </div>
      <div className={`${activeTab == 1 ? "block" : "hidden"} sm:block`}>
        <SectionLayout title={"Additional Information"}>
          <AdditionalInformation />
        </SectionLayout>
      </div>
      <div className={`${activeTab == 2 ? "block" : "hidden"} sm:block`}>
        <SectionLayout title={"Car features"}>
          <CarFeatures />
        </SectionLayout>
      </div>
      <div className={`${activeTab == 3 ? "block" : "hidden"} sm:block`}>
        <SectionLayout title={"Time Details"}>
          <TimeDetails />
        </SectionLayout>
      </div>
      {data?.driver && (
        <div className={`${activeTab == 4 ? "block" : "hidden"} sm:block`}>
          <SectionLayout title={"Driver Details"}>
            <DriverDetails />
          </SectionLayout>
        </div>
      )}
    </div>
  );
};

export default Rightpane;
