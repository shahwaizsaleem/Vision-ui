import React from "react";
import AppBar from "../components/Appbar";
import SBG from "../assets/SBG.jpg";

export default function Signup() {
  return (
    <section className="bg-[#0F123B] min-h-screen relative flex flex-col">
      <AppBar />

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row w-full h-full relative">
        {/* Left Side: Full-height Image with Overlay */}
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto">
          <img
            src={SBG}
            alt="Example"
            className="w-full h-full object-cover brightness-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h4 className="text-white text-lg font-semibold mb-2">
              INSPIRED BY THE FUTURE
            </h4>
            <h2 className="text-white text-2xl md:text-4xl font-bold">
              THE VISION UI DASHBOARD
            </h2>
          </div>
        </div>

        {/* Right Side: Card + Text */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-6 py-12 relative z-10 mt-10">
          {/* Titles */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome!</h2>
            <p className="text-white max-w-sm mx-auto">
              Use these awesome forms to login or create new account in your project
              for free.
            </p>
          </div>

          {/* Card */}
          <div
            className="w-full max-w-md rounded-2xl border border-white/30 bg-[#0F123B] shadow-[0_0_20px_rgba(47,128,237,0.7)] p-8"
          >
            {/* Social Register */}
            <h2 className="text-white text-2xl font-semibold mb-6 text-center">
              Register with
            </h2>
            <div className="flex justify-center gap-4 mb-6">
              {[
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
                  alt: "Facebook",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                  alt: "Apple",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
                  alt: "Google",
                },
              ].map((social, idx) => (
                <button
                  key={idx}
                  className="w-14 h-12 flex items-center justify-center bg-[#0F123B] border border-[#3a3a5a] rounded-xl hover:bg-[#3a3a5a] transition-all"
                >
                  <img
                    src={social.src}
                    alt={social.alt}
                    className="w-6 h-6"
                    style={{ filter: "invert(100%) grayscale(100%)" }}
                  />
                </button>
              ))}
            </div>

            <div className="text-[#8888a0] text-center mb-6 text-xs uppercase tracking-widest">
              or
            </div>

            {/* Form */}
            <form className="space-y-6">
              {[
                { label: "Name", type: "text", placeholder: "Your full name" },
                { label: "Email", type: "email", placeholder: "Your email address" },
                { label: "Password", type: "password", placeholder: "Your password" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-[#8888a0] text-sm font-medium mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-[#2a2a4a] border border-[#3a3a5a] text-white placeholder-[#8888a0] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a90e2] transition-all"
                  />
                </div>
              ))}

              <div className="flex items-center justify-between">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#ccc] rounded-full peer peer-checked:bg-[#4a90e2] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                  <span className="ml-2 text-sm text-white">Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2f80ed] text-white rounded-xl font-semibold transition-all hover:bg-[#216ac0]"
              >
                SIGN UP
              </button>
            </form>

            <p className="text-center text-[#8888a0] text-sm mt-6">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-blue-400 font-semibold hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
