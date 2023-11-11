"use client"

import About from "./components/About/About";
import Products from "./components/Products/Products";
import Platform from "./components/Platform/Platform";
import TopBlock from "./components/TopBlock/TopBlock";
import Image from "next/image";
import MainImage from "./components/MainImage/MainImage";
import Cases from "./components/Cases/Cases";
import Contacts from "./components/Contacts/Contacts";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { PullState } from "./components/PullState/PullState";

export default function Home() {

  PullState.update(state => {
    state.hexagonStyleName = window.location.hash === "#b2c" ? "style_right" : "style_left";
  })

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
