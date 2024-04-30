import P from "../component/base/P";
import { FaFacebook, FaSquareInstagram, FaGithub, FaSquareTwitter, FaTiktok  } from "react-icons/fa6";
const FooterPages = () => {
  return(
    <div className="bg-slate-200 shadow-2xl">
      <div className="flex justify-center  ">
        <div className="w-14 h-14">
          <img className="w-full h-full rounded-full border shadow-lg" 
          src="https://i.pinimg.com/originals/51/db/54/51db54b42ddc80e9b8ea05e0b4ae1b7f.gif" alt="NIKE" />
        </div>
      </div>
      <div className="text-3xl flex justify-center items-center gap-2 py-3">
        <FaFacebook className="hover:scale-[.9]"/>
        <FaSquareInstagram className="hover:scale-[.9]"/>
        <FaGithub className="hover:scale-[.9]"/>
        <FaSquareTwitter className="hover:scale-[.9]"/>
        <FaTiktok className="hover:scale-[.9]"/>
      </div>
      <div className="flex justify-center items-center">
        <P className="font-bold">
          <P size="xl" className="py-2"><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit  Officia accusantium impedit.</em></P>
           <P size="lg" className="px-10 py-2"><em>etdelectus voluptates non iure voluptatibus sed maiores dolore soluta molestias,</em> </P>
          <P className="px-28 py-2"><em> pariatur doloribus dolorum alias aliquid laboriosam quo expedita?</em></P>
        </P>
      </div>
    </div>
  )
} 
export default FooterPages;