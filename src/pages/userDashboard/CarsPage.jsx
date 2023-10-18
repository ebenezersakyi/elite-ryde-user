import React from "react";
import LeftPane from "../../components/userDashboardComponents/car-page/LeftPane";
import Rightpane from "../../components/userDashboardComponents/car-page/Rightpane";
import Loader from "../../components/shared_components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../store/selected_car";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const CarsPage = () => {
  const [loading, setLoading] = React.useState(false);
  const { data } = useSelector((d) => d?.selected_car);
  const dispatch = useDispatch();
  async function getCar(id) {
    try {
      setLoading(true);
      const response = await axios({
        url: `https://elite-ryde-management-api.azurewebsites.net/api/specific-car?id=${id}`,
        method: "get",
      });

      if (response?.data?.status) {
        console.log("response?.data?.data", response?.data?.data);
        dispatch(setData(response?.data?.data));
      } else {
        nav("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occured");
    } finally {
      setLoading(false);
    }
  }
  const [param] = useSearchParams();
  const nav = useNavigate();
  useEffect(() => {
    if (param.get("id")) {
      // make req
      // console.log(param.get("id"));
      getCar(param.get("id"));
    } else {
      nav("/");
    }
  }, []);

  if (loading) {
    return <Loader />;
  }
  // else
  return (
    <div className="text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem] gap-8 grid grid-cols-1 mt-5 md:grid-cols-4 ">
      {/* {loading ? (
        <div className="w-[100vw] grid place-items-center">
          <Loader />
        </div>
      ) : ( */}
      {data && (
        <>
          <LeftPane />
          <Rightpane />
        </>
      )}
      {/* )} */}
    </div>
  );
};

export default CarsPage;
