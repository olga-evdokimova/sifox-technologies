"use client";
import "./TopBlock.scss";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";

export type TopBlockProps = {};

export default function TopBlock(props: TopBlockProps) {
  const lang = PullState.useState((state) => state.lang);

  return (
    <section className="top-block container">
      <h1>
        {Dictionary[lang]["connect_the_world"]}:
        <br />
        {Dictionary[lang]["empowering_telecoms_for_seamless"]}
        <br />
        {Dictionary[lang]["data_and_voice-access"]}
      </h1>

      <ul className="top-block__list">
        <li>
          <ScrollLink
            to="b2b"
            smooth={true}
            duration={1500}
            onClick={() => {
              PullState.update((state) => {
                state.hexagonStyleName = "style_left";
              });
            }}
          >
            B2B
            <br />
            {Dictionary[lang]["products"]}
       
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="b2c"
            smooth={true}
            duration={1500}
            onClick={() => {
              PullState.update((state) => {
                state.hexagonStyleName = "style_right";
              });
            }}
          >
            B2C
            <br />
            {Dictionary[lang]["products"]}
       
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={1500}>
            {Dictionary[lang]["about"]}
         
          </ScrollLink>
        </li>
      </ul>
    </section>
  );
}
