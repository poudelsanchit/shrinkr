import React, { useState } from "react";
import { CiLock, CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import useAuthStore from "../zustand/store"; // Import the Zustand store for authentication

const InputField = ({ icon, placeholder, value, onChange, type }) => {
  return (
    <div className="flex items-center h-12 w-full bg-secondaybackground rounded-lg focus:outline-none pl-4 p-2">
      {icon}
      <input
        type={type}
        className="bg-secondaybackground w-full h-full rounded-lg focus:outline-none pl-4 text-white placeholder:text-[#686c6c]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuthStore();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_URL}/user/login`, {
        email: email,
        password: password,
      });
      const username = response.data.username;
      const data = response.data;
      console.log(data);

      if (data.msg === "User Logged in Successfully") {
        // Call the login function from the Zustand store
        login(username, email);
        toast("Logged in successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // Redirect to the home page or any other page after successful login
        navigate("/"); // Change the path to your desired destination
      } else {
        toast.error("Invalid email or password", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className=" h-screen w-full z-50   bg-primarybackground  bg-dotted-spacing-4 bg-dotted-[#191818] flex justify-center sm:pt-16 pt-10 text-white">
      <div className="w-5/12 h-[32rem]  shadow-lg rounded-lg p-4 flex flex-col gap-10 items-center">
        <div className="w-full justify- flex flex-col text-3xl font-medium font-Roboto tracking-normal gap-2">
          <div>Login to Shrink</div>
          <div className="text-[#686c6c] font-Roboto text-xs">
            Instantly shorten URLs for efficient sharing.
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <InputField
            icon={<CiUser className="text-xl" />}
            placeholder="username, you@example.com"
            value={email}
            onChange={handleEmailChange}
            type={"email"}
          />
          <InputField
            icon={<CiLock className="text-xl" />}
            placeholder="password, at Least 8 characters..."
            value={password}
            onChange={handlePasswordChange}
            type={"password"}
          />
       
          <div
            className="mt-4 bg-green-600 rounded-md flex justify-center items-center py-3 cursor-pointer font-Poppins text-bold hover:bg-green-700"
            onClick={handleSubmit}
          >
            Login
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="h-[0.1px] w-full bg-[#686c6c]"></div>
            <div className="font-Poppins text-sm">or</div>
            <div className="h-[0.1px] w-full bg-[#686c6c]"></div>
          </div>
          <div className="font-Poppins text-sm">
            Don't have an Account?{" "}
            <Link to={'/signup'}>
            <span className="text-green-500 cursor-pointer"> Signup</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
