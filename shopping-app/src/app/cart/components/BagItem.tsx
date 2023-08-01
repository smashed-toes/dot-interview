import { ProductWithQuantity } from "@/components/ProductType";
import QuantityButton from "@/components/QuantityButton";
import { useAppDispatch } from "@/app/lib/hooks";
import { useState } from "react";
import {
  changeQuantity,
  quantityChangePayload,
  removeFromCart,
} from "@/app/lib/redux/slices/cartSlice";
import Image from "next/image";

export default function BagItem({ product }: { product: ProductWithQuantity }) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(product.quantity);

  const updateQuantity = (newQuantity: number) => {
    const quantityChangePayload: quantityChangePayload = {
      id: product.id,
      quantity: newQuantity,
    };
    dispatch(changeQuantity(quantityChangePayload));
  };

  return (
    <div className="flex flex-row justify-between py-6 border-b border-line-light-grey gap-x-4">
      <div className="flex flex-row">
        <div className="mr-6">
          <Image
            src={product.thumbnail}
            alt={`${product.name} thumbnail`}
            height={170}
            width={165}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-xl">{product.brand}</p>
            <p className="text-dark-grey">{product.name}</p>
          </div>
          <div className="flex items-center">
            <QuantityButton
              quantity={product.quantity}
              setQuantity={updateQuantity}
            />
            <button
              className="text-dark-grey underline font-bold ml-3"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div>
        <span className="text-lg">{`$${product.price}`}</span>
      </div>
    </div>
  );
}
