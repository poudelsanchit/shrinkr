import axios from "axios";
import React, { useState } from "react";
import { CiLock, CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";

const InputField = ({ icon, placeholder, value, onchange, type }) => {
  return (
    <div className="flex items-center h-12 w-full bg-secondaybackground rounded-lg focus:outline-none pl-4 p-2">
      {icon}
      <input
        type={type}
        className="bg-secondaybackground w-full h-full rounded-lg focus:outline-none pl-4 text-white placeholder:text-[#686c6c]"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

const UserSignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    // Check if any field is empty
    if (!username || !email || !password) {
      toast.error("Please fill in all fields", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/user", {
        name: username,
        email: email,
        password: password,
      });
      const data = response.data;
      console.log(data); // Log the response data

      if (response.status === 200) {
        // User created successfully
        toast("User created successfully", {
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
      if (error.response.data.error == "Email is already registered") {
        toast.error("Email is already registered", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
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
    }
  };

  return (
    <div className=" h-screen w-full z-50   bg-primarybackground  bg-dotted-spacing-4 bg-dotted-[#191818] flex justify-center sm:pt-16 pt-10 text-white">
      <div className="w-4/12 h-[32rem]  shadow-lg rounded-lg p-4 flex flex-col gap-10 items-center">
        <div className="w-full justify- flex flex-col text-3xl font-medium font-RockSalt tracking-wide gap-2">
          <div> Welcome To SHRINK</div>
          <div className="text-[#686c6c] font-Roboto text-xs">
            Instantly shorten URLs for efficient sharing.
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <InputField
            icon={<CiUser className="text-xl" />}
            placeholder="username"
            value={username}
            onchange={handleUsernameChange}
            type={"text"}
          />
          <InputField
            icon={<MdOutlineEmail className="text-xl" />}
            placeholder="you@example.com"
            value={email}
            onchange={handleEmailChange}
            type={"email"}
          />
          <InputField
            icon={<CiLock className="text-xl" />}
            placeholder="password, at Least 8 characters..."
            value={password}
            onchange={handlePasswordChange}
            type={"password"}
          />
          <div className="text-green-600 ml-auto cursor-pointer text-sm">
            Forgot Password?
          </div>
          <div
            className="bg-green-600 rounded-md flex justify-center items-center py-3 cursor-pointer font-Poppins text-bold hover:bg-green-700
          "
            onClick={handleSubmit}
          >
            Sign Up
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="h-[0.1px] w-full bg-[#686c6c]"></div>
            <div className="font-Poppins text-sm">or</div>
            <div className="h-[0.1px] w-full bg-[#686c6c]"></div>
          </div>
          <div className="font-Poppins text-sm">
            Already have an Account?{" "}
            <span className="text-green-500 cursor-pointer"> Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
