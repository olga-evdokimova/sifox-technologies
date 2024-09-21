"use client";
import { useState } from "react";
import Image from "next/image";
import "./Nigeria.scss";
import Link from "next/link";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import SvgArrow from "../SvgArrow";

export default function Nigeria() {
  const lang = PullState.useState((state) => state.lang);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="nigeria">
        <Svg />
        <h6 className="nigeria__title" onClick={handleButtonClick}>
          <Image
            src={"/nigeria.png"}
            alt="image"
            width={41}
            height={22}
          ></Image>
          Nigeria
        </h6>

        <button
          className="nigeria__btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          i
          {showTooltip && (
            <div className="nigeria__tooltip">
              <p>{Dictionary[lang]["data_sponsorship_or_gifting"]}</p>
              <p>{Dictionary[lang]["data_voice_distribution"]}</p>
            </div>
          )}
        </button>
      </div>
      {showModal && (
        <div className="modal-nigeria">
          <button className="modal-nigeria__close" onClick={handleCloseModal}>
            <svg
              className="modal-nigeria__close-svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41 1L21 21M1 41L21 21M21 21L1 1L41 41"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Image
            className="modal-nigeria__image"
            src={"/nigeria-modal.png"}
            alt="image"
            width={955}
            height={769}
          ></Image>
          <div className="modal-nigeria__content">
            <div>
              <Image
                src={"/nigeria.png"}
                alt="image"
                width={41}
                height={22}
              ></Image>
              Nigeria
            </div>
            <Link href={`/products/${lang}/b2b-data-sponsorship-or-gifting`}>
              {Dictionary[lang]["data_sponsorship_or_gifting"]}
              <SvgArrow />
            </Link>

            <Link href={`/products/${lang}/b2b-data-voice-distribution`}>
              {Dictionary[lang]["data_voice_distribution"]}
              <SvgArrow />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
const Svg = () => {
  return (
    <>
      <svg
        className="nigeria__svg"
        width="189"
        height="152"
        viewBox="0 0 189 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M185.383 24.406C185.585 23.3979 184.548 23.8876 183.022 23.5996C179.855 24.2044 179.423 23.2827 179.797 22.1594C179.855 21.9578 179.912 21.5546 179.941 20.9785C179.682 21.3242 179.25 21.641 178.559 21.9002C176.716 22.6203 177.061 22.217 176.255 21.0937C175.449 19.9704 175.852 20.2585 174.93 20.0281C174.009 19.7688 174.729 13.9795 174.815 13.0866C174.931 12.2225 174.412 12.7698 172.598 12.5106C170.813 12.2514 169.459 9.63029 168.192 8.56459C166.896 7.49889 166.666 6.26038 166.954 4.96427C167.069 4.53223 166.954 3.95618 166.724 3.35133C165.917 3.63935 165.658 4.1578 164.996 4.70505C163.671 5.74195 161.857 5.91477 160.389 6.69244C159.381 7.21089 158.747 8.04616 157.826 8.62221C156.847 9.19826 155.551 9.25586 154.802 10.1487C154.197 10.8688 154.197 11.6465 153.247 12.1361C152.412 12.5394 151.433 12.3953 150.483 12.3953C148.582 12.3953 147.056 11.8481 145.472 10.9264C144.493 10.3216 143.6 9.68791 142.477 9.48629C141.182 9.25587 140.203 8.88143 138.993 8.30538C137.841 7.78693 136.315 7.61413 135.077 7.55653C133.781 7.49892 132.572 7.98856 131.305 8.04616C130.182 8.10377 129.145 7.47012 128.022 7.47012C126.64 7.47012 125.142 7.32611 123.789 7.47012C121.514 7.72934 119.095 9.02546 117.108 10.0336C115.265 10.984 113.71 11.3009 112.53 13.173C111.896 14.1523 111.263 14.9588 110.197 15.4196C108.815 16.0533 107.548 16.0245 106.022 16.0245C104.582 16.0245 102.998 16.2261 101.76 15.3908C101.098 14.93 100.925 14.7571 100.09 14.7283C99.3411 14.7283 98.5636 14.7283 97.8149 14.7283C96.4615 14.7283 94.8489 14.8436 93.8411 13.8067C93.15 13.0866 92.9484 12.6258 91.9406 12.4242C90.5296 12.1361 89.5217 11.5889 88.3699 10.696C86.7285 9.39988 84.5976 8.76621 82.5531 8.88142C81.5164 8.93903 80.5662 9.45749 79.6735 9.97593C78.2049 10.84 76.6211 11.5889 75.0086 12.1937C73.6551 12.7122 72.7049 12.6834 71.3227 12.6546C70.3724 12.6546 69.6813 13.1442 68.7886 13.0002C67.4928 12.8274 66.4561 12.1073 65.4483 11.3297C64.4116 10.5232 63.1446 9.74552 62.2519 8.76623C61.1001 7.52772 60.4666 6.11639 59.0844 5.0795C57.731 4.07141 56.464 2.86169 54.7074 2.86169C53.3252 2.86169 51.6262 2.7177 50.3304 2.25686C48.9482 1.73841 48.0844 0.787921 46.5006 0.586303C45.4927 0.471093 44.1105 0.384658 43.2466 0.874303C42.9011 1.04712 42.6131 1.45035 42.2963 1.59437C41.6628 1.85359 40.7126 1.68077 40.0503 1.68077C37.1707 1.68077 34.0895 1.36394 31.2387 1.76718C30.1157 1.91119 28.9926 2.22805 28.4743 3.23614C28.2439 3.69698 28.1 4.10019 27.7256 4.47463C26.8617 5.3099 25.4219 5.71314 24.3565 6.23159C23.6654 6.57722 23.5502 7.12449 23.3198 7.87336C22.8591 9.4575 22.9167 11.0705 22.6287 12.6546C22.4271 13.7203 22.2832 14.8724 21.7936 15.8805C21.1025 17.2342 20.1523 18.1271 19.0292 19.1063C17.9638 20.0568 16.8695 20.6041 16.1496 21.8138C15.6025 22.7355 15.6025 23.1387 15.6889 24.0892C15.8617 25.8749 15.3146 27.6031 15.6313 29.3889C15.7753 30.1666 15.9192 31.1746 15.7753 31.9811C15.7465 32.2403 15.6313 32.4996 15.5449 32.7876C15.7177 33.5076 15.3721 34.4582 15.1417 34.9766C14.3643 36.7624 12.6077 39.2394 13.9611 41.2268C14.6522 42.2349 15.7465 43.3005 16.5528 44.2798C17.503 45.4031 17.3303 45.8928 17.2727 47.3905C17.2151 48.6866 17.4167 49.2339 18.1078 50.2419C18.9141 51.3652 19.4324 52.2293 18.7988 53.6118C18.3669 54.5911 17.7334 56.2617 16.4376 56.1177C15.4873 56.0025 14.7386 54.3895 14.1915 55.8009C13.2413 58.2779 17.3591 58.0763 15.7465 60.6685C15.4873 61.1006 14.969 61.3886 14.7674 61.907C14.5371 62.4543 14.825 63.0879 14.6234 63.5776C14.2203 64.6433 12.4637 64.5857 11.5135 65.3057C10.2752 66.2274 10.8224 66.8322 10.4192 68.0131C10.0737 69.0212 8.80667 68.9636 8.20196 69.7413C7.10771 71.1814 8.46111 73.0824 7.82759 74.753C7.39566 75.8763 6.50298 75.7899 5.35114 76.0203C2.21238 76.6252 1.5501 78.6989 1.5501 81.7808C1.5501 84.4307 1.34851 87.1381 1.34851 89.9031C1.34851 92.1209 0.628592 95.8365 1.69404 97.7951C2.18357 98.6879 2.61553 99.2064 2.38516 100.358C2.21239 101.194 1.63646 101.971 1.75165 102.922C1.75165 103.095 1.72285 103.268 1.75165 103.44C1.80924 103.7 2.27 103.786 2.27 103.959C2.27 104.535 1.75165 104.852 1.57888 105.341C1.29092 106.148 1.17575 107.847 2.27 107.991C2.29879 109.258 1.72287 110.036 1.5501 111.246C1.37732 112.398 1.72285 113.579 1.66526 114.731C1.60767 115.653 1.57888 116.603 1.57888 117.525C2.8459 117.438 3.88255 117.438 4.54486 117.525C9.15221 117.928 11.6287 118.965 11.7438 117.208C11.8302 115.48 12.9821 113.924 13.5868 114.961C14.1915 115.969 11.3407 116.286 13.0685 117.006C14.825 117.726 20.1523 116.891 21.5921 115.969C23.0319 115.048 25.1915 116.488 24.1549 116.69C23.1182 116.891 21.0737 117.496 23.9533 117.726C26.8329 117.928 33.4848 121.615 35.6445 124.61C37.8042 127.577 37.1707 127.174 38.0057 126.655C37.8042 127.577 37.4874 130.544 39.0424 130.659C39.6471 132.819 40.7989 133.539 41.6052 133.424C42.3827 133.337 44.4849 132.416 44.744 132.301C44.5712 132.387 43.7362 132.934 44.744 133.222C44.5425 134.144 42.1811 133.136 41.778 134.144C41.3749 135.181 45.3775 145.521 48.7467 148.113C52.1446 150.677 52.5477 150.792 54.7938 150.561C56.7519 150.389 56.6943 148.977 56.6655 148.603L57.0399 150.36C57.0399 150.36 58.5661 151.224 58.6813 150.619C58.7964 150.043 59.1996 150.763 60.2074 149.928C61.2441 149.121 61.2441 147.364 61.2441 147.364C61.2441 147.364 61.2441 149.813 61.964 150.043C62.6839 150.245 62.8854 147.681 62.8854 147.681C62.8854 147.681 63.0006 150.129 64.0085 149.841C65.0451 149.525 64.5268 150.101 65.0451 149.525C65.3331 149.236 65.3043 148.545 65.2179 147.998C65.3907 148.689 65.7363 149.496 66.2834 149.467C67.2048 149.409 68.3855 148.43 68.2415 147.768C68.0975 147.105 68.9038 148.372 69.9405 148.545C70.9771 148.689 71.4667 149.87 72.8201 148.027C73.7991 146.846 74.4038 146.788 74.4038 146.788C74.4038 146.788 73.2232 148.43 74.4038 148.632C75.5844 148.833 76.6211 148.315 76.6211 148.315C76.6211 148.315 75.4405 147.71 77.7442 147.969C80.0478 148.228 89.1473 146.99 88.8882 145.751C88.629 144.513 88.5715 143.793 89.6945 143.764C90.5008 143.735 91.3071 144.426 91.3935 145.118C92.5741 142.842 93.7547 140.481 93.9851 139.645C94.5034 137.888 95.4249 135.44 96.4615 133.683C97.4982 131.926 96.26 128.959 97.0663 126.713C97.9013 124.466 98.3045 124.351 100.147 122.825C101.99 121.298 110.312 115.249 110.831 113.694C111.349 112.168 115.035 108.654 117.281 108.97C119.527 109.287 120.765 110.295 121.687 110.209C122.608 110.094 122.81 107.242 124.134 106.724C125.459 106.205 127.734 106.522 127.734 109.806C127.734 113.089 129.778 111.246 130.815 112.571C131.823 113.896 130.902 114.328 132.975 116.459C135.019 118.619 135.336 115.336 137.294 115.134C139.252 114.933 138.936 112.369 138.936 110.612C138.936 108.855 140.779 108.366 142.247 107.732C143.687 107.127 143.86 106.609 142.737 105.255C141.614 103.93 142.535 102.691 144.176 102.288C145.818 101.885 146.221 99.0047 146.336 97.4494C146.451 95.8941 147.977 94.4828 148.697 93.6475C149.417 92.8122 148.899 88.0022 149.216 86.7637C149.532 85.5251 151.779 85.6403 151.894 84.4882C152.009 83.3649 152.729 82.5297 154.341 83.5666C155.983 84.6035 158.661 78.3245 158.862 76.9132C159.064 75.473 159.669 71.3831 160.59 70.1446C161.512 68.906 164.593 68.186 165.514 67.7828C166.436 67.3795 164.708 65.5073 164.708 62.4543C164.708 59.4012 163.988 58.2491 166.349 59.3724C168.711 60.4957 168.912 57.3274 169.027 54.5336C169.114 51.7685 172.195 46.9297 173.433 44.6831C174.671 42.4077 176.514 41.6012 177.119 41.5148C177.724 41.3996 179.279 41.7164 179.624 41.5148C179.999 41.3131 186.535 37.6264 187.169 36.7911C187.773 35.9847 187.486 35.8695 186.132 34.9478C184.807 34.0261 186.449 31.3475 186.65 30.2242C186.852 29.1009 188.292 27.1423 187.37 26.5374C186.449 25.9326 185.124 25.5006 185.326 24.4925L185.383 24.406Z"
          fill="#857867"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
