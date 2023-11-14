"use client";
import Title from "../Title/Title";
import "./Cases.scss";
import Partners from "../Partners/Partners";
import Nigeria from "../Nigeria/Nigeria";
import Congo from "../Congo/Congo";
import Kenya from "../Kenya/Kenya";
export default function Cases() {
  return (
    <section className="cases container">
      <div className="cases__map"></div>
      <div className="cases__ellipses"></div>
      <Nigeria />
      <Congo />
      <Kenya />
      <div className="cases__titles">
        <Title>Cases</Title>
        <p className="cases__subtitle">
          SIFOX Technologies has successfully developed and continues to
          maintain a variety of distinctive projects across various African
          countries.
        </p>
        <Partners />
      </div>
    </section>
  );
}
