"use client";
import Image from "next/image";
import "./MainImage.scss";
export default function MainImage() {
  return (
    <div>
      <div className="main__img">
        <Image
          src={"/main-img.webp"}
          alt="background"
          fill
          sizes="500"
          priority
        ></Image>
      </div>
      {/* <div className="main__ellipses">
      </div> */}
      <svg
        className="main__ellipses"
        width="2720"
        height="2129"
        viewBox="0 0 2720 2129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <g filter="url(#filter0_f_199_470)">
            <ellipse cx="1643.5" cy="1266" rx="441.5" ry="414" fill="#D6C7B4" />
          </g>
          <g filter="url(#filter1_f_199_470)">
            <circle cx="928.5" cy="928.5" r="528.5" fill="#309BD8" />
          </g>
          <g filter="url(#filter2_f_199_470)">
            <circle cx="2053" cy="1462" r="267" fill="#10202F" />
          </g>
          <g filter="url(#filter3_f_199_470)">
            <circle cx="749" cy="1266" r="267" fill="#0B0C11" />
          </g>
          <g filter="url(#filter4_f_199_470)">
            <circle cx="1377" cy="682" r="267" fill="#D6C7B4" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_199_470"
            x="802"
            y="452"
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
            id="filter1_f_199_470"
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
              result="effect1_foregroundBlur_199_470"
            />
          </filter>
          <filter
            id="filter2_f_199_470"
            x="1386"
            y="795"
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
            id="filter3_f_199_470"
            x="82"
            y="599"
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
            x="710"
            y="15"
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
    </div>
  );
}
