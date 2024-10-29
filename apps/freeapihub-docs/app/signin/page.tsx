import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

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
            <button className="w-full flex justify-center items-center px-4 py-3 text-white rounded border-2 border-[#1E1C1B] focus:outline-none">
              <span className="inline-block mr-4 text-2xl">
                <FaGithub />
              </span>
              <span className="text-[#8C877D]">Login with GitHub</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
