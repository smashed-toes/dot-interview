"use client";

import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pb-[72px]">
        <Header />
        <div className="px-40 my-6">{children}</div>
      </div>
      <Footer />
    </>
  );
}
