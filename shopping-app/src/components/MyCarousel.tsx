"use client";

import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Product } from "./ProductType";
import { Button } from "@mui/material";

export default function MyCarousel({ product }: { product: Product }) {
  return (
    <div>
      <Carousel autoPlay={false} navButtonsAlwaysInvisible={true}>
        {product.images.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            alt={`${product.name} image number ${idx}`}
            width={500}
            height={300}
          />
        ))}
      </Carousel>
    </div>
  );
}
