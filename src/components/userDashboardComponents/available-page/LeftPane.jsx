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
    <div className="px-4 pt-8 border-r-[0.7px] border-[#fff] backdrop-blur-[15px]">
      <div className="flex  justify-between items-center pb-6">
        <h4 className="font-semibold text-[1.4rem]">You Choose</h4>
        <span className="flex gap-2 items-center cursor-pointer hover:text-egreen text-[1.2rem]" onClick={() => {
          nav('/dashboard/vendors')
        }}>
          <img src={arrow} alt="" className="" />
          Back</span>
      </div>

      <div className="grid grid-row-3 divide-y-[1px] gap-[2rem] items-center">
        <PriceSlide />
        <BodyStyleComponent cls={"pt-[2rem]"} />
        <DetailSelection cls={"py-[2rem]"} />
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
