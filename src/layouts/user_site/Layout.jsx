import Header from "../../components/shared_components/Header";
import { Outlet } from "react-router-dom";
import { bg } from "../../utils/bg-landing-page";
// import img from '../../assets/bg/bg1.svg'

const Layout = () => {
  const bgurl = "bg-[url('./assets/bg/bg1.svg')]";
  return (
    <div className={`relative min-h-[100vh] ${bgurl} bg-no-repeat bg-cover hidden lg:block`}>
      <div className=" top-0 bottom-0 fixed  h-full w-full bg-[#000000df] z-[-3]"></div>
        <Header />
        <Outlet />
    </div>
  );
};

export default Layout;
