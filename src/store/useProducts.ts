import { create } from "zustand";

type Product = {
  _id: string;
  category: string;
  description: string;
  name: string;
  owner: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
};

type useProducts = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const useProducts = create<useProducts>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
}));
