"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, User, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!mounted) return null;

  return (
    <>
      <nav className="py-4 md:px-20 px-4 border-b dark:border-white border-black dark:border-opacity-15 border-opacity-25 fixed bg-white dark:bg-[#020817] flex justify-between items-center w-full top-0 backdrop-blur-md">
        <Link href="/">
          <div className="flex justify-between items-center gap-2">
            <img src="main.svg" className="w-7 h-7" alt="Logo" />
            <span className="text-lg dark:text-white text-black font-semibold">
              100xStore
            </span>
          </div>
        </Link>
        <div className="flex justify-between items-center gap-3">
          <div className="hidden md:flex justify-between items-center gap-1">
            <Link href="/profile" className="dark:text-white text-black p-2">
              <User size={20} />
            </Link>
            <Link href="/cart" className="dark:text-white text-black p-2">
              <ShoppingCart size={20} />
            </Link>
          </div>
          <button
            className="p-2 border dark:border-white border-black dark:border-opacity-20 border-opacity-40 rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="text-black dark:text-white" size={17} />
            ) : (
              <Sun size={17} />
            )}
          </button>
          <button
            onClick={toggleSidebar}
            className="dark:text-white text-black md:hidden flex p-2 border dark:border-white border-black dark:border-opacity-20 border-opacity-40 rounded-full"
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
        <div className="fixed top-0 right-0 py-1 w-full h-full bg-white dark:bg-[#020817] dark:text-white text-black shadow-lg z-50">
          <div className="flex justify-between items-center p-4">
            <Link href="/">
              <div className="flex justify-between items-center gap-2">
                <img src="main.svg" className="w-7 h-7" alt="Logo" />
                <span className="text-lg font-semibold">100xStore</span>
              </div>
            </Link>
            <button onClick={toggleSidebar} className="mr-2" >
              <X size={20} />
            </button>
          </div>
         <div className="px-5 py-5">
         <div className="flex flex-col border dark:border-white border-black dark:border-opacity-15 border-opacity-40 space-y-6 rounded-lg p-4">
            <Link href="/profile" className="py-2" onClick={toggleSidebar}>
            <span className="text-base tracking-wider font-semibold"> <User size={20} className="inline-block mb-1 mr-2"/> Profile</span>
            </Link>
            <Link href="/cart" className="py-2 mb-7" onClick={toggleSidebar}>
            <span className="text-base tracking-wider font-semibold"> <ShoppingCart size={20} className="inline-block mb-1 mr-2"/> Cart</span>
            </Link>
            <button className="bg-[#3259E8] text-white text-xs font-medium hover:bg-[#3e63e9] rounded-full py-3 px-4 mt-12">
              Login
            </button>
          </div>
         </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
