import axios from "axios";
import { toast } from "sonner";

export const useSignup = () => {
  const signUp = async (data: any) => {
    try {
      const response = await axios.post("/api/signup", data);

      if (response.status === 200) {
        console.log("User registered successfully");
        toast.success("Signup Successful", {
          description: response.data.message,
          duration: 2000,
        });
      }
      
    } catch (error: any) {
      console.log(error);
      toast.error("Signup Failed", {
        description:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
    }
  };
  return {
    signUp,
  };
};
