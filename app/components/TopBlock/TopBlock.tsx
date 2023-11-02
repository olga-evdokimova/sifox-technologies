//@ts-nocheck
"use client";
import "./TopBlock.scss";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function TopBlock() {
  const scrollToAbout = () => {
    scroll.scrollTo( {
      smooth: true,
      duration: 500,
      offset: -100, 
    });
  };
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
          <Link href="#">
            B2B
            <br />
            Products
          </Link>
        </li>
        <li>
          <ScrollLink
            to="b2b"
            smooth={true}
            duration={1500}
            onClick={scrollToAbout}
          >
            B2C
            <br />
            Products
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={1500}
            onClick={scrollToAbout}
          >
            About
          </ScrollLink>
        </li>
      </ul>
    </section>
  );
}
