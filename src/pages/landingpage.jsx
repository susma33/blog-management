import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 bg-amber-300"
    //   style={{
    //     backgroundImage: "url('/background.jpg')", // Replace with your image path
    //     backdropFilter: "blur(8px)",
    //   }}
    >
      <div className="bg-opacity-40 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Welcome to <span className="text-black">Your BlogSpace</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Share your thoughts, stories, and ideas with the world.Easy to use beautifully designed blogging platform.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 border border-teal-600 text-teal-600 rounded-md font-semibold hover:bg-teal-50"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;