import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="py-3.5 flex justify-between fixed top-0 w-full border-b dark:border-white border-opacity-10 border-black backdrop-blur items-center md:px-24 px-5">
      <span className="flex justify-between text-base font-semibold items-center">
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
      <div className="flex justify-between items-center gap-4">
        <div>
          <ThemeToggle />
        </div>
        <div className="px-2 py-1.5 rounded-md dark:hover:bg-neutral-800 cursor-pointer hover:bg-gray-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
