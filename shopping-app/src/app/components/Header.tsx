"use client";

import Image from "next/image";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <div className="px-40 h-16 flex items-center justify-between border-b-[1px] border-line-light-grey w-screen">
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
      <Button
        variant="outlined"
        style={{
          color: "black",
          borderColor: "black",
          fontFamily: "Inter, sans-serif",
          fontWeight: "bold",
        }}
        startIcon={
          <Image
            src="/shoppingbag.svg"
            alt="shopping bag"
            width={16}
            height={24}
            priority
          />
        }
      >
        View Cart
      </Button>
    </div>
  );
}
