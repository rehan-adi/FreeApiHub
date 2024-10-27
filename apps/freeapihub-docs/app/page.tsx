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
      <section className="p-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Available APIs</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <h3 className="text-xl font-semibold">Random User API</h3>
              <p>Generate random user data for testing and prototyping.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Jokes API</h3>
              <p>Access a collection of jokes to lighten up your day.</p>
            </li>
            {/* Add more API details as needed */}
          </ul>
        </div>
      </section>
    </div>
  );
}
