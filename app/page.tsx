"use client";
import About from "./components/About/About";
import Products from "./components/Products/Products";``
import Platform from "./components/Platform/Platform";
import TopBlock from "./components/TopBlock/TopBlock";
import MainImage from "./components/MainImage/MainImage";
import Cases from "./components/Cases/Cases";
import Contacts from "./components/Contacts/Contacts";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Performance from "./components/Performance/Performance";
import { useEffect } from "react";
import Partners from "./components/Partners/Partners";
import {useSearchParams} from "next/navigation";
import { PullState } from "./components/PullState/PullState";
import Form from "./components/Form/Form";

export default function Home() {
  const params = useSearchParams();

  // useEffect(() => {
    const pkParam = params.get("pk");
    
    if (pkParam) {
      PullState.update((state) => {
        state.hexagonStyleName =
          pkParam === "B2C" ? "style_right_instant" : "style_left_instant";
      });
      const hexagon = document.getElementById("hexagon");
      hexagon?.scrollIntoView({ behavior: "smooth"});
    }
  // }, [params]);

  return (
    <section className="main">
      <MainImage />
      <TopBlock />
      <Products />
      <Platform />
      <Cases />
      <Partners />
      <Performance />
      <About />
       <Form />
      <Contacts />
      <ScrollToTopButton />
    </section>
  );
}
