import About from "./components/About/About";
import Products from "./components/Products/Products";
import Platform from "./components/Platform/Platform";
import TopBlock from "./components/TopBlock/TopBlock";
import Image from "next/image";
import MainImage from "./components/MainImage/MainImage";
export default function Home() {
  return (
    <section className="main">
      <MainImage />
      <TopBlock />
      <Products />
      <Platform />
      <About />
    </section>
  );
}
