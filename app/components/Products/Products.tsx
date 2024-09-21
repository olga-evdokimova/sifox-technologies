"use client";
import Hexagon, { HexagonProps } from "../Hexagon/Hexagon";
import "./Products.scss";
import Image from "next/image";
export type ProductsProps = {};

export default function Products(props: ProductsProps) {
  return (
    <section className="products" id="hexagon">
      <Image
        src={"/products-ellipses.webp"}
        className="products__ellipses"
        alt="image"
        width={2500}
        height={2000}
      />

      <Hexagon />
    </section>
  );
}
