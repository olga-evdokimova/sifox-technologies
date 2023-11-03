"use client";
import { useState } from "react";
import Hexagon from "../Hexagon/Hexagon";
import "./Products.scss";
import Image from "next/image";

export default function Products() {
  const [position, setPosition] = useState<"left" | "right">("left");
  
  return (
    <section className="products">
      <div className="products__ellipses"></div>

      <Hexagon
        position={position}
        toLeft={() => {
          setPosition("left");
          console.log("toLeft");
        }}
        toRight={() => {
          setPosition("right");
          console.log("toRight");
        }}
      />
    </section>
  );
}
