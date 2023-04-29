import { useNavigate } from "react-router-dom";
import PriceSlide from "../vendor-page/PriceSlide";
import BodyStyleComponent from "../vendor-page/BodyStyleComponent";
import DetailSelection from "../vendor-page/DetailSelection";
import Picker from "../shared/Picker";
import calender from '../../../assets/dashboard/vendor/second-pane/calender.svg'
import location from '../../../assets/dashboard/vendor/second-pane/location.svg'
import arrow from '../../../assets/dashboard/vendor/back.svg'
const LeftPane = () => {
  const nav = useNavigate()
  return (
    // px-4 pt-8 rounded-2xl border-r-[0.7px] border-[#fff] backdrop-blur-[15px] lg:max-h-[100vh]  overflow-y-scroll
    <div className="px-4 pt-8 max-h-screen col-span-1  overflow-y-scroll rounded-2xl border-r-[0.7px] min-w-[fit] border-[#fff] backdrop-blur-[15px]  scrollbar-hide ">
      <div className="flex  justify-between items-center pb-6">
        <h4 className="font-semibold text-[1.1rem]">You Choose</h4>
        <span className="flex gap-2 items-center cursor-pointer hover:text-egreen text-[1rem]" onClick={() => {
          nav('/dashboard/vendors')
        }}>
          <img src={arrow} alt="" className="" />
          Back</span>
      </div>

      <div className="grid grid-row-3 divide-y-[1px] h-fit w-full gap-[2rem] items-center">
        <PriceSlide />
        <BodyStyleComponent/>
        <DetailSelection />
        <div className="flex flex-col gap-[1.5rem] py-[2rem] pl-4">
          <Picker
            img={location}
            cat={"Choose a location"}
            placeholder={"East Legon"}
          />
          <Picker
            img={calender}
            cat={"Pick-up date"}
            placeholder={new Date().toDateString()}
          />
          <Picker
            img={calender}
            cat={"Return date"}
            placeholder={new Date(2, 3, 2023).toDateString()}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
