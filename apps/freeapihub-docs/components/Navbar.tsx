import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="py-3.5 flex justify-between fixed top-0 w-full border-b dark:border-white dark:border-opacity-10 border-black border-opacity-15 backdrop-blur items-center md:px-24 px-5">
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
      <div className="flex justify-between items-center gap-4">
        <div>
          <ThemeToggle />
        </div>
        <Link href="https://github.com/rehan-adi/FreeApiHub" target="_blank" rel="noopener noreferrer">
        <div className="px-2 py-1.5 rounded-md dark:hover:bg-neutral-800 cursor-pointer hover:bg-gray-200">
        <FaGithub className="text-black text-2xl dark:text-white"/>
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
