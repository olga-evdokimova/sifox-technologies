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
        <span>{Dictionary[lang]["connect_the_world"]}:</span>
        {Dictionary[lang]["empowering_telecoms_for_seamless"]}
 
      </h1>

      <ul className="top-block__list">
        <li>
          <hr className="hr-1" />
          <hr className="hr-2" />
          <hr className="hr-3" />
          <hr className="hr-4" />
          <ScrollLink
            to="b2b"
            smooth={true}
            duration={1500}
            href="#b2b"
            onClick={() => {
              PullState.update((state) => {
                state.hexagonStyleName = "style_left";
              });
            }}
          >
            <span>B2B</span>
            <br />
            {Dictionary[lang]["products"]}
          </ScrollLink>
        </li>
        <li>
          <hr className="hr-1" />
          <hr className="hr-2" />
          <hr className="hr-3" />
          <hr className="hr-4" />
          <ScrollLink
            to="b2c"
            href="#b2c"
            smooth={true}
            duration={1500}
            onClick={() => {
              PullState.update((state) => {
                state.hexagonStyleName = "style_right";
              });
            }}
          >
            <span> B2C</span>
            <br />
            {Dictionary[lang]["products"]}
          </ScrollLink>
        </li>
        <li>
          <hr className="hr-1" />
          <hr className="hr-2" />
          <hr className="hr-3" />
          <hr className="hr-4" />
          <ScrollLink to="about" smooth={true} duration={1500} href="about">
            {Dictionary[lang]["about"]}
          </ScrollLink>
        </li>
      </ul>
    </section>
  );
}
