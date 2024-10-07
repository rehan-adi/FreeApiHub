import axios from "axios";
import { toast } from "sonner";
import { API_BACKEND_URL } from "@/constant";
import { useCallback, useState } from "react";
import { useProducts } from "@/store/useProducts";

export const useGetProducts = () => {

  const { setProducts } = useProducts();
  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(async () => {
    setLoading(true); 
    try {
      const response = await axios.get(
        `${API_BACKEND_URL}/ecommerce/products`,
      );
      console.log(response.data);
      if (response.status === 200) {
        const products = response.data.data.products; 
        setProducts(products);
        toast.success("Products Loaded", {
          description: "Products fetched successfully!",
          duration: 2000,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Failed to get Products", {
        description:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
    }  finally {
        setLoading(false); 
      }
  }, [setProducts]);

  return { getProducts, loading };
};
