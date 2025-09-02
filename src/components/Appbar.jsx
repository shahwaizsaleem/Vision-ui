import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Menu icons
import DashIcon from '../assets/DashIcon.png';
import ProfileIcon from '../assets/ProfileIcon.png';
import Sicon from '../assets/Sicon.png';
import Supicon from '../assets/Supicon.png';

export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed left-1/2 transform -translate-x-1/2 
      bg-white/20 backdrop-blur-md 
      border border-white/50 
      shadow-[0_0_10px_rgba(255,255,255,0.6)] 
      rounded-full mt-[25px] px-6 py-3 
      flex items-center justify-between 
      w-[90%] max-w-[700px] z-50"
    >
      {/* Title */}
      <span className="text-white font-bold text-lg whitespace-nowrap">
        VISION UI
      </span>

      {/* Desktop Nav */}
      <div className="hidden sm:flex space-x-6 mx-auto">
        <a
          href="Dashboard"
          className="flex items-center space-x-2 text-white font-medium hover:text-gray-200"
        >
          <img
            src={DashIcon}
            alt="Dashboard"
            className="w-[14px] h-[14px]"
          />
          <span>Dashboard</span>
        </a>
        <a
          href="Profile"
          className="flex items-center space-x-2 text-white font-medium hover:text-gray-200"
        >
          <img
            src={ProfileIcon}
            alt="Profile"
            className="w-[14px] h-[14px]"
          />
          <span>Profile</span>
        </a>
        <a
          href="signin"
          className="flex items-center space-x-2 text-white font-medium hover:text-gray-200"
        >
          <img src={Sicon} alt="Sign In" className="w-[14px] h-[14px]" />
          <span>Sign In</span>
        </a>
        <a
          href="signup"
          className="flex items-center space-x-2 text-white font-medium hover:text-gray-200"
        >
          <img src={Supicon} alt="Sign Up" className="w-[14px] h-[14px]" />
          <span>Sign Up</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 
          bg-[#0F123B] border border-white/30 rounded-xl shadow-lg 
          flex flex-col space-y-4 p-6 w-[80%] sm:hidden z-40">
          <a href="Dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </a>
          <a href="Profile" className="text-white hover:text-gray-300">
            Profile
          </a>
          <a href="signin" className="text-white hover:text-gray-300">
            Sign In
          </a>
          <a href="signup" className="text-white hover:text-gray-300">
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
