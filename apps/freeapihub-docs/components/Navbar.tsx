"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { PanelRightOpen, X } from "lucide-react";
import { PiLineVerticalBold,  } from "react-icons/pi";

const Navbar = () => {
  const { data: session } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="py-3.5 flex justify-between fixed top-0 z-50 w-full border-b dark:border-white dark:border-opacity-10 border-black border-opacity-15 backdrop-blur items-center md:px-24 px-5">
        <span className="flex justify-between text-black dark:text-white text-base font-semibold items-center">
          <svg
            fill="currentColor"
            className="h-7 w-7 mr-2 inline-block"
            viewBox="-100 -100 200 200"
          >
            <path d="M70 60L42-27h30l28 87z"></path>
            <path d="M20.42 40.054L42-27h30L50.42 40.054z"></path>
            <path d="M20.42 40.054L-15-70h30L50.42 40.054z"></path>
            <path d="M-50.42 40.054L-15-70h30L-20.42 40.054z"></path>
            <path d="M-50.42 40.054L-72-27h30l21.58 67.054z"></path>
            <path d="M-100 60l28-87h30l-28 87z"></path>
          </svg>
          FreeApiHub
        </span>
        <div className="flex justify-between items-center gap-3">
          <div className="flex justify-between items-center gap-2">
            <ThemeToggle />
            <Link
              href="https://github.com/rehan-adi/FreeApiHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <div className="px-2 py-1.5 rounded-md dark:hover:bg-neutral-800 cursor-pointer hover:bg-gray-200">
                <FaGithub className="text-black text-2xl dark:text-white" />
              </div>
            </Link>
          </div>
          <div className="mr-2 hidden md:block">
            <PiLineVerticalBold className="text-2xl dark:text-zinc-700 text-gray-300" />
          </div>
          <div className="hidden md:block">
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="px-3 py-1.5 bg-black dark:bg-white text-sm font-medium text-white dark:text-black rounded-full"
              >
                Logout
              </button>
            ) : (
              <Link href="/signin">
                <button className="px-3 py-2 bg-black dark:bg-white text-sm font-medium text-white dark:text-black rounded-full">
                  Login
                </button>
              </Link>
            )}
          </div>
          {/* Sidebar Toggle Button */}
          <button onClick={toggleSidebar} className="md:hidden md:ml-0 ml-2">
            <PanelRightOpen className="text-2xl dark:text-white text-black" />
          </button>
        </div>
      </nav>

      {/* Sidebar Component */}
      <div
        className={`fixed top-0 right-0 w-full px-5 rounded-xl py-6 z-50 h-screen shadow-lg bg-white dark:bg-black transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-5 border dark:border-white border-black dark:border-opacity-20 border-opacity-20">
          <div className="flex justify-between items-center">
            <span className="flex justify-between text-black dark:text-white text-base font-semibold items-center">
              <svg
                fill="currentColor"
                className="h-7 w-7 mr-2 inline-block"
                viewBox="-100 -100 200 200"
              >
                <path d="M70 60L42-27h30l28 87z"></path>
                <path d="M20.42 40.054L42-27h30L50.42 40.054z"></path>
                <path d="M20.42 40.054L-15-70h30L50.42 40.054z"></path>
                <path d="M-50.42 40.054L-15-70h30L-20.42 40.054z"></path>
                <path d="M-50.42 40.054L-72-27h30l21.58 67.054z"></path>
                <path d="M-100 60l28-87h30l-28 87z"></path>
              </svg>
              FreeApiHub
            </span>
            <span onClick={toggleSidebar}>
              <X className="text-black dark:text-white"/>
            </span>
          </div>
          <div className="flex flex-col mt-8 gap-3">
          <div className="mb-6">
            <Link
              href="https://github.com/rehan-adi/FreeApiHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="px-2 py-1.5 rounded-md dark:hover:bg-neutral-800 cursor-pointer hover:bg-gray-200">
                <FaGithub className="text-black text-2xl dark:text-white" />
              </div>
            </Link>
          </div>
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="px-3 py-3 dark:bg-white w-full bg-black text-sm font-semibold dark:text-black text-white rounded-full"
              >
                Logout
              </button>
            ) : (
              <Link href="/signin">
                <button className="px-3 py-3 w-full dark:bg-white bg-black text-sm font-semibold dark:text-black text-white rounded-full">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
