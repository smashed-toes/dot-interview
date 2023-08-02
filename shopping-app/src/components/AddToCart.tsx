"use client";

import QuantityButton from "./QuantityButton";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/app/lib/hooks";
import { addToCart } from "@/app/lib/redux/slices/cartSlice";
import { Product } from "./ProductType";

export default function AddToCart({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div className="p-5">
          <p className="font-bold text-lg mb-2">Quantity</p>
          <QuantityButton quantity={quantity} setQuantity={setQuantity} />
          <button
            className="bg-black flex items-center justify-center font-bold text-lg rounded-xl w-full text-white py-5 mt-6"
            onClick={() => dispatch(addToCart({ ...product, quantity }))}
          >
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
}
