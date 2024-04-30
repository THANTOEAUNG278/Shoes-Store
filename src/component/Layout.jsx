import { Outlet } from "react-router-dom"
import Navigate from "./Navigate";
import FooterPages from "../pages/Footer";

const Layout = () =>{
  return(
    <div>
      <div>
        <Navigate/>
      </div>
      <div className="mt-20 mx-[10%]">
        <Outlet/>
      </div>
      <hr />
      <div>
        <FooterPages/>
      </div>
      
    </div>
  )
}
export default Layout;