import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "@/api/products";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div>
      <div className="bg-hero-bg rounded-3xl flex lg:flex-row-reverse sm:flex-col items-center justify-around px-10 py-8 mb-10">
        <img
          src="/images/hero.png"
          alt="shoe hero image"
          className="lg:w-1/2 sm:w-3/4 p-6"
        />
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col mb-8 sm:items-center lg:items-start">
            <span className="text-5xl text-orange font-bold">25% OFF</span>
            <span className="text-[64px] font-bold">Summer Sale</span>
            <span className="text-xl text-dark-grey">
              Discover our summer styles discount
            </span>
          </div>
          <div className="bg-black text-white text-xl px-20 py-5 rounded-xl flex items-center justify-center lg:mr-20">
            <span className="mr-2.5 font-bold font-inter">Shop Now</span>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-8">Explore our latest drops</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
