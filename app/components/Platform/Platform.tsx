import Title from "../Title/Title";
import "./Platform.scss";
import Image from "next/image";
export default function Platform() {
  return (
    <section className="platform container">
      <svg className="platform__svg"
        width="2485"
        height="2080"
        viewBox="0 0 2485 2080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <g filter="url(#filter0_f_650_15)">
            <ellipse
              cx="441.5"
              cy="414"
              rx="441.5"
              ry="414"
              transform="matrix(1 0 0 -1 1202 1228)"
              fill="#D6C7B4"
            />
          </g>
          <g filter="url(#filter1_f_650_15)">
            <circle
              cx="528.5"
              cy="528.5"
              r="528.5"
              transform="matrix(1 0 0 -1 400 1680)"
              fill="#309BD8"
            />
          </g>
          <g filter="url(#filter2_f_650_15)">
            <circle
              cx="267"
              cy="267"
              r="267"
              transform="matrix(1 0 0 -1 1110 1665)"
              fill="#D6C7B4"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_650_15"
            x="802"
            y="0"
            width="1683"
            height="1628"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_650_15"
            />
          </filter>
          <filter
            id="filter1_f_650_15"
            x="0"
            y="223"
            width="1857"
            height="1857"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_650_15"
            />
          </filter>
          <filter
            id="filter2_f_650_15"
            x="710"
            y="731"
            width="1334"
            height="1334"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_650_15"
            />
          </filter>
        </defs>
      </svg>

      <div className="platform__wrap">
        <div className="platform__card">
          <Title>40%</Title>
          <p className="platform__card-text">
            In Sub-Saharan Africa, 40% of the adult population are now connected
            to mobile internet services.
          </p>
        </div>
        <div className="platform__card">
          <Title>61%</Title>
          <p className="platform__card-text">
            By 2025, smartphones will account for 61% of total connections, on
            average, in Sub-Saharan Africa
          </p>
        </div>
        <div className="platform__card">
          <Title>11 GB</Title>
          <p className="platform__card-text">
            Mobile data consumption in Sub-Saharan Africa will nearly quadruple
            to reach 11GB per by 2027, though it will continue to lag behind the
            global average by a wide margin
          </p>
        </div>
        <div className="platform__card">
          <Title>613 million</Title>
          <p className="platform__card-text">
            The total number of&nbsp;mobile service subscribers
            in&nbsp;Sub-Saharan Africa will reach 613 million by&nbsp;2025 (50%
            of&nbsp;the region&rsquo;s population)
          </p>
        </div>
        <div className="platform__card">
          <Title>$57,4 billion</Title>
          <p className="platform__card-text">
            Mobile revenue will grow steadily and reach $57,4 billion by 2025
            thanks in part to rising data usage
          </p>
        </div>
      </div>
    </section>
  );
}
