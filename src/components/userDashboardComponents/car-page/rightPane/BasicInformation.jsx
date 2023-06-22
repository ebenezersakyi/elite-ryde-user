import React from "react";
import DetailTab from "./DetailTab";
import { useSelector } from "react-redux";
const BasicInformation = () => {
  const { data: {basicInformation} } = useSelector((d) => d?.selected_car);
    const detailsInfo = [
        {
          icon: 'ic:baseline-directions-car',
          title: 'Car brand',
          value: basicInformation?.make
        },
        {
          icon: 'ic:baseline-directions-car',
          title: 'Car model',
          value: basicInformation?.model
        },
        {
          icon: 'mdi:engine-outline',
          title: 'Engine size',
          value: `${basicInformation?.engineSize} liters`
        },
        {
          icon: 'simple-line-icons:calender',
          title: 'Year', 
          value: basicInformation?.year
        },
        {
          icon: 'ic:baseline-directions-car',
          title: 'Type of car', 
          value: basicInformation?.bodyStyle
        },
        {
          icon: 'material-symbols:format-list-numbered',
          title: 'Number of seats', 
          value: basicInformation?.numberOfSeats
        },
        {
          icon: 'ph:road-horizon-thin',
          title: 'Mileage',
          value: basicInformation?.mileage
        },
        {
          icon: 'mdi:petrol-pump',
          title: 'Engine type',
          value: basicInformation?.engineType
        },
        {
          icon: 'solar:transmission-linear',
          title: 'Transmission', 
          value: basicInformation?.transmission
        },
      ]
  return (
    <div className="grid grid-cols-3 gap-4">
      {detailsInfo.map(({ icon, title, value }, inx) => {
        return <DetailTab icon={icon} title={title} value={value || "test"} key={inx} />;
      })}
    </div>
  );
};

export default BasicInformation;
