//@ts-nocheck
"use client";
import "./TopBlock.scss";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { PullState } from "../PullState/PullState";

export type TopBlockProps = {

}

export default function TopBlock(props: TopBlockProps) {

  return (
    <section className="top-block container">
      <h1>
        Connecting the World:
        <br />
        Empowering Telecoms for Seamless
        <br />
        Data and Voice Access
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
            Products
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
            Products
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={1500}>
            About
          </ScrollLink>
        </li>
      </ul>
    </section>
  );
}
