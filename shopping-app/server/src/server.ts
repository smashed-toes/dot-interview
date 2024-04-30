import { Request, Response } from "express";
const express = require("express");

const server = express();
const PORT = 5001;

interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
}

const data: Product[] = [
  {
    id: "1",
    brand: "Off-White",
    name: 'Out of office "ooo" sneakers',
    price: 775,
    thumbnail: "/images/thumbnail-ooo.png",
    images: [
      "/images/image1-1.png",
      "/images/image1-2.png",
      "/images/image1-3.png",
      "/images/image1-4.png",
    ],
    description:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
  },
  {
    id: "2",
    brand: "Nike",
    name: "Nike Gamma Force",
    price: 200,
    thumbnail: "/images/thumbnail-gamma.png",
    images: [
      "/images/image2-1.png",
      "/images/image2-2.png",
      "/images/image2-3.png",
      "/images/image2-4.png",
    ],
    description:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
  },
  {
    id: "3",
    brand: "Nike",
    name: "Cosmic Unity 3",
    price: 160,
    thumbnail: "/images/thumbnail-cosmic.png",
    images: [
      "/images/image3-1.png",
      "/images/image3-2.png",
      "/images/image3-3.png",
      "/images/image3-4.png",
    ],
    description:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
  },
  {
    id: "4",
    brand: "adidas",
    name: "DAILY 3.0 SHOES",
    price: 98.99,
    thumbnail: "/images/thumbnail-daily.png",
    images: [
      "/images/image4-1.png",
      "/images/image4-2.png",
      "/images/image4-3.png",
      "/images/image4-4.png",
    ],
    description:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
  },
];

server.get("/api/products", (req: Request, res: Response) => {
  res.json(data);
});

server.get("/api/products/:id", (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = data.find((item) => item.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
