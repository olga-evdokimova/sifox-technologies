"use client";
import Hexagon, { HexagonProps } from "../Hexagon/Hexagon";
import "./Products.scss";

export type ProductsProps = { }

export default function Products(props: ProductsProps) {
  return (
    <section className="products">
      <div className="products__ellipses"></div>
      <Hexagon/>
    </section>
  );
}
