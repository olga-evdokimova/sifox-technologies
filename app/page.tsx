import Products from "./components/Products/Products";
import SolutionsPlatform from "./components/SolutionsPlatform/SolutionsPlatform";
import TopBlock from "./components/TopBlock/TopBlock";
import Image from "next/image";
export default function Home() {
  return (
    <section className="main">
      <div className="main__img">
        <Image src={"/top-block-img.png"} alt="logo" fill></Image>
      </div>
      <TopBlock />
      <Products />
      <SolutionsPlatform />
    </section>
  );
}
