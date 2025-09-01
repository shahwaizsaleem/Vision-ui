import React from "react";
import AppBar from "../components/Appbar";
import SBG from "../assets/SBG.jpg";

export default function Signup() {
  return (
    <section className=" bg-[#0F123B]">
      <AppBar />

      {/* Left side: Full-height image */}
      <div className="absolute top-0 left-0 w-1/2 h-full z-0">
        <img
          src={SBG}
          alt="Example"
          className="w-full h-[1000px] object-cover brightness-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-40">
          <h4 className="text-white text-lg font-semibold px-6 py-2 rounded-lg">
            INSPIRED BY THE FUTURE
          </h4>
          <h2 className="text-white text-4xl font-bold rounded-lg whitespace-nowrap px-6">
            THE VISION UI DASHBOARD
          </h2>
        </div>
      </div>

      {/* Titles outside the card */}
      <div className="absolute top-[100px] left-[700px] text-center z-10">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome!</h2>
        <p className="text-white mb-6 max-w-xs">
          Use these awesome forms to login or create new account in your project for free.
        </p>
      </div>

      {/* Card */}
      <div
        className="absolute z-10"
        style={{
          width: "352.5px",
          height: "713.5px",
          top: "220px",
          left: "700px",
          borderRadius: "30px",
          borderWidth: "1px",
          
          borderColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "#0F123B",
          opacity: 1,
          boxShadow: "0 0 20px rgba(47,128,237,0.7)",
        }}
      >
        <div className="p-10 flex flex-col items-center h-full">
          {/* Social Register */}
          <h2 className="text-white text-2xl font-semibold mb-6">Register with</h2>
          <div className="flex justify-center gap-x-4 mb-6">
            {[{
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png",
              alt: "Facebook",
            },{
              src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
              alt: "Apple",
            },{
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/512px-Google_%22G%22_logo.svg.png",
              alt: "Google",
            }].map((social, idx) => (
              <div
                key={idx}
                className="w-16 h-12 flex items-center justify-center bg-[#0F123B] border border-[#3a3a5a] rounded-xl cursor-pointer transition-all hover:bg-[#3a3a5a]"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="w-6 h-6"
                  style={{ filter: "invert(100%) grayscale(100%)" }}
                />
              </div>
            ))}
          </div>

          <div className="text-[#8888a0] text-center mb-6 text-xs uppercase tracking-widest">or</div>

          {/* Form Inputs */}
          <div className="space-y-6 w-full">
            {[{ label: "Name", type: "text", placeholder: "Your full name" },
              { label: "Email", type: "email", placeholder: "Your email address" },
              { label: "Password", type: "password", placeholder: "Your password" }].map((field, idx) => (
              <div key={idx}>
                <label className="block text-[#8888a0] text-sm font-medium mb-1">{field.label}</label>
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
                <div className="w-11 h-6 bg-[#ccc] rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4a90e2] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4a90e2]"></div>
                <span className="ml-2 text-sm text-white">Remember me</span>
              </label>
            </div>

            <button type="submit" className="w-full py-3 bg-[#2f80ed] text-white rounded-xl font-semibold transition-all hover:bg-[#216ac0]">
              SIGN UP
            </button>
          </div>

          <p className="text-center text-[#8888a0] text-sm mt-6">
            Already have an account? <a href="#" className="text-blue-400 font-semibold hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </section>
  );
}
