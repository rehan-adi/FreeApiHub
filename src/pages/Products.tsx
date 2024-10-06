import { useEffect } from "react";
import { useProducts } from "@/store/useProducts";
import { useGetProducts } from "@/hooks/useGetProducts";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Products = () => {
  const { products } = useProducts();
  const { getProducts, loading } = useGetProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <>
            <Skeleton className="w-full h-60" />
            <Skeleton className="w-full h-60" />
            <Skeleton className="w-full h-60" />
          </>
        ) : (
            products.map((product) => (
            <Card key={product._id} className="shadow-lg">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>${product.price}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <img
                  src={product.mainImage.url}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                /> */}
                <p className="text-sm text-gray-700">{product.description}</p>
                <p className="text-sm mt-2">Stock: {product.stock}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
