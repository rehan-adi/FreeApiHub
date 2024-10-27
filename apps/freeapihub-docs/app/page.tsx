export default function Home() {
  return (
    <div className="text-white pt-16 min-h-screen flex flex-col justify-center items-center">
      <header className="text-center py-12">
        <h1 className="md:text-6xl text-4xl bg-clip-text px-4 text-transparent bg-gradient-to-r from-white to-gray-500 w-full md:w-[60vw] font-extrabold tracking-tighter line-height">
          Explore and leverage a wide range of APIs with ease.
        </h1>
      </header>

      <div className="flex justify-center gap-6 py-5">
        <button className=" text-white text-sm font-medium py-3 px-7 border border-white border-opacity-35 rounded-md hover:border-opacity-100 transition-all">
          Get Started
        </button>
        <button className=" text-white text-sm font-medium py-3 px-7 border border-white border-opacity-35 rounded-md hover:border-opacity-100 transition-all">
          Explore APIs
        </button>
      </div>

      {/* API Details Section */}
      <div className="py-20 md:px-72 px-4 space-y-6 w-full">
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
    </div>
  );
}
