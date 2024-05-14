// App.js

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import BottomNavBar from "./components/BottomNavBar";
import { Route, Routes } from "react-router-dom";
import UserSignUp from "./components/UserSignUp";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<UserSignUp />} />
      </Routes>

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
      <BottomNavBar />
    </>
  );
}

export default App;
