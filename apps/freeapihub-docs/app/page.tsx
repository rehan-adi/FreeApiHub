import Link from "next/link";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="text-white pt-16 min-h-screen flex flex-col justify-center items-center">
      <header className="text-center pt-12 pb-8">
        <h1 className="md:text-6xl text-4xl bg-clip-text px-4 text-transparent bg-gradient-to-r from-white to-gray-500 w-full md:w-[60vw] font-extrabold tracking-tighter line-height">
          Explore and leverage a wide range of APIs with ease.
        </h1>
      </header>

      <div className="flex justify-center gap-6 py-5">
        <Link href="/docs">
          <button className=" text-white text-sm font-medium py-3 px-7 border border-white border-opacity-35 rounded-md hover:border-opacity-100 transition-all">
            Get Started
          </button>
        </Link>
        <button className=" text-white text-sm font-medium py-3 px-7 border border-white border-opacity-35 rounded-md hover:border-opacity-100 transition-all">
          Explore APIs
        </button>
      </div>

      {/* API Details Section */}
      <div className="pb-20 pt-10 lg:px-72 px-4 space-y-6 w-full">
        <div className="flex justify-between flex-col md:flex-row items-center gap-6 ">
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <h3 className="text-xl font-semibold tracking-wider">
              Random User API
            </h3>
            <p className="mt-3 text-sm tracking-wider">
              Get random user data packed with detailed information.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-black bg-white rounded-md">
              Explore API
            </button>
          </div>
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <h3 className="text-xl font-semibold tracking-wider">Joke API</h3>
            <p className="mt-3 text-sm tracking-wider">
              Access a variety of jokes for humor and entertainment in your
              applications.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-black bg-white rounded-md">
              Explore API
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row items-center gap-6 ">
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <h3 className="text-xl font-semibold tracking-wider">Quote API</h3>
            <p className="mt-3 text-sm tracking-wider">
              Retrieve inspiring, thought-provoking quotes to enhance user
              experience.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-black bg-white rounded-md">
              Explore API
            </button>
          </div>
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <h3 className="text-xl font-semibold tracking-wider">Stock API</h3>
            <p className="mt-3 text-sm tracking-wider">
              Get up-to-date stock information for real-time financial insights.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-black bg-white rounded-md">
              Explore API
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row gap-6 ">
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <h3 className="text-xl font-semibold tracking-wider">Book API</h3>
            <p className="mt-3 text-sm tracking-wider">
              Explore a catalog of books with comprehensive information for
              readers.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-black bg-white rounded-md">
              Explore API
            </button>
          </div>
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <h3 className="text-xl font-semibold tracking-wider">
              Programming Language API
            </h3>
            <p className="mt-3 text-sm tracking-wider">
              Discover detailed information about various programming languages.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-black bg-white rounded-md">
              Explore API
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row gap-6 ">
          <div className="bg-zinc-50 p-6 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-700/50 min-h-44 md:w-1/2 w-full rounded-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <h3 className="text-xl font-semibold tracking-wider">
              Product API
            </h3>
            <p className="mt-3 text-sm tracking-wider">
              Access product details for e-commerce and business applications.
            </p>
            <button className="mt-10 px-4 py-2 text-sm font-semibold text-black bg-white rounded-md">
              Explore API
            </button>
          </div>
        </div>
      </div>

      {/* pricing */}
      <div className="pb-16">
        <h1 className="text-lg font-semibold mb-10 text-center w-full dark:text-[#FAFAFACC] text-black">
          Pricing
        </h1>
        <div className="px-4 py-6 lg:w-[380px] w-full border border-pink-400 rounded text-center transition-colors self-stretch">
          <h2 className="mb-6 text-2xl font-medium dark:text-[#FAFAFACC] text-black">Free</h2>
          <div className="flex items-start justify-center">
            <ul className="space-y-2 items-start flex justify-center flex-col">
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" />
                <span className="dark:text-[#9B9B9B] text-black">Full access to all APIs</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" />
                <span className="dark:text-[#9B9B9B] text-black">Weekly updates</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" />
                <span className="dark:text-[#9B9B9B] text-black">
                  Comprehensive documentation
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="text-green-500" />
                <span className="dark:text-[#9B9B9B] text-black">Open for Contributions</span>
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
    </div>
  );
}
