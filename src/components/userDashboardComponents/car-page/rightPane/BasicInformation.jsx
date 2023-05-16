import React from "react";
import DetailTab from "./DetailTab";
const BasicInformation = () => {
    const detailsInfo = [
        {
          icon: 'ic:baseline-directions-car',
          title: 'Car brand'
        },
        {
          icon: 'ic:baseline-directions-car',
          title: 'Car model'
        },
        {
          icon: 'mdi:engine-outline',
          title: 'Engine size'
        },
        {
          icon: 'simple-line-icons:calender',
          title: 'Year'
        },
        {
          icon: 'ic:baseline-directions-car',
          title: 'Type of car'
        },
        {
          icon: 'material-symbols:format-list-numbered',
          title: 'Number of seats'
        },
        {
          icon: 'ph:road-horizon-thin',
          title: 'Milage'
        },
        {
          icon: 'mdi:petrol-pump',
          title: 'Engine type'
        },
        {
          icon: 'solar:transmission-linear',
          title: 'Transmission'
        },
      ]
  return (
    <div className="grid grid-cols-3 gap-4">
      {detailsInfo.map(({ icon, title }, inx) => {
        return <DetailTab icon={icon} title={title} value={"test"} key={inx} />;
      })}
    </div>
  );
};

export default BasicInformation;
