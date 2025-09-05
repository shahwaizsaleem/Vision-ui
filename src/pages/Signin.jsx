import React from "react";
import AppBar from "../components/Appbar";
import SBG from "../assets/SBG.jpg";

export default function Signin() {
  return (
    <section className="flex flex-col lg:flex-row h-screen w-screen bg-[#0F123B]">
      <AppBar />

      {/* Left side: Image with text */}
      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full">
        <img
          src={SBG}
          alt="Example"
          className="w-full h-full object-cover brightness-50"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h4 className="text-white text-lg font-semibold mb-2">
            INSPIRED BY THE FUTURE
          </h4>
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            THE VISION UI DASHBOARD
          </h2>
        </div>
      </div>

      {/* Right side: Sign in form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 mt-10">
        <div className="w-full max-w-md bg-[#0F123B] border border-white/20 shadow-lg rounded-2xl p-8">
          {/* Title + Subtitle */}
          <h2 className="text-3xl font-bold text-white text-center mb-2">
            Nice to see you!
          </h2>
          <p className="text-white text-center mb-6">
            Enter your email and password to sign in
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg text-white placeholder-[#aaa] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-[#2a2a4a] border border-[#3a3a5a] rounded-lg text-white placeholder-[#aaa] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between">
              {/* Toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:bg-indigo-500 transition-colors"></div>
                <div className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-5"></div>
                <span className="ml-3 text-white text-sm">Remember me</span>
              </label>

              {/* Forgot password */}
              <a href="/signin" className="text-sm text-indigo-400 hover:underline">
  Forgot password?
</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
