import React from "react";
import { Route, Routes } from "react-router";


import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import LandingPage from "./pages/landingpage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPage/>} />
        
      </Routes>
    </>
  );
};

export default App;
