import About from "./components/About/About";
import Products from "./components/Products/Products";
import Platform from "./components/Platform/Platform";
import TopBlock from "./components/TopBlock/TopBlock";
import Image from "next/image";
import Hexagon from "./components/Hexagon/Hexagon";
export default function Home() {
  return (
    <section className="main">
      <div className="main__img">
        <Image src={"/top-block-img.png"} alt="logo" fill></Image>
      </div>
      <TopBlock />
      <Hexagon/>

      <Products />
      <About />
      <Platform />
    </section>
  );
}
