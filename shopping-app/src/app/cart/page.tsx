"use client";

import { useAppSelector } from "@/app/lib/hooks";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";
import BagItem from "./components/BagItem";

export default function Cart() {
  const { cart, subtotal, shipping, tax, total } = useAppSelector(
    (state) => state
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex lg:flex-row-reverse sm:flex-col lg:gap-20">
      <div className="flex flex-col lg:w-5/12 sm:mb-8">
        <div className="flex flex-col rounded-2xl bg-white drop-shadow-2xl">
          <h2 className="font-bold text-4xl mb-4 p-5">Summary</h2>
          <div className="flex flex-col text-xl gap-3 border-b border-line-light-grey w-full p-5">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>{mounted ? `$${subtotal}` : ""}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span>{mounted ? `$${shipping}` : ""}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tax</span>
              <span>{mounted ? `$${tax}` : ""}</span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-2xl">Total</h3>
              <span className="text-xl">{mounted ? `$${total}` : ""}</span>
            </div>
            <button className="bg-black flex items-center justify-center font-bold text-lg rounded-xl w-full text-white py-5 mt-6">
              Checkout
              <ArrowForwardIcon className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-7/12">
        <h2 className="font-bold text-4xl mb-4">Your Bag</h2>
        {mounted && (
          <div>
            {cart.length == 0 ? (
              <span>There are currently no items in your bag.</span>
            ) : (
              cart.map((product) => (
                <BagItem key={product.id} product={product} />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
