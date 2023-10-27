import About from "./components/About/About";
import Products from "./components/Products/Products";
import Platform from "./components/Platform/Platform";
import TopBlock from "./components/TopBlock/TopBlock";
import Image from "next/image";
export default function Home() {
  return (
    <section className="main">
      <div className="main__img">
        <Image src={"/b2b/b2b-4.png"} alt="logo" fill></Image>
      </div>
      <svg
        className="main__svg"
        width="100%"
        height="100%"
        viewBox="0 0 1600 790"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <g filter="url(#filter0_f_199_470)">
            <circle cx="1415" cy="89" r="414" fill="#192A45" />
          </g>
          <g filter="url(#filter1_f_199_470)">
            <ellipse cx="1089.5" cy="526" rx="441.5" ry="414" fill="#D6C7B4" />
          </g>
          <g filter="url(#filter2_f_199_470)">
            <circle cx="374.5" cy="188.5" r="528.5" fill="#309BD8" />
          </g>
          <g filter="url(#filter3_f_199_470)">
            <circle cx="1499" cy="722" r="267" fill="#10202F" />
          </g>
          <g filter="url(#filter4_f_199_470)">
            <circle cx="1499" cy="607" r="267" fill="#1C2236" />
          </g>
          <g filter="url(#filter5_f_199_470)">
            <circle cx="195" cy="526" r="267" fill="#0B0C11" />
          </g>
          <g filter="url(#filter6_f_199_470)">
            <circle cx="823" cy="-58" r="267" fill="#D6C7B4" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_199_470"
            x="601"
            y="-725"
            width="1628"
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
              result="effect1_foregroundBlur_199_470"
            />
          </filter>
          <filter
            id="filter1_f_199_470"
            x="248"
            y="-288"
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
              result="effect1_foregroundBlur_199_470"
            />
          </filter>
          <filter
            id="filter2_f_199_470"
            x="-554"
            y="-740"
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
              result="effect1_foregroundBlur_199_470"
            />
          </filter>
          <filter
            id="filter3_f_199_470"
            x="832"
            y="55"
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
              result="effect1_foregroundBlur_199_470"
            />
          </filter>
          <filter
            id="filter4_f_199_470"
            x="832"
            y="-60"
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
              result="effect1_foregroundBlur_199_470"
            />
          </filter>
          <filter
            id="filter5_f_199_470"
            x="-472"
            y="-141"
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
              result="effect1_foregroundBlur_199_470"
            />
          </filter>
          <filter
            id="filter6_f_199_470"
            x="156"
            y="-725"
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
              result="effect1_foregroundBlur_199_470"
            />
          </filter>
        </defs>
      </svg>
   
      <TopBlock />
      <Products />
      <Platform />
      <About />
    </section>
  );
}
