"use client";
import { useState } from "react";
import Image from "next/image";
import "./Zimbabwe.scss";
import Link from "next/link";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import SvgArrow from "../SvgArrow";

export default function Zimbabwe() {
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
      <div className="zimbabwe">
        <Svg />
        <div className="zimbabwe__title" onClick={handleButtonClick}>
          <Image
            src={"/zimbabwe.jpg"}
            alt="zimbabwe"
            width={41}
            height={22}
          ></Image>
          Zimbabwe
        </div>

        <button
          className="zimbabwe__btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          i
          {showTooltip && (
            <div className="zimbabwe__tooltip">
              <p>{Dictionary[lang]["airtime_credit"]}</p>
            </div>
          )}
        </button>
      </div>
      {showModal && (
        <div className="modal-zimbabwe">
          <button className="modal-zimbabwe__close" onClick={handleCloseModal}>
            <svg
              className="modal__close-svg"
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
            className="modal-zimbabwe__image"
            src={"/zimbabwe-modal.png"}
            alt="Zimbabwe"
            width={729}
            height={901}
          ></Image>
          <div className="modal-zimbabwe__content">
            <div>
              <Image
                src={"/zimbabwe.jpg"}
                alt="Zimbabwe"
                width={41}
                height={22}
              ></Image>
              Zimbabwe
            </div>
            <Link href={`/products/${lang}/b2c-airtime-credit`}>
              {Dictionary[lang]["airtime_credit"]}
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
        className="zimbabwe__svg"
        width="126"
        height="114"
        viewBox="0 0 126 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M121.097 68.919C120.262 68.2277 121.241 66.2979 120.723 65.8371C120.176 65.3762 119.341 65.0882 119.801 63.6769C120.262 62.2944 120.896 59.2989 120.492 58.2044C120.118 57.1387 118.419 56.5915 118.333 55.5834C118.246 54.5753 119.945 54.4313 121.328 54.1145C122.71 53.7977 121.731 51.8967 121.184 50.5717C120.636 49.2756 121.5 49.794 122.019 49.2756C122.537 48.7283 122.537 48.2099 123.487 47.2018C124.409 46.1937 123.487 46.2802 123.026 45.6465C122.566 45.0417 122.335 44.8689 122.422 43.8608C122.508 42.8527 122.883 41.931 122.249 40.318C121.644 38.7051 123.17 36.4585 123.487 35.4792C123.804 34.4711 122.479 34.4711 122.883 32.6854C123.257 30.9284 123.257 30.986 122.969 29.1426C122.652 27.2992 120.752 24.5342 121.27 23.7565C121.817 22.9789 123.487 20.7611 121.356 20.4443C119.197 20.1274 118.592 19.3786 117.67 18.3705C116.749 17.3624 107.505 16.2967 106.123 15.8358C104.741 15.375 103.272 12.9267 101.746 12.2067C100.191 11.5154 97.6573 11.1986 96.9662 10.3633C96.2751 9.52807 94.5185 8.69281 93.3379 9.29767C92.186 9.90252 91.0341 9.52805 91.0341 9.52805L82.4817 9.21118C82.4817 9.21118 82.6257 4.40116 82.5969 3.10504C82.5394 2.01054 81.9922 1.92418 81.7907 1.26172H81.6467C81.6467 1.26172 78.364 1.80893 74.8797 1.4057C71.3953 1.00246 73.0367 1.80895 67.4791 3.04747C61.9215 4.28598 62.555 5.72608 60.5105 6.53256C58.4372 7.36783 56.5943 12.8979 56.8246 15.9798C57.0262 19.0617 56.8246 15.9798 49.4529 19.0617C42.0523 22.1436 34.6805 33.6359 32.6072 36.1993C30.5627 38.7339 29.7276 37.9562 27.0784 40.2316C24.4291 42.507 23.7956 40.4332 20.7145 38.2154C17.6333 35.9976 16.1935 38.561 13.1123 40.0012C10.0311 41.4413 9.82963 35.2775 7.78512 36.3144C5.74061 37.3513 1.01806 37.3514 1.01806 37.3514L0.874023 37.4089C0.874023 37.4089 0.960464 37.6394 1.01806 37.7258C2.74581 41.4702 5.30865 44.4368 6.14373 45.2721C7.0652 46.1938 5.82694 45.5889 6.92119 47.7491C7.98664 49.9093 13.0835 54.9785 13.2275 57.1387C13.3715 59.2989 16.5967 66.3844 18.9291 66.9893C21.2328 67.5941 20.1674 68.6886 22.615 70.5319C25.0915 72.3753 34.0182 74.3915 34.1621 76.6957C34.3061 78.9999 33.0967 81.6209 36.9266 81.7649C40.7853 81.9089 41.9947 83.7235 41.3899 86.287C40.7852 88.8504 41.9947 91.1546 43.0889 94.6973C44.1543 98.2401 44.3271 99.3058 48.3298 100.083C52.3324 100.861 61.1152 100.861 61.4032 102.848C61.7199 104.836 60.4817 103.77 61.4032 105.613C62.3246 107.457 66.0105 107.313 66.0105 108.379C66.0105 109.444 73.2383 106.074 74.3325 108.379C75.398 110.683 78.3352 111.46 80.1205 111.604C81.8771 111.748 86.0525 111.46 87.2907 111.604C88.5289 111.748 92.6755 110.539 96.0734 112.987L114.071 95.2158C114.071 95.2158 114.301 94.1212 113.841 93.286C113.38 92.4507 112.919 91.529 113.754 90.9818C114.589 90.4345 115.136 88.4471 114.992 86.8918C114.848 85.3652 115.136 84.3572 115.453 83.0322C115.77 81.7361 116.691 81.4193 118.16 80.8721C119.629 80.3248 121.068 77.7037 121.155 76.1772C121.241 74.6507 122.479 74.0171 124.149 71.5689C125.82 69.0918 122.163 70.5607 122.393 69.4662C122.623 68.4005 121.99 69.5527 121.155 68.8614L121.097 68.919Z"
          fill="#857867"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
