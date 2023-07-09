import React from "react";
import success from "../../assets/auth/sucess.svg";
import { useAuth0 } from "@auth0/auth0-react";
const SuccessPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem] pt-[2rem] grid place-items-center">
      <div className="block mx-auto">
        <img src={success} alt="" className="w-[100px] block mx-auto mb-4" />
        <p className="font-[100] text-center text-[1.2rem]">
          Thank you for signing up to elite ryde.
          <br />
          You would receive a confirmation email shortly.
          <br />
        </p>
      </div>
      <p className="font-[100] text-center text-[1.2rem]">
        Click <span className="text-egreen  cursor-pointer" onClick={() => {
          loginWithRedirect()
        }}>here</span> to log
        in
      </p>
    </div>
  );
};

export default SuccessPage;
