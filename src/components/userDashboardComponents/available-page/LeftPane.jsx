import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  set_pick_up_date,
  set_return_date,
} from "../../../store/dashboard_state_slice";
import PriceSlide from "../vendor-page/PriceSlide";
import BodyStyleComponent from "../vendor-page/BodyStyleComponent";
import DetailSelection from "../vendor-page/DetailSelection";
import Picker from "../shared/Picker";
import calender from "../../../assets/dashboard/vendor/second-pane/calender.svg";
import location from "../../../assets/dashboard/vendor/second-pane/location.svg";
import arrow from "../../../assets/dashboard/vendor/back.svg";
const LeftPane = () => {
  const { pick_up_date, return_date } = useSelector((data) => data.details);
  const nav = useNavigate();
  return (
    <div className="px-4 pt-8 max-h-screen col-span-1  overflow-y-scroll rounded-2xl border-r-[0.7px] min-w-[fit] border-[#fff] backdrop-blur-[15px]  scrollbar-hide ">
      <div className="flex  justify-between items-center pb-6">
        <h4 className="font-semibold text-[1.1rem]">You Choose</h4>
        <span
          className="flex gap-2 items-center cursor-pointer hover:text-egreen text-[1rem]"
          onClick={() => {
            nav("/dashboard/");
          }}
        >
          <img src={arrow} alt="" className="" />
          Back
        </span>
      </div>

      <div className="grid grid-row-3 divide-y-[1px] h-fit w-full gap-[2rem] items-center">
        <PriceSlide />
        <BodyStyleComponent />
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
            placeholder={pick_up_date}
            type={1}
            setDate={set_pick_up_date}
            p={"pick_up_date"}
          />
          <Picker
            img={calender}
            cat={"Return date"}
            placeholder={return_date}
            type={1}
            start={dayjs(pick_up_date)}
            setDate={set_return_date}
            p={"return_date"}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
//http://localhost:3000/dashboard/available?start_price=200&end_price=1500&car_model=&transmission=&engine_type=&body_style=&engine_size=&registration_year=&color=&number_of_seats=&location=&pick_up_date=Fri+May+12+2023&return_date=Fri+May+12+2023
