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
        {/* <div className="about__ellipses"></div> */}
        <svg
          className="about__ellipses"
          width="1557"
          height="1557"
          viewBox="0 0 1557 1557"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_310_396)">
            <circle
              cx="378.5"
              cy="378.5"
              r="378.5"
              transform="matrix(1 0 0 -1 400 1157)"
              fill="#309BD8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_310_396"
              x="0"
              y="0"
              width="1557"
              height="1557"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_310_396"
              />
            </filter>
          </defs>
        </svg>

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
