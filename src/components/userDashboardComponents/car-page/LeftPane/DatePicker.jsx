import React from "react";
import arrow from "../../../../assets/dashboard/vendor/arrow.svg";
import { CustomCalender } from "../../shared/Picker";
const KDatePicker = ({ placeholder, start, setDate, p}) => {
  const [show, setShow] = React.useState(false);
  return (
    <div
      className="border-[1px] border-bgrey flex justify-between items-center text-bgrey rounded-2xl w-full p-6 relative"
      
    >
      <p>{placeholder}</p>
      <img src={arrow} alt="" onClick={() => setShow(!show)}/>
      {show && <CustomCalender hide={setShow} start={start} setDate={setDate} p={p} />}

    </div>
  );
};

export default KDatePicker;
