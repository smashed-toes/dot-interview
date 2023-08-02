import AddToCart from "@/components/AddToCart";
import MyCarousel from "@/components/MyCarousel";
import { fetchProductsById } from "@/api/products";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await fetchProductsById(id);

  if (!product) {
    return null;
  }

  return (
    <div>
      <div className="flex lg:flex-row sm:flex-col mb-4 gap-6">
        <div className="lg:w-1/2 sm:w-3/4 sm:mx-auto">
          <div>
            <MyCarousel product={product} />
          </div>
        </div>
        <div className="lg:w-1/2 rounded-2xl bg-white drop-shadow-2xl">
          <div className="border-b border-line-light-grey p-5">
            <div className="mb-2">
              <h1 className="font-bold text-2xl">{product.brand}</h1>
              <h2 className="text-dark-grey font-inter">{product.name}</h2>
            </div>
            <span className="text-lg font-medium">{`$${product.price}`}</span>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
      <div className="flex lg:flex-row-reverse sm:flex-col justify-between gap-5">
        <div className="lg:w-1/2">
          <img
            src={product.images[product.images.length - 1]}
            alt={`${product.name} image`}
          />
        </div>
        <div className="lg:w-1/2 py-10 gap-2">
          <div className="font-bold text-2xl pb-2 border-b border-line-light-grey w-full">
            Description
          </div>
          <p className="text-lg text-dark-grey">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
