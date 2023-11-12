"use client";

import About from "./components/About/About";
import Products from "./components/Products/Products";
import Platform from "./components/Platform/Platform";
import TopBlock from "./components/TopBlock/TopBlock";
import Image from "next/image";
import MainImage from "./components/MainImage/MainImage";
import Cases from "./components/Cases/Cases";
import Contacts from "./components/Contacts/Contacts";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { useEffect, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { PullState } from "./components/PullState/PullState";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Home() {
  const params = useSearchParams();

  useEffect(() => {
    console.log(params);
    const pkParam = params.get("pk");
    console.log(pkParam);
    
    if (pkParam) {
      PullState.update((state) => {
        state.hexagonStyleName =
          pkParam === "B2C" ? "style_right_instant" : "style_left_instant";
      });
      
      //  const hexagon = document.getElementById("hexagon");
      // console.log("top", hexagon?.offsetTop)
   //   window.scroll({top: hexagon?.offsetTop, behavior: 'instant'});
      // hexagon?.scrollIntoView({ behavior: "instant", block: "nearest" });
    }
  }, [params]);

  return (
    <section className="main">
      <MainImage />
      <TopBlock />
      <Products />
      <Platform />
      <Cases />
      <About />
      <Contacts />
      <ScrollToTopButton />
    </section>
  );
}
