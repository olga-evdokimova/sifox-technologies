"use client";
import Title from "../Title/Title";
import "./Cases.scss";
import Nigeria from "../Nigeria/Nigeria";
import Congo from "../Congo/Congo";
import Kenya from "../Kenya/Kenya";
import Zimbabwe from "../Zimbabwe/Zimbabwe";
import Burundi from "../Burundi/Burundi";
import EquatorialGuinea from "../EquatorialGuinea/Guinea";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function Cases() {
  const lang = PullState.useState((state) => state.lang);
  return (
    <section className="cases container">
      <div className="cases__map"></div>
      <div className="cases__ellipses"></div>

      <Nigeria />
      <Congo />
      <Kenya />
      <Zimbabwe />
      <Burundi />
      <EquatorialGuinea />

      <div className="cases__titles">
        <Title> {Dictionary[lang]["cases"]}</Title>
        <p className="cases__subtitle">
          {Dictionary[lang]["sifox_technologies_has_successfully"]}
        </p>
      </div>
    </section>
  );
}
