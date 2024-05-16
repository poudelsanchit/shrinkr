import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import BottomNavBar from "./components/BottomNavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import UserSignUp from "./components/UserSignUp";
import UserLogin from "./components/UserLogin";
import useAuthStore from "./zustand/store";

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {!isAuthenticated && <Route path="/signup" element={<UserSignUp />} />}
        {!isAuthenticated && <Route path="/login" element={<UserLogin />} />}
        {/* Redirect to home if authenticated */}
        {isAuthenticated && (
          <Route
            path="/signup"
            element={<Navigate to="/" replace  />} // Replace current history entry
          />
        )}
        {isAuthenticated && (
          <Route
            path="/login"
            element={<Navigate to="/" replace  />} // Replace current history entry
          />
        )}
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
