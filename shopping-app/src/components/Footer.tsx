"use client";

import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import { YouTube } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className="px-40 h-[72px] bg-black flex items-center justify-between w-screen absolute bottom-0">
      <div className="flex items-center">
        <Image
          className="mr-2"
          src="/sunco.svg"
          alt="Sunco Logo"
          width={24}
          height={24}
          priority
        />
        <span className="font-semibold text-white">SUN CO.</span>
      </div>
      <span className="text-footer-text">
        © 2023 shoe time. All rights reserved
      </span>
      <div className="flex justify-between">
        <div className="w-8 h-8 mx-1 rounded-full bg-white/10 text-white flex items-center justify-center">
          <InstagramIcon fontSize="small" />
        </div>
        <div className="w-8 h-8 mx-1 rounded-full bg-white/10 text-white flex items-center justify-center">
          <Twitter fontSize="small" />
        </div>
        <div className="w-8 h-8 mx-1 rounded-full bg-white/10 text-white flex items-center justify-center">
          <YouTube fontSize="small" />
        </div>
      </div>
    </div>
  );
}
