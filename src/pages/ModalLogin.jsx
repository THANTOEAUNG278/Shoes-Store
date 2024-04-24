import { useState } from 'react';

const ModalLogin = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-80">

        <form className="space-y-4">
        <span onClick={onClose} className="absolute top-[28%] right-[39%] font-bold cursor-pointer text-red-500 text-xl hover:scale-[.9]">&times;</span>
          <div>
            <label htmlFor="username" className="block">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400 required:"
            >
              Login
            </button>
            <label className="text-sm text-blue-500">
              <input
                type="checkbox"
                name="remember"
                className="mr-1"
              />
              Remember me
            </label>
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-red-500 hover:text-blue-500 focus:outline-none"
            >
              Cancel
            </button>
            <span className="ml-2 text-sm text-gray-600">
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
