"use client";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Dispatch, SetStateAction } from "react";

export default function QuantityButton({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (newQuantity: number) => void;
}) {
  return (
    <div className="border border-line-light-grey rounded-xl flex flex-row items-center justify-around py-3 px-4 w-36 max-h-10">
      <button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 1}
        className={quantity <= 1 ? "text-black/20" : "text-black"}
      >
        <RemoveIcon fontSize="small" />
      </button>
      <span className="font-bold text-xl">{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>
        <AddIcon />
      </button>
    </div>
  );
}
