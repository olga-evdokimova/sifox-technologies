"use client";
import { useState } from "react";
import Image from "next/image";
import "./Kenya.scss";
import Link from "next/link";
import "../ModalCases/ModalCases.scss";

export default function Kenya() {
  const [showTooltip1, setShowTooltip1] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleMouseEnter1 = () => {
    setShowTooltip1(true);
  };

  const handleMouseLeave1 = () => {
    setShowTooltip1(false);
  };

  const handleMouseEnter2 = () => {
    setShowTooltip2(true);
  };

  const handleMouseLeave2 = () => {
    setShowTooltip2(false);
  };
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="kenya">
        <svg
          className="kenya__svg"
          width="124"
          height="153"
          viewBox="0 0 124 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M111.498 17.0547C110.576 16.3346 106.574 12.7343 106.574 12.7343C106.574 12.7343 96.0057 17.458 94.6811 18.0628C93.3564 18.6677 91.312 19.5893 90.7937 20.9431C90.2753 22.268 86.9925 25.1482 86.5894 25.3499C86.1863 25.5515 85.1497 25.8683 84.0266 25.033C82.9036 24.2266 83.1051 24.1114 81.147 25.3499C79.1889 26.5884 79.592 25.2347 77.5475 24.4282C75.503 23.6217 71.5004 23.0745 71.5004 23.0745H64.6181L45.8432 10.2861L35.3615 10.2285C33.8929 10.5741 31.9347 8.67315 30.6389 7.29062C30.6389 7.29062 25.4557 7.29063 24.4766 7.20422C23.4975 7.08901 23.5551 5.15927 23.8718 3.86315C24.1886 2.56704 24.275 3.02785 23.4687 3.02785C22.6624 3.02785 22.4033 3.14309 21.2226 2.10619C20.8483 1.76056 20.7618 1.41492 20.7906 1.1557C19.4372 2.279 10.4241 4.4104 8.40841 5.07286C6.79584 5.5913 4.03145 9.56606 0.777505 12.9936C0.777505 12.9936 1.18066 14.2321 1.32464 15.557C1.46861 16.8819 1.46864 17.4867 2.15974 17.8612C2.85085 18.2356 3.16758 17.5444 3.39795 18.9269C3.62831 20.3094 4.31935 20.7703 6.39266 21.5479C8.46597 22.2968 8.69642 23.1609 7.91893 24.7738C7.14144 26.3868 6.85343 28.547 7.68852 28.9502C8.5236 29.3246 7.71732 30.5631 8.32203 31.5712C8.92674 32.5793 9.21468 33.7314 11.0864 34.1059C12.9294 34.4803 11.8639 36.1797 13.0733 37.4758C14.3116 38.8007 15.8378 38.3974 15.521 40.0968C15.2043 41.7961 13.4477 42.545 14.8299 44.2444C16.2121 45.9437 15.9818 51.7042 15.9818 53.0292C15.9818 54.3541 14.2828 55.247 14.1388 56.1111C13.9948 56.9463 14.1388 57.4936 13.4477 58.0408C12.7566 58.5881 14.5995 58.7321 13.0733 60.0282C11.5184 61.3243 9.76181 60.4026 8.75395 62.3324C7.74609 64.2622 8.52358 65.7311 6.59426 66.6528C4.66493 67.5745 5.44241 67.5745 4.52094 68.7266C3.59947 69.8787 3.22518 70.1955 3.22518 70.4259C3.22518 70.6563 2.07331 72.7301 1.92933 73.8246C1.87173 74.1414 1.35343 74.9192 0.604736 75.8696C1.06547 76.6185 0.691121 78.1738 0.691121 78.1738C0.691121 78.1738 1.09422 79.4123 1.09422 80.2188C1.09422 81.0253 1.20944 81.1405 2.2173 81.8894C3.25396 82.6094 4.57852 82.4654 4.0602 84.2224C3.54187 85.9505 3.02357 84.9424 3.45551 85.4609C3.85865 85.9793 3.25396 86.1809 2.13092 86.901C1.00788 87.6211 1.81418 88.946 1.699 90.4726C1.58381 91.9991 2.21728 91.5094 2.10209 93.8136C2.0733 94.4473 1.87175 95.0233 1.58379 95.5418L56.9296 125.986C56.9296 125.986 58.3118 127.369 58.1678 128.434C58.0238 129.5 58.5421 131.977 57.3327 132.38C56.0945 132.755 59.1757 136.211 60.3275 137.219C61.2202 137.997 75.2438 147.79 81.5789 152.168C82.2412 150.814 81.0606 153.723 83.8826 151.275C86.7334 148.798 84.8041 151.275 87.7989 143.584C90.7936 135.894 90.6497 143.124 92.4926 136.182C94.3356 129.27 96.4953 127.397 98.511 122.559C100.498 117.72 101.909 121.32 107.553 116.251C112.592 111.7 114.003 109.05 116.768 102.829C113.946 98.9117 109.425 93.2952 109.425 93.2952C109.425 93.2952 109.54 89.4933 109.626 88.4852C109.741 87.4483 109.021 85.7201 109.021 85.7201C109.021 85.7201 108.82 35.9492 108.82 35.546C108.82 35.1428 113.859 31.024 114.781 29.9007C115.702 28.7774 115.904 27.3372 117.142 26.502C118.351 25.6955 122.44 18.2932 122.613 17.9764C122.296 18.1204 122.095 18.0916 122.037 17.6884C121.922 16.7667 112.391 17.6884 111.469 16.9683L111.498 17.0547Z"
            fill="#857867"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h6 className="kenya__title" onClick={handleButtonClick}>
          <Image src={"/kenya.png"} alt="" width={41} height={22}></Image>
          Kenya
        </h6>
        <button
          className="kenya__btn btn-1"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          i
          {showTooltip1 && (
            <div className="kenya__tooltip tooltip-1">
              <h6>Data distribution</h6>
              <p>
                Advantages of working with us Advantages of working with
                usAdvantages of working
              </p>
            </div>
          )}
        </button>
        <button
          className="kenya__btn btn-2"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          i
          {showTooltip2 && (
            <div className="kenya__tooltip tooltip-2">
              <h6>Sponsored data</h6>
              <p>
                Advantages of working with us Advantages of working with
                usAdvantages of working
              </p>
            </div>
          )}
        </button>
      </div>
      {showModal && (
        <div className="modal-kenya">
          <button className="modal-kenya__close" onClick={handleCloseModal}>
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
            className="modal-kenya__image"
            src={"/kenya-modal.png"}
            alt=""
            width={729}
            height={901}
          ></Image>
          <div className="modal-kenya__content">
            <h6>
              {" "}
              <Image src={"/kenya.png"} alt="" width={41} height={22}></Image>
              Kenya
            </h6>
            <Link href={"/products/b2c-airtime-credit"}>
              Airtime Credit
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 17L17 2M17 2H2M17 2V17"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </Link>

            <Link href={"/products/b2c-content-services"}>
              Content Services
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 17L17 2M17 2H2M17 2V17"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
