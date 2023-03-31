import Header from "../../components/shared_components/Header"
import { Outlet } from "react-router-dom"
import { bg } from "../../utils/bg-landing-page"

const Layout = () => {

  return (
    <div className="relative h-full">
      <img src={bg[2]} alt="bg" className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[-2] " />
      <div className=" top-0 bottom-0 fixed  h-full w-full bg-[#000000df] z-[-3]"></div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout