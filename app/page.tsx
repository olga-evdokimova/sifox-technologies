"use client";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Platform from "./components/Platform/Platform";
import TopBlock from "./components/TopBlock/TopBlock";
import MainImage from "./components/MainImage/MainImage";
import Cases from "./components/Cases/Cases";
import Contacts from "./components/Contacts/Contacts";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Performance from "./components/Performance/Performance";
import Partners from "./components/Partners/Partners";
import { PullState } from "./components/PullState/PullState";
import Form from "./components/Form/Form";

// Создаем отдельный компонент для работы с searchParams
function SearchParamsHandler() {
  const params = useSearchParams();

  useEffect(() => {
    const pkParam = params.get("pk");
    
    if (pkParam) {
      PullState.update((state) => {
        state.hexagonStyleName =
          pkParam === "B2C" ? "style_right_instant" : "style_left_instant";
      });
      
      // Добавляем проверку наличия элемента на странице
      const hexagon = document.getElementById("hexagon");
      if (hexagon) {
        hexagon.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [params]); // 👍 useEffect теперь не закомментирован

  return null; // Этот компонент ничего не рендерит, только выполняет логику
}

// Основной компонент страницы
export default function Home() {
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
      
      {/* Оборачиваем компонент с useSearchParams в Suspense */}
      <Suspense fallback={null}>
        <SearchParamsHandler />
      </Suspense>
    </section>
  );
}
