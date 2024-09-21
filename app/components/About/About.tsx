import Link from "next/link";
import "./About.scss";
import AcccentTitle from "../AcccentTitle/AccentTitle";
import Image from "next/image";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function About() {
  const lang = PullState.useState((state) => state.lang);

  return (
    <section className="about" id="about">
      <div className="about__content">
        <div className="c"></div>
        <Link href={"/"} className="header__logo">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={100}
            height={46}
            priority
          />
        </Link>
        <AcccentTitle>{Dictionary[lang]["about_the_company"]}</AcccentTitle>

        <h4 className="about__title">
          {Dictionary[lang]["providing_cutting_edge"]}
        </h4>
        <p className="about__text">
          {Dictionary[lang]["with_an_international"]}
        </p>
        <p className="about__text">{Dictionary[lang]["backed_by_unmatched"]}</p>
      </div>
    </section>
  );
}
