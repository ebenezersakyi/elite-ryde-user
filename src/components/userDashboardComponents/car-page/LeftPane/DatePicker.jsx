import React from "react";
import arrow from "../../../../assets/dashboard/vendor/arrow.svg";
import { CustomCalender } from "../../shared/Picker";

const KDatePicker = ({ placeholder, start, setDate, p, label }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className=" flex flex-col gap-3 text-sm cursor-pointer">
      <p className="pl-1 mb-0">{label}</p>
      <div className="border-[1px] border-bgrey flex justify-between items-center text-bgrey rounded-2xl w-full p-4 relative gap-2">
        <p>{placeholder}</p>
        <img src={arrow} alt="" onClick={() => setShow(!show)} />
        {show && (
          <CustomCalender
            hide={setShow}
            start={start}
            setDate={setDate}
            p={p}
          />
        )}
      </div>
    </div>
  );
};

export default KDatePicker;
