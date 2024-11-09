"use client";

import z from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

const signinValidation = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInData = z.infer<typeof signinValidation>;

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignInData> = async (data) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        console.error(result.error);
        toast.error("Incorrect password, please try again.");
        return;
      }

      toast.success("Login successful!");
      router.push("/");
    } catch (error: unknown) {
      console.error(error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#141312]">
      <div className="px-10 py-8 flex justify-center items-center md:w-[26vw] md:h-[66vh] h-screen w-full flex-col bg-[#0D0C0C] border border-[#292624] rounded-lg">
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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-7 w-full">
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-3 bg-[#292624] text-[#8C877D] placeholder:text-[#8C877D] rounded focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-7">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full px-4 py-3 bg-[#292624] text-[#8C877D] placeholder:text-[#8C877D] rounded focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <div className="">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center px-4 py-3 bg-[#FF5500] text-white rounded focus:outline-none"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin text-center h-6 w-5" />
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
