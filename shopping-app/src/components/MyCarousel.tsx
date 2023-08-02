"use client";

import Carousel from "react-material-ui-carousel";
import { Product } from "./ProductType";

export default function MyCarousel({ product }: { product: Product }) {
  return (
    <div>
      <Carousel autoPlay={false} navButtonsAlwaysInvisible={true}>
        {product.images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`${product.name} image number ${idx}`}
          />
        ))}
      </Carousel>
    </div>
  );
}
