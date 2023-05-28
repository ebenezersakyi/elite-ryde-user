import React from "react";
import Field from "../../../shared_components/InputField";
import sample from "../../../../assets/dashboard/sample_pp.svg";
import { useAuth0 } from "@auth0/auth0-react";
const MainAccount = () => {
  const { user } = useAuth0();
  return (
    <div className="m-6 rounded">
      <h4 className="text-egreen font-bold text-[2rem] text-right">Account</h4>

      <div className="border-[0.5px] border-bgrey rounded-xl py-[1.5rem] px-5 flex flex-col gap-[1.5rem] my-4">
        <h4 className="text-[1.2rem] font-[200]">Profile Details</h4>
        <span className="flex items-center gap-4">
          <img
            src={user?.picture}
            alt="user picture"
            className="h-[50px] rounded-full"
          />
          <div>
            <span>
              <button className="px-2 py-1 text-center rounded-md bg-bgrey mr-4">
                Upload Profile Photo
              </button>
              <button className="border-[#fff] rounded-md text-center border-[1px] font-[100] px-2 py-1">
                Delete
              </button>
            </span>

            <p className="text-[0.8rem] mt-2 font-bold">
              Images should be at least 350px big. Allowed files .png .jpg
            </p>
          </div>
        </span>
        <Field placeholder={"Enter your username"} label={"Username"} />
        <Field placeholder={"Enter your email address"} label={"Email"} />
      </div>

      <div className="border-[0.5px] border-bgrey rounded-xl py-[1.5rem] px-5 flex  gap-[1.5rem] my-6 justify-between ">
        <span className="flex flex-col items-start gap-4">
          <h4 className="text-[1.2rem] font-[200]">Close Account</h4>
          <button className="border-[#fff]  font-[100] rounded-md text-center border-[1px] px-2 py-1">
            Learn more
          </button>
        </span>

        <p className="border-[#fff]  font-[100] rounded-md text-center border-[1px] flex items-center justify-center py-4 px-8">
          You can permanently delete or
          <br />
          temporarily freeze your account
        </p>
      </div>
    </div>
  );
};

export default MainAccount;
