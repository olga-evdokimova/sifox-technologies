"use client";
import { useState } from "react";
import Image from "next/image";
import "./Burundi.scss";
import Link from "next/link";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import SvgArrow from "../SvgArrow";

export default function Burundi() {
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
      <div className="burundi">
        <Svg />
        <div className="burundi__title">
          <Image
            src={"/burundi.png"}
            alt="burundi"
            width={41}
            height={28}
          ></Image>
        </div>
        <button
          className="burundi__btn"
          onClick={handleButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Burundi</span>
          <svg
            width="228"
            height="60"
            viewBox="0 0 228 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M227 59.8237C227.276 59.8237 227.5 59.5999 227.5 59.3237C227.5 59.0476 227.276 58.8237 227 58.8237V59.8237ZM0.833333 2.82373C0.833333 4.29649 2.02724 5.4904 3.5 5.4904C4.97276 5.4904 6.16667 4.29649 6.16667 2.82373C6.16667 1.35097 4.97276 0.157064 3.5 0.157064C2.02724 0.157064 0.833333 1.35097 0.833333 2.82373ZM171.469 59.3133L171.31 59.7872L171.469 59.3133ZM227 58.8237H171.533V59.8237H227V58.8237ZM171.628 58.8394L3.65938 2.34981L3.34062 3.29765L171.31 59.7872L171.628 58.8394ZM171.533 58.8237C171.565 58.8237 171.598 58.829 171.628 58.8394L171.31 59.7872C171.382 59.8114 171.457 59.8237 171.533 59.8237V58.8237Z"
              fill="white"
            />
          </svg>
          {showTooltip && (
            <div className="burundi__tooltip">
              <p>Reverse call</p>
              <p>ACS</p>
            </div>
          )}
        </button>
      </div>
      {showModal && (
        <div className="modal-burundi">
          <button className="modal-burundi__close" onClick={handleCloseModal}>
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
            className="modal-burundi__image"
            src={"/burundi-modal.png"}
            alt="DRC"
            width={1008}
            height={999}
          ></Image>
          <div className="modal-burundi__content">
            <div>
              <Image
                src={"/burundi.png"}
                alt="burundi"
                width={41}
                height={21}
              ></Image>
              Burundi
            </div>
            <Link href={`/products/${lang}/b2b-reverse-billing`}>
              {Dictionary[lang]["reverse_billing"]}
              <SvgArrow />
            </Link>
            <Link href="">
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
        className="burundi__svg"
        width="30"
        height="36"
        viewBox="0 0 30 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9422 8.97702C22.2511 7.79612 23.9214 3.24528 24.2669 2.3812C24.0077 2.55402 23.0575 0.422652 21.8192 1.05631C20.437 1.77637 18.7956 3.18768 17.6438 2.3812C16.492 1.57473 15.6569 0.509035 15.3401 1.66114C15.0234 2.81324 15.1098 3.64856 15.3401 5.03108C15.5705 6.41361 15.2538 7.42167 14.1019 7.79611C12.9501 8.17054 8.34271 8.63136 7.39244 8.40094C6.47097 8.17051 5.54951 5.23272 4.16731 5.31912C2.7851 5.40553 -0.353691 6.24076 0.711759 8.77538C1.80601 11.31 4.34008 10.8492 4.34008 12.4621C4.34008 13.8446 4.22493 16.2353 4.19613 16.8402C5.17519 16.7538 6.26944 16.8402 6.26944 16.8402C7.19091 17.445 6.03903 21.1605 6.03903 24.012C6.03903 26.8634 8.51548 30.4062 10.272 33.0272C10.704 33.6609 10.992 34.2081 11.136 34.6401C12.8349 34.0353 14.3898 32.912 16.2904 31.011C18.6804 28.6204 21.5312 22.399 22.2223 21.3909C22.9134 20.3828 25.6203 18.7123 26.0522 17.9922C26.4842 17.301 25.3036 16.2353 27.6936 15.9185C30.0837 15.6016 28.9894 12.8366 29.0758 12.1453C29.1622 11.4541 26.6857 11.4541 26.081 10.446C25.4763 9.43789 23.7774 10.2156 22.9999 8.91945L22.9422 8.97702Z"
          fill="#857867"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
