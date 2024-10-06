import axios from "axios";
import { toast } from "sonner";
import { API_BACKEND_URL } from "@/constant";
import { useAuthStore } from "@/store/useAuthStore";
import { SigninValidationType } from "@/validations/auth.validation";

export const useSignin = () => {
  const { login, loading, setLoading } = useAuthStore();

  const signin = async (data: SigninValidationType) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BACKEND_URL}/users/login`,
        data
      );
      if (response.status === 200) {
        login();
        toast.success("Signin Successful", {
          description: response.data.message,
          duration: 2000,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Signin Failed", {
        description:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    signin,
    loading
  };
};
