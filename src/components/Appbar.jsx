import React from 'react'

export default function AppBar() {
  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 
      bg-white/20 backdrop-blur-md 
      border border-white/50 
      shadow-[0_0_10px_rgba(255,255,255,0.6)] 
      rounded-full mt-[25px] px-8 py-3 
      flex items-center justify-between w-[700px] z-50">
      
      {/* Title on the left */}
      <span className="text-white font-bold text-lg">VISION UI</span>

      {/* Links in the center with image + text */}
      <div className="flex space-x-6 mx-auto">
         <a href="Dashboard" className="flex items-center space-x-2 text-white font-medium no-underline hover:no-underline">
          <img src="/icons/dashboard.png" alt="Dashboard" className="w-[11px] h-[11px] opacity-100" />
          <span>Dashboard</span>
        </a>
        <a href="Profile" className="flex items-center space-x-2 text-white font-medium no-underline hover:no-underline">
          <img src="/icons/profile.png" alt="Profile" className="w-[11px] h-[11px] opacity-100" />
          <span>Profile</span>
        </a>
         <a href="signin" className="flex items-center space-x-2 text-white font-medium no-underline hover:no-underline">
          <img src="/icons/home.png" alt="Home" className="w-[11px] h-[11px] opacity-100" />
          <span>Sign In</span>
        </a>
        <a href="signup" className="flex items-center space-x-2 text-white font-medium no-underline hover:no-underline">
          <img src="/icons/home.png" alt="Home" className="w-[11px] h-[11px] opacity-100" />
          <span>Sign Up</span>
        </a>
      </div>

      {/* Empty right side for balance */}
      <div className="w-12"></div>
    </nav>
  );
}
