import React from "react";
import IconLoadingWhite from "../../shared_components/IconButton";
const RentalTable = ({ loading, data }) => {
  const header_titles = ["ID", "User", "Status", "Date", "Car", "Amount"];
  return (
    <div className="rounded-lg backdrop-blur-lg border-[1px] border-[#fff] p-[2rem] ">
      {/* header */}
      <div className="grid grid-cols-7 gap-[0] pb-[2rem] pt-[1.5rem] border-b-[1px] border-bgrey mb-2">
        {header_titles.map((elem, index) => {
          return (
            <p
              key={index}
              className={`text-[1.5rem]  font-[400]  ${
                elem == "User" && "col-span-2"
              }
              ${elem == "Amount" && "text-end"}`}
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
            return (
              <RentalTableRow data={elem} last={inx == data.length - 1} />
            );
          })
        )}
      </div>
    </div>
  );
};
const RentalTableRow = ({
  data: { id, user, status, date, car, amount },
  last,
}) => {
  return (
    <div
      className={`grid grid-cols-7 py-[1rem] ${
        !last && "border-b-[1px]"
      } text-[1.2rem] font-[100] border-bgrey`}
    >
      <p className={``}>{id}</p>
      <p className={`col-span-2`}>{user}</p>
      <p className={``}>{status}</p>
      <p className={``}>
        {date[0]} - {date[1]}
      </p>
      <p className={``}>{car}</p>
      <p className={`text-end`}>GHS {amount}</p>
    </div>
  );
};
export default RentalTable;