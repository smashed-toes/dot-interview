import { Product } from "./ProductType";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="w-full">
        <Image
          className="mb-2"
          src={product.thumbnail}
          alt={`${product.name} thumbnail image`}
          width={261}
          height={284}
        />
        <div className="mb-1">
          <h1 className="font-bold text-2xl">{product.brand}</h1>
          <h2 className="text-dark-grey">{product.name}</h2>
        </div>
        <span className="text-lg font-medium">{`$${product.price}`}</span>
      </div>
    </Link>
  );
}
