"use client";
import Title from "../Title/Title";
import "./Cases.scss";
import Partners from "../Partners/Partners";
import CasesSvgMap from "../CasesSvgMap/CasesSvgMap";
import Nigeria from "../Nigeria/Nigeria";
import Congo from "../Congo/Congo";
import Kenya from "../Kenya/Kenya";
export default function Cases() {
  return (
    <section className="cases container">
      <CasesSvgMap />
      <Nigeria />
      <Congo />
      <Kenya />
      <div className="cases__titles">
        <Title>Cases</Title>
        <p className="cases__subtitle">
          Advantages of working with us Advantages of working with usAdvantages
          of working
        </p>
        <Partners />
      </div>
    </section>
  );
}
