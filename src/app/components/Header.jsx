'use client';


import { Menu, X } from 'lucide-react'; 

import { useState } from 'react';
export default function Header() {
      const [menuOpen, setMenuOpen] = useState(false);
    return (
      
        <>
        
<header className="header w-full bg-[#EBFFEF] ">
      <div className="max-w-[1300px] mx-auto px-[30px] flex items-center justify-between py-4">
        {/* Logo */}
      <div>
  <img
    src="/sm-logo.svg"
    alt="Logo"
    className="h-[50px] sm:h-[60px] md:h-[100px] w-auto"
  />
</div>


        {/* Hamburger - mobile only */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-[20px]">
          <div className="hover:text-blue-500 cursor-pointer text-lg font-medium font-mulish text-[#1A1A1A]">
            About GAP Assessment
          </div>
          <div className="hover:text-blue-500 cursor-pointer text-lg font-medium font-mulish text-[#1A1A1A]">
            Institutes
          </div>
          <div className="hover:text-blue-500 cursor-pointer text-lg font-medium font-mulish text-[#1A1A1A]">
            How it Works?
          </div>
          <div className="hover:text-blue-500 cursor-pointer text-lg font-medium font-mulish text-[#1A1A1A]">
            Track Status
          </div>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-600 transition"
            style={{ width: '173px', height: '46px' }}
          >
            <img src="/solar_user-linear.png" alt="User Icon" className="w-5 h-5" />
            <span className="font-medium">Register / Login</span>
          </button>
          <div>
            <img src="/LangML.svg" alt="Lang" className="h-[46px] w-auto" />
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-[30px] py-4 space-y-4 bg-[#EBFFEF] shadow-md">
          <div className="text-[#1A1A1A] text-[16px] font-[Mulish] font-medium">
            About GAP Assessment
          </div>
          <div className="text-[#1A1A1A] text-[16px] font-[Mulish] font-medium">
            Institutes
          </div>
          <div className="text-[#1A1A1A] text-[16px] font-[Mulish] font-medium">
            How it Works?
          </div>
          <div className="text-[#1A1A1A] text-[16px] font-[Mulish] font-medium">
            Track Status
          </div>
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-600 transition"
            style={{ height: '46px' }}
          >
            <img src="/solar_user-linear.png" alt="User Icon" className="w-5 h-5" />
            <span className="font-medium">Register / Login</span>
          </button>
          <div>
            <img src="/LangML.svg" alt="Lang" className="h-[46px] w-auto" />
          </div>
        </div>
      )}
    </header>
        </>
    );
}