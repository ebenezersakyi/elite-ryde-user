import { useNavigate } from "react-router-dom";
import PriceSlide from "../../components/userDashboardComponents/vendor-page/PriceSlide";
import BodyStyleComponent from "../../components/userDashboardComponents/vendor-page/BodyStyleComponent";
import DetailSelection from "../../components/userDashboardComponents/vendor-page/DetailSelection";
import Picker from "../../components/userDashboardComponents/shared/Picker";
import location from '../../assets/dashboard/vendor/second-pane/location.svg'
import calender from '../../assets/dashboard/vendor/second-pane/calender.svg'
const VendorsPage = () => {
  const nav = useNavigate()
  return (
    <div className="text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem] mt-[1.5rem] backdrop-blur-[12px]">
      <div className="border-[1px] rounded-2xl border-[#fff] p-[2rem] flex flex-col gap-[2rem]">
        <div className="grid-cols-3 border-[1px] grid rounded-2xl border-[#fff] p-8 divide-x-2">
          <PriceSlide  cls={'pr-[1.5rem] py-2'}/>
          <BodyStyleComponent cls={'px-[2rem] py-2'}/>
          <DetailSelection cls={'pl-[2rem] py-2'}/>
        </div>
        <div className=" grid grid-cols-3 gap-[2rem] items-center">
          <div className=" border-[1px] grid grid-cols-3 col-span-2 items-center rounded-2xl border-[#fff] py-[3.5rem] divide-x-2">
            <Picker img={location} cat={"Choose a location"} placeholder={"East Legon"}/>
            <Picker img={calender} cat={"Pick-up date"} placeholder={new Date().toDateString()}/>
            <Picker img={calender} cat={"Return date"} placeholder={new Date(2, 3, 2023).toDateString()}/>
          </div>
          <div onClick={() =>{
              nav('/dashboard/available')
          }} className="rounded-2xl border-[#fff] border-[1px] h-fit grid place-items-center text-[2rem] hover:bg-egreen/50 hover:border-egreen/50 cursor-pointer  px-[3rem] py-[1rem]">
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;
