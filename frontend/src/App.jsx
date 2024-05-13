// App.js

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import BottomNavBar from "./components/BottomNavBar";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BottomNavBar/>
    </>
  );
}

export default App;
