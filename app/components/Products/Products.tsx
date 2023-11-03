import Hexagon from "../Hexagon/Hexagon";
import "./Products.scss";
import Image from "next/image";


export default function Products() {
  return (
    <section className="products">
      <div className="products__ellipses">
      </div>
      
      <Hexagon />
    </section>
  );
}
