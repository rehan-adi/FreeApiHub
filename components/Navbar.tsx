"use client";

import Link from "next/link";
import { useState } from "react";
import { Moon, Sun, User, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="py-4 md:px-20 px-4 border-b border-white border-opacity-15 fixed bg-[#020817] flex justify-between items-center w-full top-0 backdrop-blur-md">
        <Link href="/">
          <div className="flex justify-between items-center gap-2">
            <img src="main.svg" className="w-7 h-7" alt="Logo" />
            <span className="text-lg font-semibold">100xStore</span>
          </div>
        </Link>
        <div className="flex justify-between items-center gap-3">
          <div className="hidden md:flex justify-between items-center gap-1">
            <Link href="/profile" className="text-white p-2">
              <User size={20} />
            </Link>
            <Link href="/cart" className="text-white p-2">
              <ShoppingCart size={20} />
            </Link>
          </div>
          <button className="p-2 border border-white border-opacity-20 rounded-full">
            <Moon size={17} />
          </button>
          <button
            onClick={toggleSidebar}
            className="text-white md:hidden flex p-2 border border-white border-opacity-20 rounded-full"
          >
            <Menu size={20} />
          </button>
          <button className="bg-[#3259E8] md:flex hidden text-white text-xs font-medium hover:bg-[#3e63e9] rounded-full py-2 px-4">
            Login
          </button>
        </div>
      </nav>

      {/* Sidebar that appears on small screens */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg z-50">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={toggleSidebar}>
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col p-4">
            <Link href="/profile" className="py-2" onClick={toggleSidebar}>
              Profile
            </Link>
            <Link href="/cart" className="py-2" onClick={toggleSidebar}>
              Cart
            </Link>
            <button className="bg-[#3259E8] text-white text-xs font-medium hover:bg-[#3e63e9] rounded-full py-2 px-4 mt-4">
              Clone
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
