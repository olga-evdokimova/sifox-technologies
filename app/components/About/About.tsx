import Link from "next/link";
import "./About.scss";
import AcccentTitle from "../AcccentTitle/AccentTitle";
import Image from "next/image";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
export default function About() {
  const lang = PullState.useState((state) => state.lang);

  return (
    <section className="about" id="about">
      <div className="about__content container">
        <Image
          className="pb-[20%] laptop-sm:pb-[100px]"
          src={"/logo.svg"}
          alt="logo SIFOX Technologies"
          width={100}
          height={46}
          priority
        />
        <div className="about__ellipses"></div>
        <AcccentTitle>{Dictionary[lang]["about_the_company"]}</AcccentTitle>
        <p className="font-semibold text-[35px] laptop-sm:text-[25px] pt-[20px] pb-[50px] laptop-sm:pb-[30px]">
          {Dictionary[lang]["SIFOX_Technologies_is_a_company"]}
        </p>
        <AcccentTitle>
          {Dictionary[lang]["We_offer_product_Suites_for_the"]} 
        </AcccentTitle>
        <div>
          <ScrollLink
            className="text-[#0A0714] text-[20px] laptop-sm:text-[14px] bg-[var(--color-text-white)] rounded-[10px] inline-flex items-center justify-center py-[10px] px-[20px] laptop-sm:px-[10px] mr-[10px] mt-[20px] laptop-sm:mt-[10px] mb-[50px] laptop-sm:mb-[30px]"
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
            {Dictionary[lang]["Consumer_and_Digital_and"]} 
          </ScrollLink>
          <ScrollLink
            className="text-[#0A0714] text-[20px] laptop-sm:text-[14px] bg-[var(--color-text-white)] rounded-[10px] inline-flex items-center justify-center py-[10px] px-[20px] laptop-sm:px-[8px]"
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
            {Dictionary[lang]["Enterprise_segments"]} 
          </ScrollLink>
        </div>
        <div className="flex gap-[50px] text-[20px] laptop-sm:text-[16px] laptop-sm:flex-col laptop-sm:gap-[20px]">
          <p className="">
            {Dictionary[lang]["Our_mission_at_SIFOX_Technologies"]} 
          </p>
          <p className="">{Dictionary[lang]["We_aim_to_achieve_this_by"]} </p>
        </div>
      </div>
    </section>
  );
}
