import React, { useState } from "react";
import Animation from "../assets/animation.json";
import Lottie from "lottie-react";
import { IoCopy } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";

const LandingPage = () => {
    console.log(import.meta.env.VITE_URL)

  const [shortUrl, setShortUrl] = useState("");
  const [url, setUrl] = useState("");
  const handleSubmitUrl = async () => {
    try {
      // Regular expression to validate URL format
      const urlPattern =
        /^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/;

      // Check if the input URL matches the pattern
      if (!urlPattern.test(url)) {
        throw new Error("Invalid URL format");
      }

      const response = await axios.post(`${import.meta.env.VITE_URL}`, {
        url: url,
      });
      const data = response.data;
      console.log(data)
      if (data) {
        setShortUrl(data.shortUrl);
        await navigator.clipboard.writeText(data.shortUrl);
        console.log("Shortened URL copied to clipboard:", data.shortUrl);
        toast("URL copied😉!!", {
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
      console.error("Error while shortening URL:", error);
      if (error.response && error.response.status === 400) {
        toast.error("Invalid URL format");
      } else {
        toast.error("Invalid URL format");
      }
    }
  };

  const handleCopyShortUrl = async () => {
    await navigator.clipboard.writeText(shortUrl);
    console.log("Shortened URL copied to clipboard:", shortUrl);
    toast("URL copied!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmitUrl();
    }
  };
  return (
    <>
      <div className=" h-screen w-full bg-primarybackground  bg-dotted-spacing-4 bg-dotted-[#191818] flex justify-center sm:pt-32 pt-10">
        <div className="sm:w-11/12 w-10/12 flex gap-16">
          <div className="sm:w-8/12 flex flex-col sm:gap-12 gap-10">
            <div className=" text-white font-Roboto tracking-tighter w-full text-3xl ">
              <span className="sm:text-lg text-sm leading-10 text-[#686c6c]">
                Instantly shorten URLs for efficient sharing.
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-800 font-extrabold  sm:text-4xl texy-3xl to-green-800 text-transparent bg-clip-text w-max">
                Shrinkr
              </span>
              ,simplify your links effortlessly
            </div>
            <div className=" w-full flex sm:flex-row flex-col   gap-4">
              <input
                type="text"
                className="w-full h-14 rounded-lg bg-primarybackground border-2 border-[#686c6c] pl-5 text-white"
                placeholder="Paste your URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <div
                className=" cursor-pointer ml-auto py-2 px-8 bg-green-600 hover:bg-green-700 hover:scale-105 transition-all rounded-md text-white font-Poppins flex justify-center items-center"
                onClick={handleSubmitUrl}
              >
                SHRINK
              </div>
            </div>
            {shortUrl ? (
              <div className="flex flex-col text-white font-Roboto tracking-tight text-xl gap-2">
                <div>Shorten URL: </div>
                <div
                  className="flex items-center  gap-4"
                  onClick={handleCopyShortUrl}
                >
                  <a
                    className="text-green-600 cursor-pointer text-2xl w-full max-w-md break-all"
                    target="_blank"
                    href={shortUrl}
                  >
                    {shortUrl}
                  </a>
                  <IoCopy className="text-4xl cursor-pointer text-green-700 " />
                </div>
              </div>
            ) : null}
          </div>
          <div className="w-4/12 hidden md:block ">
            <Lottie animationData={Animation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
