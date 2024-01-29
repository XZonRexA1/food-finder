import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

// custom hooks
export const useProductContext = () => {
    return useContext(ProductContext);
  };