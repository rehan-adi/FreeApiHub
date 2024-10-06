import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { API_BACKEND_URL } from "@/constant";
import { SignupValidationType } from "@/validations/auth.validation";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signUp = async (data: SignupValidationType) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BACKEND_URL}/users/register`,
        data
      );

      if (response.status === 201) {
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
    } finally {
       setLoading(false);
    }
  };
  return {
    signUp,
    loading,
  };
};
