import React from "react";
import FieldBorder from "../../../shared_components/InputField2";

const Billing = () => {
  return (
    <div className="m-6 rounded">
      <h4 className="text-egreen font-bold text-[2rem] text-right">Billing</h4>
      <div className="border-[0.5px] border-bgrey rounded-xl py-[1.5rem] px-5 flex flex-col gap-[1.2rem] my-4">
        <h4 className="text-[1.2rem] font-[400]">Payment Method</h4>
        <h4 className="text-[0.9rem] font-[100]">
          Update your billing <br /> details and addresss
        </h4>

        <FieldBorder
          label={"Card Number"}
          placeholder={"0000 0000 0000 0000"}
        />

        <span className="flex justify-between gap-2">
          <FieldBorder label={"Valid Until"} placeholder={"MM/YY"} />
          <FieldBorder label={"CVC"} placeholder={"123"} />
        </span>

        <FieldBorder label={"Card holder"} placeholder={"John Doe"} />

        <FieldBorder
          label={"Email Address"}
          placeholder={"johndoe@example.com"}
        />

        <button className="border-[#fff]  font-[400] rounded-md text-center border-[1px] px-2 py-2">
          Update
        </button>
      </div>
    </div>
  );
};

export default Billing;
