import { NavLink } from "react-router-dom";
import { useState } from 'react';
import ModalLogin from "../pages/ModalLogin";

const Navigate = () =>{
  const isActive = ({isActive}) => {
    return isActive ? 'active' : ''
  }
  const [showModal, setShowModal] = useState(false);

  return(
    <div className="fixed top-0 left-0 right-0 bg-slate-500 text-white z-10 ">
      <div className="flex justify-between items-center h-16 mx-[10%] ">
        <div className="text-3xl font-bold">
          TTA-NIKE-STORE
        </div>
        <div className="flex gap-5 text-md ">
          <div className="hover:underline">
            <NavLink className={isActive} to={"/"}>Home</NavLink>
          </div>
          <div className="hover:underline">
            <NavLink to={"category"}>Category</NavLink>
          </div>
          <div className="hover:underline">
            <NavLink to={"popular"}>Popular</NavLink>
          </div>
          <div className="hover:underline">
            <NavLink to={"about"}>About</NavLink>
          </div>
        </div>
        <div>
          <button onClick={() => setShowModal(true)}>Login</button>
        </div>
      </div>
      {showModal && <ModalLogin onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Navigate;
