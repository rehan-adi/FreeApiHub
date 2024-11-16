"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { PiLineVerticalBold } from "react-icons/pi";

const Navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="md:py-4 py-3.5 flex justify-between fixed top-0 z-50 w-full border-b dark:border-white dark:border-opacity-10 border-black border-opacity-15 backdrop-blur items-center md:px-44 px-5">
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
        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-between items-center gap-2">
            <ThemeToggle  />
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
                <button className="px-4 py-1.5 bg-black dark:bg-white text-sm font-medium text-white dark:text-black rounded-full">
                  Login
                </button>
              </Link>
            )}
          </div>
          {/* Sidebar Toggle Button */}
          <Button
            className="group flex md:hidden"
            variant="outline"
            size="icon"
            onClick={() => setOpen((prevState) => !prevState)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg
              className="pointer-events-none dark:text-white text-black"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
        </div>
      </nav>

      {/* Sidebar Component */}
      <div
         className={`fixed top-20 transition-transform duration-300 transform z-50 md:w-full w-[90%] px-5 py-6 rounded-xl border dark:border-opacity-15 border-opacity-25 dark:border-white border-black shadow-lg bg-white dark:bg-black ${
          open ? "right-[50%] translate-x-[50%]" : "right-0 translate-x-full"
        } md:hidden`}
      >
        <div className="p-2">
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
              FreeApiHub1
            </span>
            <div className="">
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
          </div>
          <div className="flex flex-col mt-16 gap-3">
            {/* <div className="mb-6">
              <Link
                href="https://github.com/rehan-adi/FreeApiHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-2 py-1.5 rounded-md dark:hover:bg-neutral-800 cursor-pointer hover:bg-gray-200">
                  <FaGithub className="text-black text-2xl dark:text-white" />
                </div>
              </Link>
            </div> */}
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
