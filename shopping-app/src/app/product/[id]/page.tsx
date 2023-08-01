import AddToCart from "@/components/AddToCart";
import { data } from "../../../../public/data/data";

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
      <div>
        <div className="w-6/12 rounded-2xl bg-white drop-shadow-2xl">
          <div className="border-b border-line-light-grey p-5">
            <div className="mb-2">
              <h1 className="font-bold text-2xl">{product.brand}</h1>
              <h2 className="text-dark-grey">{product.name}</h2>
            </div>
            <span className="text-lg font-medium">{`$${product.price}`}</span>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
