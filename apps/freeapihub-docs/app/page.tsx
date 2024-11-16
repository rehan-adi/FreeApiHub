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
    <div className="text-white dark:bg-[#141312] pt-16 min-h-screen flex flex-col justify-center items-center">
      {/* Navbar  */}
      <Navbar />

      <header className="text-center pt-12 pb-8">
        <h1 className="md:text-6xl text-4xl px-4 dark:text-white text-black w-full md:w-[60vw] font-bold tracking-tighter line-height">
          Explore and leverage a wide range of APIs with ease.
        </h1>
      </header>

      <div className="flex justify-center gap-6 py-5">
        <Link href="/docs">
          <button className="dark:text-black dark:bg-white bg-black text-white text-base font-medium py-2 px-5 rounded-md hover:border-opacity-100 transition-all">
            Get Started
          </button>
        </Link>
        <Link href="https://freeapihub.onrender.com/api-docs/">
          <button className="dark:text-black dark:bg-white bg-black text-white text-base font-medium py-2 px-5 rounded-md hover:border-opacity-100 transition-all">
            Explore APIs
          </button>
        </Link>
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
      <div className="pb-20 pt-10 lg:px-80 px-4 space-y-6 w-full">
        <div className="flex justify-between flex-col md:flex-row items-center gap-6 ">
          <div className="bg-zinc-50 p-6 dark:bg-[#1E1C1B] border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <User className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl text-black dark:text-white font-semibold tracking-wider">
                Random User API
              </h3>
            </div>
            <p className="mt-3 text-sm dark:text-[#A1A1AA] text-black tracking-wider">
              Get random user data packed with detailed information.
            </p>
            <Link href="/docs/explore_all_apis/random-user">
              <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
                Explore API
              </button>
            </Link>
          </div>
          <div className="bg-zinc-50 p-6 dark:bg-[#1E1C1B] border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <Smile className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold text-black dark:text-white tracking-wider">
                Joke API
              </h3>
            </div>
            <p className="mt-3 text-sm dark:text-[#A1A1AA] text-black tracking-wider">
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
          <div className="bg-zinc-50 p-6 dark:bg-[#1E1C1B] border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <Quote className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">
                Quote API
              </h3>
            </div>
            <p className="mt-3 text-sm dark:text-[#A1A1AA] text-black tracking-wider">
              Retrieve inspiring, thought-provoking quotes to enhance user
              experience.
            </p>
            <Link href="/docs/explore_all_apis/quote">
              <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
                Explore API
              </button>
            </Link>
          </div>
          <div className="bg-zinc-50 p-6 dark:bg-[#1E1C1B] border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <LineChart className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">
                Stock API
              </h3>
            </div>
            <p className="mt-3 text-sm dark:text-[#A1A1AA] text-black tracking-wider">
              Get up-to-date stock information for real-time financial insights.
            </p>
            <Link href="/docs/explore_all_apis/stock">
              <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
                Explore API
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row gap-6 dark:text-[#FAFAFACC] text-black">
          <div className="bg-zinc-50 p-6 dark:bg-[#1E1C1B] border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <Notebook className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">Book API</h3>
            </div>
            <p className="mt-3 text-sm dark:text-[#A1A1AA] text-black tracking-wider">
              Explore a catalog of books with comprehensive information for
              readers.
            </p>
            <Link href="/docs/explore_all_apis/book">
              <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
                Explore API
              </button>
            </Link>
          </div>
          <div className="bg-zinc-50 p-6 dark:bg-[#1E1C1B] border border-zinc-200 dark:border-zinc-700/50 min-h-44 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <CodeXml className="dark:text-white text-black w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">
                Programming Language API
              </h3>
            </div>
            <p className="mt-3 text-sm dark:text-[#A1A1AA] text-black tracking-wider">
              Discover detailed information about various programming languages.
            </p>
            <Link href="/docs/explore_all_apis/programming-language">
              <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
                Explore API
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row gap-6 dark:text-[#FAFAFACC] text-black">
          <div className="bg-zinc-50 p-6 dark:bg-[#1E1C1B] border border-zinc-200 dark:border-zinc-700/50 min-h-44 md:w-1/2 w-full rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-start items-start">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="text-black dark:text-white w-6 h-6" />{" "}
              <h3 className="text-xl font-semibold tracking-wider">
                Product API
              </h3>
            </div>
            <p className="mt-3 text-sm dark:text-[#A1A1AA] text-black tracking-wider">
              Access product details for e-commerce and business applications.
            </p>
            <Link href="/docs/explore_all_apis/product">
              <button className="mt-10 px-4 py-2 text-sm font-semibold text-white dark:text-black dark:bg-white bg-black rounded-md">
                Explore API
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* pricing */}
      <div className="pb-16">
        <h1 className="text-xl font-medium tracking-wider mb-10 text-center w-full dark:text-white text-black">
          Pricing
        </h1>
        <div className="px-8 py-6 lg:w-[380px] w-full border border-pink-400 rounded-xl text-center transition-colors self-stretch">
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
        <h1 className="text-xl font-medium tracking-wider text-black dark:text-white">
          What Our Users Are Saying
        </h1>
      </div>
      <Marquee
        pauseOnHover
        className="[--duration:25s] mb-20 w-[85%] md:max-w-[940px] dark:text-white text-black"
      >
        <div className="flex items-center space-x-8">
          <blockquote className="text-center px-4 py-7 bg-zinc-50 dark:bg-[#1E1B1C] rounded-lg shadow-md w-72">
            <p className="italic text-gray-700 dark:text-gray-300">
              &quot;FreeAPI Hub makes API integration a breeze!&quot;
            </p>
            <p className="mt-3 font-semibold">– Sarah J., Developer</p>
          </blockquote>
          <blockquote className="text-center px-4 py-7 bg-zinc-50 dark:bg-[#1E1B1C] rounded-lg shadow-md w-72">
            <p className="italic text-gray-700 dark:text-gray-300">
              &quot;10,000+ developers can’t be wrong. Love it!&quot;
            </p>
            <p className="mt-3 font-semibold">– Daniel K., Product Manager</p>
          </blockquote>
          <blockquote className="text-center px-4 py-7 bg-zinc-50 dark:bg-[#1E1B1C] rounded-lg shadow-md w-72">
            <p className="italic text-gray-700 dark:text-gray-300">
              &quot;Reliable and easy to use. Great service!&quot;
            </p>
            <p className="mt-3 font-semibold">– Emily R., Software Engineer</p>
          </blockquote>
          <blockquote className="text-center px-4 py-7 bg-zinc-50 dark:bg-[#1E1B1C] rounded-lg shadow-md w-72">
            <p className="italic text-gray-700 dark:text-gray-300">
              &quot;Highly recommended for any project!&quot;
            </p>
            <p className="mt-3 font-semibold">– Chris P., Startup Founder</p>
          </blockquote>
        </div>
      </Marquee>

      {/* Footer  */}
      <Footer />
    </div>
  );
}
