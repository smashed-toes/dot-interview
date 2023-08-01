import AddToCart from "@/components/AddToCart";
import { data } from "../../../../public/data/data";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import MyCarousel from "@/components/MyCarousel";

export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = data.products.find((product) => product.id === id);

  if (!product) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-row-reverse mb-4">
        <div className="w-1/2 rounded-2xl bg-white drop-shadow-2xl">
          <div className="border-b border-line-light-grey p-5">
            <div className="mb-2">
              <h1 className="font-bold text-2xl">{product.brand}</h1>
              <h2 className="text-dark-grey">{product.name}</h2>
            </div>
            <span className="text-lg font-medium">{`$${product.price}`}</span>
          </div>
          <AddToCart product={product} />
        </div>
        <div className="w-1/2">
          <MyCarousel product={product} />
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between gap-5">
        <div className="w-1/2">
          <img
            src={product.images[product.images.length - 1]}
            alt={`${product.name} image`}
          />
        </div>
        <div className="w-1/2 py-10 gap-2">
          <div className="font-bold text-2xl pb-2 border-b border-line-light-grey w-full">
            Description
          </div>
          <p className="text-lg text-dark-grey">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
