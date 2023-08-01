"use client";

import Image from "next/image";
import { useAppSelector } from "@/app/lib/hooks";
import React, { useEffect, useState } from "react";

export default function Header() {
  const { cartQuantity } = useAppSelector((state) => state);
  console.log(cartQuantity);
  console.log(cartQuantity > 0);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="px-40 h-16 flex items-center justify-between border-b border-line-light-grey w-screen">
      <div className="flex items-center">
        <Image
          className="mr-2"
          src="/sunco.svg"
          alt="Sunco Logo"
          width={24}
          height={24}
          priority
        />
        <span className="font-semibold">SUN CO.</span>
      </div>
      <div className="border border-black text-black font-bold flex justify-center items-center py-2 px-5 rounded-xl">
        <Image
          src="/shoppingbag.svg"
          alt="shopping bag"
          className="mr-2"
          width={16}
          height={24}
          priority
        />
        View Cart
        {cartQuantity > 0 && mounted ? (
          <div className="ml-2 h-6 w-6 text-white bg-orange flex items-center justify-center rounded-full text-xs">
            {cartQuantity}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
