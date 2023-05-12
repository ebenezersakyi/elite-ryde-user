import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LandingPageBtn from "../../components/landing-page/LandingPageBtn";
import apple from "../../assets/store-btns/apple.svg";
import android from "../../assets/store-btns/android.svg";
import Tab from "../../components/landing-page/Tab";

const LandingPage = () => {
  const{ loginWithRedirect } = useAuth0()
  console.log(LandingPageBtn);
  return (
    <div className="2xl:container 2xl:mx-auto px-[2.5rem]">
      <div className="text-[#fff] flex justify-between items-center py-[6rem]">
      <div className="flex flex-col">
        <h4 className="text-[4.7rem] font-semibold">
          <span className="text-egreen">Rent</span> the best cars
        </h4>
        <p className="text-[1.7rem] font-light mb-6">
          Book unforgettable rides from trusted hosts across the country{" "}
        </p>

        {/* btns */}

        <div className="flex gap-[2rem]">
          <LandingPageBtn text={"Log In"} link={'dashboard'} />
          <LandingPageBtn text={"Sign Up"} link="/" />
          {/* <LandingPageBtn text={"Become a vendor"} link="/" /> */}
        </div>
      </div>

      <div className="py-[4rem] px-[2rem] rounded-[2rem] backdrop-blur-[10px] flex flex-col gap-[3rem] border-[1px] border-[#fff] w-[35%]">
        <h4 className="text-[1.8rem]">
          Following <span className="text-egreen">three</span> working steps
        </h4>

        <div className="flex flex-col gap-4">
          <Tab
            icon={"material-symbols:check-circle-outline"}
            text="Select a vendor"
          />
          <Tab icon={"uiw:date"} text="Define your booking" />
          <Tab icon={"mdi:cash-multiple"} text="Make payment" />
        </div>

        {/* btns */}

        <div className="flex gap-4">
          <img src={apple} alt="apple app store" className="w-[50%]" />
          <img src={android} alt="android play store" className="w-[50%]" />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default LandingPage;
