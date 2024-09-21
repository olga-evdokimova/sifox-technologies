"use client";
import Title from "../Title/Title";
import "./Cases.scss";
import Partners from "../Partners/Partners";
import Nigeria from "../Nigeria/Nigeria";
import Congo from "../Congo/Congo";
import Kenya from "../Kenya/Kenya";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import Image from "next/image";
export default function Cases() {
   const lang = PullState.useState((state) => state.lang);
  return (
    <section className="cases container">
      <div className="cases__map"></div>
      <Image
        src={"/cases-ellipses.webp"}
        className="cases__ellipses"
        alt="image"
        width={2500}
        height={2000}
      />
      <Nigeria />
      <Congo />
      <Kenya />
      <div className="cases__titles">
        <Title> {Dictionary[lang]["cases"]}</Title>
        <p className="cases__subtitle">
          {Dictionary[lang]["sifox_technologies_has_successfully"]}
        </p>
        <Partners />
      </div>
    </section>
  );
}
