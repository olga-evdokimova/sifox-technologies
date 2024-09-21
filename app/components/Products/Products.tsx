"use client";
import Hexagon, { HexagonProps } from "../Hexagon/Hexagon";
import "./Products.scss";

export type ProductsProps = { }

export default function Products(props: ProductsProps) {
  return (
    <section className="products" id="hexagon">
      {/* <div className="products__ellipses"></div> */}
      <svg
        className="products__ellipses"
        width="2485"
        height="2080"
        viewBox="0 0 2485 2080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <g filter="url(#filter0_f_199_506)">
            <ellipse
              cx="441.5"
              cy="414"
              rx="441.5"
              ry="414"
              transform="matrix(1 0 0 -1 1202 1228)"
              fill="#D6C7B4"
            />
          </g>
          <g filter="url(#filter1_f_199_506)">
            <circle
              cx="528.5"
              cy="528.5"
              r="528.5"
              transform="matrix(1 0 0 -1 400 1680)"
              fill="#309BD8"
            />
          </g>
          <g filter="url(#filter2_f_199_506)">
            <circle
              cx="267"
              cy="267"
              r="267"
              transform="matrix(1 0 0 -1 482 1081)"
              fill="#0B0C11"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_199_506"
            x="802"
            y="0"
            width="1683"
            height="1628"
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
              result="effect1_foregroundBlur_199_506"
            />
          </filter>
          <filter
            id="filter1_f_199_506"
            x="0"
            y="223"
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
              result="effect1_foregroundBlur_199_506"
            />
          </filter>
          <filter
            id="filter2_f_199_506"
            x="82"
            y="147"
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
              result="effect1_foregroundBlur_199_506"
            />
          </filter>
        </defs>
      </svg>

      <Hexagon />
    </section>
  );
}
