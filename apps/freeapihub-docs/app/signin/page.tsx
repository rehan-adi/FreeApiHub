import { FcGoogle } from "react-icons/fc";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#141312]">
      <div className="px-10 py-8 flex justify-center items-center md:w-[26vw] md:h-[88vh] h-screen w-full flex-col bg-[#0D0C0C] border border-[#292624] rounded-lg">
        <header className="flex justify-center items-center flex-col">
          <span className="flex justify-between text-center font-semibold items-center">
            <svg
              fill="currentColor"
              className="h-10 w-10 mr-2 inline-block"
              viewBox="-100 -100 200 200"
            >
              <path d="M70 60L42-27h30l28 87z"></path>
              <path d="M20.42 40.054L42-27h30L50.42 40.054z"></path>
              <path d="M20.42 40.054L-15-70h30L50.42 40.054z"></path>
              <path d="M-50.42 40.054L-15-70h30L-20.42 40.054z"></path>
              <path d="M-50.42 40.054L-72-27h30l21.58 67.054z"></path>
              <path d="M-100 60l28-87h30l-28 87z"></path>
            </svg>
          </span>
          <h1 className="text-white text-center text-xl mt-6 font-medium">
            Welcome
          </h1>
          <p className="text-[#8C877D] mt-3">
            Signin to FreeApiHub to continue
          </p>
        </header>
        <form action="" className="mt-7 w-full">
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-[#292624] text-[#8C877D] placeholder:text-[#8C877D] rounded focus:outline-none"
            />
          </div>
          <div className="mb-7">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-[#292624] text-[#8C877D] placeholder:text-[#8C877D] rounded focus:outline-none"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#FF5500] text-white rounded focus:outline-none"
            >
              Login
            </button>
          </div>
          <div className="text-center flex justify-between mt-8 text-[#8C877D] items-center">
            <span className="inline-block w-1/2 border-t"></span>
            <span className="mx-2">OR</span>
            <span className="inline-block w-1/2 border-t"></span>
          </div>

          <div className="flex justify-between items-center flex-col gap-3 mt-3 py-4">
            <button className="w-full flex justify-center items-center px-4 py-3 text-[#8C877D] rounded border-2 border-[#1E1C1B] focus:outline-none">
              <span className="inline-block mr-4 text-2xl">
                <FcGoogle />
              </span>
              Login with Google
            </button>
            <button className="w-full flex justify-center items-center px-4 py-3 text-[#8C877D] rounded border-2 border-[#1E1C1B] focus:outline-none">
                <span className="mr-4"><svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-5"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg></span>
              Login with GitHub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
