import { useCallback } from "react";
import {useForm} from "react-hook-form"


const ModalLogin = ({onClose}) => {
  const {register,handleSubmit,formState:{errors}} = useForm();
  const onSubmit = useCallback(data =>console.log("data",data),[])
  return(
    <div className="fixed flex inset-0 justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-80">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <span onClick={onClose} className="absolute top-[28%] right-[39%] font-bold cursor-pointer text-red-500 text-xl hover:scale-[.9]">&times;</span>
          <div>
            <label htmlFor="username" className="block">Useremail</label>
          <input
          className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
          type="email" defaultValue="" {...register("username",{required: "! Input Username",pattern: {value:/A-z$/,message:"! Invalud" } })} placeholder="Enter Useremail" />
          <p className="text-red-500">{errors?.username?.message}</p>
          </div>

          <div>
            <label htmlFor="password" className="block">Password</label>
            <input
            className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
            type="password" defaultValue="" {...register("password")} placeholder="Enter Password" />
          </div>
          
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400">
              Login</button>
            <label className="text-blue-400">
              <input className="mr-1" type="checkbox" name="remerber"
              />
              Remerber Me
            </label>
          </div>

          <div className="text-right">
            <button className="text-red-600 hover:text-red-500 mr-2" onClick={onClose}>Cancle</button>
            <span>
              <a className="text-blue-500 hover:underline">Forgot Password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ModalLogin;
