import React from "react";
import AppBar from "../components/Appbar";
import SBG from "../assets/SBG.jpg";

export default function Signin() {
  return (
    <section className="flex h-screen w-screen ">
      <AppBar />

      {/* Left side: Image with text */}
      <div className="relative w-1/2 h-full">
        <img
          src={SBG}
          alt="Example"
          className="w-full h-full object-cover brightness-50"
        />

        {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
  <h4 className="text-white text-lg font-semibold px-6 py-2 rounded-lg">
    INSPIRED BY THE FUTURE 
  </h4>

  <h2 className="text-white text-4xl font-bold rounded-lg whitespace-nowrap px-6">
    THE VISION UI DASHBOARD
  </h2>
</div>
      </div>

      {/* Right side: Sign in form */}
      <div className="w-1/3 h-full flex items-center justify-center bg-0F123B">
        <div>
          {/* Title + Subtitle */}
          <h2 className="text-3xl font-bold text-white text-center mb-2">Nice to see you!
</h2>
          <p className="text-white text-center mb-6">Enter your email and password to sign in</p>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-whitefont-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              />
            </div>

            {/* Remember me */}
<div className="flex items-center justify-between">
  {/* Custom toggle switch */}
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" defaultChecked className="sr-only peer" />
    
    {/* Track */}
    <div className="w-11 h-6 bg-[#ccc] rounded-full peer-checked:bg-[#4a90e2] transition-colors"></div>
    
    {/* Knob */}
    <div className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
    
    <span className="ml-3 text-white text-sm">Remember me</span>
  </label>

  {/* Forgot password link */}
  <a href="#" className="text-sm text-indigo-600 hover:underline">
    Forgot password?
  </a>
</div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
