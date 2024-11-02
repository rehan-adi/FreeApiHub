import Link from "next/link";
import Marquee from "@/components/ui/marquee";
import {
  Check,
  CodeXml,
  LineChart,
  User,
  Notebook,
  ShoppingCart,
  Smile,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="text-white pt-16 min-h-screen flex flex-col justify-center items-center">

      {/* Navbar  */}
      <Navbar />

      <header className="text-center pt-12 pb-8">
        <h1 className="md:text-6xl text-4xl bg-clip-text px-4 text-transparent dark:bg-gradient-to-r dark:from-white dark:to-gray-500  bg-gradient-to-r from-black to-blue-800 w-full md:w-[60vw] font-extrabold tracking-tighter line-height">
          Explore and leverage a wide range of APIs with ease.
        </h1>
      </header>

      <div className="flex justify-center gap-6 py-5">
        <Link href="/docs">
          <button className="dark:text-white text-black text-sm font-medium py-3 px-7 border dark:border-white border-black border-opacity-35 rounded-md hover:border-opacity-100 transition-all">
            Get Started
          </button>
        </Link>
        <button className=" dark:text-white text-black text-sm font-medium py-3 px-7 border dark:border-white border-black border-opacity-35 rounded-md hover:border-opacity-100 transition-all">
          Explore APIs
        </button>
      </div>

      <Marquee
        pauseOnHover
        className="[--duration:20s] z-0 mt-12 md:mb-20 mb-8 w-[85%] dark:text-white text-black md:max-w-xl "
      >
        <h1>Random User APi</h1>
        <h1>Joke API</h1>
        <h1>Book API</h1>
        <h1>Quote API</h1>
        <h1>Stock API</h1>
        <h1>Programming Language API</h1>
        <h1>Product API</h1>
      </Marquee>

      {/* API Details Section */}
      <div className="pb-20 pt-10 lg:px-72 px-4 space-y-6 w-full">
        <div className="flex justify-between flex-col md:flex-row items-center gap-6 dark:text-[#FAFAFACC] text-black">
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <User className="text-black dark:text-white w-6 h-6" />{" "}
             <h3 className="text-xl font-semibold tracking-wider">
                Random User API
              </h3>
            </div>
            <p className="mt-3 text-sm tracking-wider">
              Get random user data packed with detailed information.
            </p>
            <Link href="/docs/explore_all_apis/random-user">
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
              Explore API
            </button>
            </Link>
          </div>
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <Smile className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">Joke API</h3>
            </div>
            <p className="mt-3 text-sm tracking-wider">
              Access a variety of jokes for humor and entertainment in your
              applications.
            </p>
            <Link href="/docs/explore_all_apis/joke">
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
              Explore API
            </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row items-center gap-6 dark:text-[#FAFAFACC] text-black">
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <Quote className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">
                Quote API
              </h3>
            </div>
            <p className="mt-3 text-sm tracking-wider">
              Retrieve inspiring, thought-provoking quotes to enhance user
              experience.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
              Explore API
            </button>
          </div>
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <LineChart className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">
                Stock API
              </h3>
            </div>
            <p className="mt-3 text-sm tracking-wider">
              Get up-to-date stock information for real-time financial insights.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
              Explore API
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row gap-6 dark:text-[#FAFAFACC] text-black">
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <Notebook className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">Book API</h3>
            </div>
            <p className="mt-3 text-sm tracking-wider">
              Explore a catalog of books with comprehensive information for
              readers.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
              Explore API
            </button>
          </div>
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <CodeXml className="dark:text-white text-black w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">
                Programming Language API
              </h3>
            </div>
            <p className="mt-3 text-sm tracking-wider">
              Discover detailed information about various programming languages.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
              Explore API
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row gap-6 dark:text-[#FAFAFACC] text-black">
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 min-h-44 md:w-1/2 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">
                Product API
              </h3>
            </div>
            <p className="mt-3 text-sm tracking-wider">
              Access product details for e-commerce and business applications.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
              Explore API
            </button>
          </div>
        </div>
      </div>

      {/* pricing */}
      <div className="pb-16">
        <h1 className="text-xl font-medium mb-10 text-center w-full dark:text-white text-black">
          Pricing
        </h1>
        <div className="px-4 py-6 lg:w-[380px] w-full border border-pink-400 rounded text-center transition-colors self-stretch">
          <h2 className="mb-6 text-2xl font-medium dark:text-[#FAFAFACC] text-black">
            Free
          </h2>
          <div className="flex items-start justify-center">
            <ul className="space-y-2 items-start flex justify-center flex-col">
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" />
                <span className="dark:text-[#9B9B9B] text-black">
                  Full access to all APIs
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" />
                <span className="dark:text-[#9B9B9B] text-black">
                  Weekly updates
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" />
                <span className="dark:text-[#9B9B9B] text-black">
                  Comprehensive documentation
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" />
                <span className="dark:text-[#9B9B9B] text-black">
                  Open for Contributions
                </span>
              </li>
            </ul>
          </div>
          <Link href="/docs">
            {" "}
            <button className="mt-12 dark:text-[#9B9B9B] text-black text-base font-medium py-2 px-7 border border-pink-400/50   rounded-md hover:border-pink-400 w-full transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full text-center mb-8">
        <h1 className="text-xl font-medium text-black dark:text-white">
          What Our Users Are Saying
        </h1>
      </div>
      <Marquee
        pauseOnHover
        className="[--duration:25s] mb-20 w-[85%] md:max-w-[940px] dark:text-white text-black"
      >
        <div className="flex items-center space-x-8">
          <blockquote className="text-center p-4 bg-zinc-50 dark:bg-[#1E1B1C] rounded-lg shadow-md w-72">
            <p className="italic text-gray-700 dark:text-gray-300">
              "FreeAPI Hub makes API integration a breeze!"
            </p>
            <p className="mt-2 font-semibold">– Sarah J., Developer</p>
          </blockquote>
          <blockquote className="text-center p-4 bg-zinc-50 dark:bg-[#1E1B1C] rounded-lg shadow-md w-72">
            <p className="italic text-gray-700 dark:text-gray-300">
              "10,000+ developers can’t be wrong. Love it!"
            </p>
            <p className="mt-2 font-semibold">– Daniel K., Product Manager</p>
          </blockquote>
          <blockquote className="text-center p-4 bg-zinc-50 dark:bg-[#1E1B1C] rounded-lg shadow-md w-72">
            <p className="italic text-gray-700 dark:text-gray-300">
              "Reliable and easy to use. Great service!"
            </p>
            <p className="mt-2 font-semibold">– Emily R., Software Engineer</p>
          </blockquote>
          <blockquote className="text-center p-4 bg-zinc-50 dark:bg-[#1E1B1C] rounded-lg shadow-md w-72">
            <p className="italic text-gray-700 dark:text-gray-300">
              "Highly recommended for any project!"
            </p>
            <p className="mt-2 font-semibold">– Chris P., Startup Founder</p>
          </blockquote>
        </div>
      </Marquee>

      {/* Footer  */}
      <Footer />

    </div>
  );
}
