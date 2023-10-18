import React from "react";
import IconLoadingWhite from "../../shared_components/IconButton";
import dayjs from "dayjs";
const RentalTable = ({ loading, data }) => {
  const header_titles = ["User", "Status", "Date", "Car", "Amount"];
  return (
    <div className="rounded-lg backdrop-blur-lg border-[1px] border-[#fff] p-[2rem] ">
      {/* header */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-[0] pb-[2rem] pt-[1.5rem] border-b-[1px] border-bgrey mb-2">
        {header_titles.map((elem, index) => {
          return (
            <p
              key={index}
              className={`text-[1.5rem]  font-[400]  
              
              ${elem == "Amount" && "text-end"}
              ${elem == "User" && "hidden sm:block"}
              ${elem == "Status" && "hidden sm:block"}
              `}
            >
              {elem}
            </p>
          );
        })}
      </div>
      <div className="max-h-[45vh] overflow-scroll scrollbar-hide">
        {loading ? (
          <span className="w-full grid place-items-center pt-[2rem]">
            <IconLoadingWhite />
          </span>
        ) : data?.length == 0 ? (
          <p className="text-[1.5rem] text-center  font-[100]">no data</p>
        ) : (
          data?.map((elem, inx) => {
            return <RentalTableRow data={elem} last={inx == data.length - 1} />;
          })
        )}
      </div>
    </div>
  );
};
const RentalTableRow = ({ data, last }) => {
  return (
    <div
      className={`grid grid-cols-3 py-[1rem] ${
        !last && "border-b-[1px]"
      } text[2px] sm:text-[1.2rem] sm:grid-cols-5  font-[100] border-bgrey`}
    >
      <p className={`hidden sm:block`}>{data?.user}</p>
      <p className={`hidden sm:block`}>{data?.status}</p>
      <p className={``}>
        {dayjs(data?.pickupDate).format("DD/MM/YYYY")} -{" "}
        {dayjs(data?.returnDate).format("DD/MM/YYYY")}
      </p>
      <p className={``}>{data?.car}</p>
      <p className={`text-end`}>GHS {data?.amount?.toFixed(2)}</p>
    </div>
  );
};
export default RentalTable;
