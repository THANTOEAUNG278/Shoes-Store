import { Outlet } from "react-router-dom"
import Navigate from "./Navigate";

const Layout = () =>{
  return(
    <div>
      <div>
        <Navigate/>
      </div>
      <div className="mt-16 mx-[10%]">
        <Outlet/>
      </div>
      
    </div>
  )
}
export default Layout;