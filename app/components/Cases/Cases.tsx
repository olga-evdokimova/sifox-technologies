"use client";
import Title from "../Title/Title";
import "./Cases.scss";
import Partners from "../Partners/Partners";
import Nigeria from "../Nigeria/Nigeria";
import Congo from "../Congo/Congo";
import Kenya from "../Kenya/Kenya";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function Cases() {
   const lang = PullState.useState((state) => state.lang);
  return (
    <section className="cases container">
      <div className="cases__map"></div>
      {/* <div className="cases__ellipses"></div> */}
      <svg
        className="cases__ellipses"
        width="2044"
        height="1857"
        viewBox="0 0 2044 1857"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <g filter="url(#filter0_f_988_6)">
            <circle
              cx="528.5"
              cy="528.5"
              r="528.5"
              transform="matrix(1 0 0 -1 400 1457)"
              fill="#309BD8"
            />
          </g>
          <g filter="url(#filter1_f_988_6)">
            <circle
              cx="267"
              cy="267"
              r="267"
              transform="matrix(1 0 0 -1 1110 1442)"
              fill="#D6C7B4"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_988_6"
            x="0"
            y="0"
            width="1857"
            height="1857"
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
              result="effect1_foregroundBlur_988_6"
            />
          </filter>
          <filter
            id="filter1_f_988_6"
            x="710"
            y="508"
            width="1334"
            height="1334"
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
              result="effect1_foregroundBlur_988_6"
            />
          </filter>
        </defs>
      </svg>

      <Nigeria />
      <Congo />
      <Kenya />
      <div className="cases__titles">
        <Title> {Dictionary[lang]["cases"]}</Title>
        <p className="cases__subtitle">
          {Dictionary[lang]["sifox_technologies_has_successfully"]}
        </p>
        <Partners />
      </div>
    </section>
  );
}
