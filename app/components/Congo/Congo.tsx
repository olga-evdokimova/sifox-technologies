"use client";
import { useState } from "react";
import Image from "next/image";
import "./Congo.scss";
import Link from "next/link";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import SvgArrow from "../SvgArrow";

export default function Congo() {
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
      <div className="congo">
        <Svg />
        <h6 className="congo__title" onClick={handleButtonClick}>
          <Image src={"/congo.png"} alt="congo" width={41} height={22}></Image>
          {Dictionary[lang]["drc"]}
        </h6>
        <button
          className="congo__btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          i
          {showTooltip && (
            <div className="congo__tooltip">
              <p>{Dictionary[lang]["reverse_billing"]}</p>
              <p>{Dictionary[lang]["data_voice_distribution"]}</p>
              <p>{Dictionary[lang]["data_voice_sharing"]}</p>
              <p>{Dictionary[lang]["data_voice_cost_sharing"]}</p>
            </div>
          )}
        </button>
      </div>
      {showModal && (
        <div className="modal-congo">
          <button className="modal-congo__close" onClick={handleCloseModal}>
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
            className="modal-congo__image"
            src={"/congo-modal.png"}
            alt="congo"
            width={1008}
            height={999}
          ></Image>
          <div className="modal-congo__content">
            <h6>
              {" "}
              <Image
                src={"/congo.png"}
                alt="congo"
                width={41}
                height={22}
              ></Image>
              {Dictionary[lang]["drc"]}
            </h6>
            <Link href={`/products/${lang}/b2b-reverse-billing`}>
              {Dictionary[lang]["reverse_billing"]}
              <SvgArrow />
            </Link>
            <Link href={`/products/${lang}/b2b-data-voice-distribution`}>
              {Dictionary[lang]["data_voice_distribution"]}
              <SvgArrow />
            </Link>
            <Link href={`/products/${lang}/b2c-data-voice-sharing`}>
              {Dictionary[lang]["data_voice_sharing"]} <SvgArrow />
            </Link>
            <Link href={`/products/${lang}/b2c-data-voice-cost-sharing`}>
              {Dictionary[lang]["data_voice_cost_sharing"]}
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
        className="congo__svg"
        width="300"
        height="347"
        viewBox="0 0 299 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M272.712 97.0752C272.856 98.6313 272.77 98.3144 272.165 99.6976L272.137 99.8416C271.59 101.11 272.165 105 272.137 106.585C272.108 108.17 269 125.547 266.467 125.547C263.934 125.547 261.949 126.469 263.013 129.005C264.107 131.54 266.64 131.079 266.64 132.693C266.64 134.049 266.529 136.374 266.498 137.035L266.496 137.073C265.719 137.131 265.028 137.275 265.028 137.621C265.028 138.399 264.193 141.252 264.568 142.635C264.942 144.018 265.028 144.105 264.798 147.188C264.539 150.272 262.812 152.952 264.452 151.799C266.093 150.646 266.381 147.246 266.928 148.254C267.474 149.263 267.532 151.712 266.15 153.874C264.798 156.006 263.186 157.937 264.251 161.337C265.316 164.709 266.323 169.954 267.474 170.876C268.625 171.798 268.856 173.873 268.539 174.795C268.223 175.717 266.409 176.034 266.208 177.648C266.007 179.262 267.158 180.27 267.848 181.884C268.539 183.498 269.777 189.809 272.223 191.97C274.669 194.131 277 195.111 278.065 196.35C279.13 197.589 282.209 200.759 281.979 202.286C281.749 203.814 281.749 205.687 283.677 207.358C285.605 209.087 287.678 211.277 287.534 212.689C287.476 213.208 286.958 213.698 286.44 214.159C283.274 214.361 276.079 214.966 273.892 215.312C271.216 215.744 261.488 217.675 261.488 217.675C261.488 217.675 256.653 224.043 255.013 225.369C253.372 226.694 253.487 228.222 253.89 229.259C254.293 230.297 257.459 239.028 257.229 239.864C256.998 240.7 257.315 241.795 256.999 243.091C256.682 244.388 257.66 248.163 257.603 251.247C257.517 254.33 256.049 252.313 256.135 254.157C256.193 256.001 255.588 256.924 253.977 260.785C252.365 264.647 252.509 262.341 252.825 264.56C253.142 266.779 254.149 269.949 256.452 271.332C258.754 272.715 261.69 276.49 263.071 278.335C264.452 280.179 267.071 278.335 267.446 279.026C267.82 279.718 270.755 280.006 270.755 279.631C270.755 279.257 270.525 278.335 270.064 277.009C269.604 275.712 272.396 275.943 273.144 276.087C273.921 276.231 275.533 275.165 275.533 275.165V295.106C275.533 295.106 275.302 295.625 273.345 295.481C271.388 295.308 272.655 294.472 273.201 293.089C273.72 291.706 272.568 292.945 270.957 292.484C269.345 292.023 270.87 293.694 267.187 294.472C263.474 295.25 263.733 295.308 262.639 293.781C261.574 292.253 260.711 289.228 259.099 287.009C257.488 284.761 256.711 286.461 255.243 284.386C253.775 282.311 255.243 283.32 254.092 280.611C252.941 277.931 252.538 279.603 250.005 279.459C247.472 279.315 247.012 277.845 245.544 276.923C244.105 276.001 244.623 277.701 243.242 277.47C241.86 277.24 240.018 276.404 239.702 274.934C239.385 273.493 237.687 271.332 236.306 270.554C234.896 269.776 235.903 268.479 234.752 266.462C233.601 264.474 232.421 266.318 231.816 268.854C231.212 271.419 230.895 271.102 229.284 271.793C227.643 272.485 226.578 272.802 224.42 272.254C222.261 271.707 221.513 271.419 218.808 271.332C216.131 271.246 216.448 271.563 215.815 270.554C215.21 269.546 211.901 268.479 210.519 268.249C209.138 268.018 208.908 269.862 208.908 269.171C208.908 268.479 206.202 266.779 205.598 265.165C204.994 263.552 205.512 262.629 205.828 261.246C206.145 259.863 205.915 260.266 203.526 261.333C201.137 262.399 199.382 262.399 197.367 262.399C195.353 262.399 195.669 264.272 193.05 264.503C190.431 264.704 191.208 260.785 190.978 258.854C190.748 256.924 189.165 259.114 188.1 257.788C187.035 256.434 185.884 255.425 185.28 255.31C184.675 255.223 182.92 256.952 181.596 257.471C180.243 257.961 177.883 256.751 176.157 256.434C174.401 256.117 172.358 258.278 170.314 258.883C168.242 259.488 168.875 259.085 167.235 258.566C165.594 258.047 163.637 258.566 162.515 257.759C161.393 256.952 162.918 258.48 160.673 259.402C158.399 260.324 157.479 261.851 157.479 261.246C157.479 260.641 157.594 259.488 157.277 257.644C156.961 255.8 155.924 254.878 158.083 254.272C160.213 253.638 159.09 253.321 158.486 250.872C157.881 248.394 158.198 249.835 158.802 248.509C159.436 247.183 158.918 245.541 157.277 243.697C155.637 241.852 157.076 241.42 156.155 240.094C155.234 238.769 152.644 236.089 151.32 234.562C149.996 233.034 150.715 232.112 150.715 230.556C150.715 229 150.312 226.55 151.32 224.187C152.356 221.824 152.644 213.525 151.118 211.969C149.593 210.442 150.111 205.514 151.435 203.871C152.787 202.2 150.83 198.828 150.83 198.828C150.83 198.828 131.548 199.232 130.829 198.627C130.109 198.021 132.67 193.296 132.67 193.296C132.67 193.296 129.591 192.892 128.555 193.094C127.548 193.295 127.231 193.843 127.231 193.843C127.231 193.843 117.187 194.218 116.266 194.419C115.345 194.621 116.065 194.823 115.144 195.86C114.223 196.898 115.662 198.223 115.144 201.508C114.626 204.793 115.029 203.266 113.503 204.188C111.978 205.111 113.072 209.721 113.072 209.721C113.072 209.721 106.452 210.355 105.301 210.269C104.15 210.182 102.222 209.174 101.387 208.943C100.552 208.741 99.6315 210.269 99.4012 210.269C99.171 210.269 95.7174 209.058 94.2496 210.355C92.8107 211.652 93.5589 211.652 92.0336 211.047C90.5083 210.442 87.803 211.45 85.0402 210.672C82.2773 209.894 82.6515 206.811 81.3564 204.505C80.0613 202.171 74.4493 199.318 75.1975 198.021C75.9458 196.725 75.1975 193.411 73.2117 190.558C71.226 187.705 71.5425 183.238 71.4562 181.538C71.3698 179.838 70.7655 181.135 70.4489 179.751C70.1611 178.368 68.4631 177.014 67.9163 177.014C67.3695 177.014 68.2904 175.919 65.0671 176.38C62.3043 177.504 19.3938 176.61 15.3935 176.38C11.3931 176.149 8.77414 178.224 6.93224 179.377C6.29909 179.78 5.29178 179.809 4.25571 179.665C4.94642 179.636 5.55083 179.665 5.55083 179.665C5.55083 179.665 2.64406 176.754 1.20508 174.564H6.52933V165.112C6.52933 165.112 4.4284 165.256 5.75227 164.161C7.10491 163.038 8.02586 163.412 8.94681 161.971C9.86776 160.559 9.46485 161.164 10.4434 160.444C11.4219 159.724 8.91802 159.868 10.9614 159.003C12.4867 158.34 14.271 156.957 15.4222 156.755C15.7964 156.698 16.113 156.755 16.3432 157.015C17.2066 158.023 19.5665 161.222 20.804 160.502C22.0415 159.781 23.1064 159.291 24.0849 158.542C25.0634 157.764 25.3512 157.649 25.2073 156.727C25.0634 155.804 26.3297 154.536 28.0277 154.536C29.7257 154.536 29.3804 153.499 32.3447 152.894C35.309 152.289 35.0787 150.733 35.6255 152.173C36.1724 153.614 37.784 153.528 36.7479 154.594C35.7119 155.66 35.0499 156.554 35.9133 157.822C36.8055 159.118 35.309 160.242 35.7695 161.02C36.2299 161.798 38.1581 159.752 39.1654 160.819C40.2015 161.885 40.1439 161.683 41.7268 160.041C43.3097 158.398 45.1228 155.113 46.6482 154.133C48.2023 153.182 53.4114 147.361 55.1094 146.958C56.8074 146.554 59.2248 146.554 59.7717 144.854C60.3473 143.154 63.5418 138.86 63.6857 137.16C63.8584 135.46 64.3476 135.661 63.9447 134.076C63.513 132.463 62.592 123.27 63.3403 119.668C64.1174 116.037 69.5567 113.732 70.564 110.879C71.5425 108.026 76.4063 102.954 77.7014 98.8618C78.9964 94.7698 79.4569 92.7815 78.8526 89.237C78.2194 85.6925 80.5218 82.0038 79.1116 81.9174C77.6726 81.8309 76.9243 80.5342 76.838 79.4392C76.7516 78.3729 75.5141 78.9205 74.6795 77.9119C73.8449 76.9033 72.2332 78.1424 71.5425 76.9033C70.8518 75.6641 69.7006 66.7884 69.2401 66.1833C68.7797 65.5781 66.6212 65.2035 66.0744 63.6474C65.5276 62.1201 64.5779 63.2728 63.5994 62.7253C62.6208 62.1778 61.3833 58.2874 61.3833 58.2874C61.6999 58.4603 62.074 58.6044 62.4481 58.6908C62.4769 57.4517 62.5633 56.0973 62.4481 54.8582C62.3906 54.1954 62.1028 53.5038 62.1028 52.8698C62.074 51.429 62.3043 52.2358 63.0238 51.1696C63.5418 50.3915 63.8008 50.8238 63.3403 49.7576C63.2252 49.4982 63.0525 49.2965 62.8511 49.0659C62.8511 49.0659 65.4988 46.0978 66.4197 43.7924C67.3407 41.4871 67.0241 38.4036 68.7221 35.3202C70.3913 32.2368 69.0099 31.1417 70.2474 30.0755C71.485 28.9804 70.3913 30.8535 76.0897 30.0755C81.7881 29.2974 79.9462 26.992 83.63 28.0582C87.3138 29.1245 88.4074 25.8106 89.9327 27.7701C91.458 29.7585 93.6165 30.2196 95.3145 29.2974C97.0125 28.3753 100.092 29.9314 100.696 27.9142C101.301 25.897 103.143 21.2863 101.761 19.442C100.38 17.5977 98.7969 17.1366 102.279 15.4364C105.762 13.765 105.531 10.768 107.978 9.24069C110.453 7.68457 110.971 4.8029 114.251 4.91817C117.532 5.03344 118.05 4.83172 119.288 5.95559C120.497 7.07945 120.698 7.48289 122.454 7.48289C124.209 7.48289 129.246 11.085 129.649 13.131C130.052 15.177 128.008 14.5719 132.411 14.9754C136.844 15.4076 137.851 16.5314 141.448 17.4536C145.017 18.3757 144.01 18.174 146.254 18.2605C148.528 18.3757 148.01 17.3383 149.449 18.174C150.888 18.9809 151.809 18.9809 153.967 18.9809C156.126 18.9809 156.529 19.903 158.802 19.903C161.076 19.903 159.925 21.4592 162.4 17.6553C164.846 13.8515 163.522 12.2953 166.487 11.6902C169.451 11.085 167.523 8.31856 169.249 9.44243C171.005 10.5663 171.494 10.5663 172.53 10.768C173.566 10.9697 172.645 11.2867 173.969 12.4106C174.199 12.6123 174.228 12.7852 174.2 12.9293C174.804 12.6411 175.955 12.1512 178.085 11.402C185.798 8.72198 187.927 8.11685 189.884 6.47427C191.841 4.80288 191.122 4.71645 192.561 5.6386C194 6.56074 195.842 7.71341 197.166 7.59814C198.518 7.51169 201.281 6.27258 201.886 6.993C202.49 7.71343 202.72 7.10827 204.245 6.27258C205.771 5.4657 205.166 5.26398 205.886 3.30442C206.577 1.34486 208.447 -0.0671998 209.973 1.66183C211.498 3.41967 214.491 4.34184 216.534 3.62141C218.606 2.90098 219.096 3.01625 221.254 3.9384C223.413 4.86055 221.571 5.66742 224.017 5.78269C226.463 5.86914 227.499 3.9384 228.622 5.4657C229.744 7.02183 229.946 6.70482 230.665 5.26396C231.385 3.85192 237.227 5.09108 237.457 5.14871C237.63 5.32162 237.831 5.4657 238.033 5.6386C239.501 6.79128 241.285 6.87771 242.58 8.63556C243.904 10.3934 241.832 10.7104 243.817 12.3241C245.803 13.9379 246.724 13.0158 247.501 14.3414C248.278 15.6381 247.415 16.0992 249.343 16.3298C251.271 16.5603 249.746 16.4162 251.271 16.5603C252.797 16.7332 251.358 16.6467 252.653 17.5689C253.977 18.491 252.365 18.9521 256.193 16.8773C260.049 14.8025 254.811 14.2549 258.351 13.6497C261.92 13.0445 258.207 15.6381 261.747 15.033C265.287 14.399 263.675 14.1108 265.431 15.6381C267.215 17.1654 265.92 18.3469 268.136 15.6381C270.352 12.9293 269.057 11.3156 271.676 12.5547C274.295 13.7939 275.13 13.0158 275.36 14.6296C275.59 16.2433 277.058 15.2347 277.749 17.3095C278.439 19.3844 280.31 22.4101 283.217 23.0153C286.123 23.6492 286.67 23.8798 286.901 25.8682C287.16 27.8854 285.087 29.6433 288.685 28.4906C292.282 27.3091 290.297 26.7039 291.592 28.0871C291.764 28.2888 291.937 28.3753 292.11 28.3753C292.11 28.3753 292.916 30.6518 292.916 31.6316C292.916 32.6114 291.534 32.3809 291.39 34.6286C291.246 36.8764 289.462 35.7813 289.778 37.1069C290.095 38.4036 291.477 37.5679 291.707 38.7206C291.937 39.9021 291.39 41.5159 290.872 43.9653C290.325 46.4148 289.836 46.2707 291.361 47.1928C292.858 48.115 292.484 48.8066 293.779 48.115C295.103 47.4234 295.707 48.576 296.714 48.9506C297.722 49.3541 296.858 51.2848 297.952 52.1205C299.017 52.985 297.952 54.3683 297.952 54.3683L286.642 64.5984C286.642 64.5984 282.325 66.2409 282.325 67.3648C282.325 68.4887 283.044 70.4483 280.886 70.65C278.727 70.8517 277.518 70.8517 277.403 71.7738C277.288 72.6671 277.202 74.2233 276.885 76.3846C276.569 78.5458 272.77 91.3118 272.712 93.8477C272.626 96.3836 272.539 95.5479 272.712 97.0752Z"
          fill="#857867"
        />
        <path
          d="M174.2 12.9293C174.804 12.6411 175.955 12.1512 178.085 11.402C185.798 8.72198 187.927 8.11685 189.884 6.47427C191.841 4.80288 191.122 4.71645 192.561 5.6386C194 6.56074 195.842 7.71341 197.166 7.59814C198.518 7.51169 201.281 6.27258 201.886 6.993C202.49 7.71343 202.72 7.10827 204.245 6.27258C205.771 5.4657 205.166 5.26398 205.886 3.30442C206.577 1.34486 208.447 -0.0671998 209.973 1.66183C211.498 3.41967 214.491 4.34184 216.534 3.62141C218.606 2.90098 219.096 3.01625 221.254 3.9384C223.413 4.86055 221.571 5.66742 224.017 5.78269C226.463 5.86914 227.499 3.9384 228.622 5.4657C229.744 7.02183 229.946 6.70482 230.665 5.26396C231.385 3.85192 237.227 5.09108 237.457 5.14871C237.63 5.32162 237.831 5.4657 238.033 5.6386C239.501 6.79128 241.285 6.87771 242.58 8.63556C243.904 10.3934 241.832 10.7104 243.817 12.3241C245.803 13.9379 246.724 13.0158 247.501 14.3414C248.278 15.6381 247.415 16.0992 249.343 16.3298C251.271 16.5603 249.746 16.4162 251.271 16.5603C252.797 16.7332 251.358 16.6467 252.653 17.5689C253.977 18.491 252.365 18.9521 256.193 16.8773C260.049 14.8025 254.811 14.2549 258.351 13.6497C261.92 13.0445 258.207 15.6381 261.747 15.033C265.287 14.399 263.675 14.1108 265.431 15.6381C267.215 17.1654 265.92 18.3469 268.136 15.6381C270.352 12.9293 269.057 11.3156 271.676 12.5547C274.295 13.7939 275.13 13.0158 275.36 14.6296C275.59 16.2433 277.058 15.2347 277.749 17.3095C278.439 19.3844 280.31 22.4101 283.217 23.0153C286.123 23.6492 286.67 23.8798 286.901 25.8682C287.16 27.8854 285.087 29.6433 288.685 28.4906C292.282 27.3091 290.297 26.7039 291.592 28.0871C291.764 28.2888 291.937 28.3753 292.11 28.3753C292.11 28.3753 292.916 30.6518 292.916 31.6316C292.916 32.6114 291.534 32.3809 291.39 34.6286C291.246 36.8764 289.462 35.7813 289.778 37.1069C290.095 38.4036 291.477 37.5679 291.707 38.7206C291.937 39.9021 291.39 41.5159 290.872 43.9653C290.325 46.4148 289.836 46.2707 291.361 47.1928C292.858 48.115 292.484 48.8066 293.779 48.115C295.103 47.4234 295.707 48.576 296.714 48.9506C297.722 49.3541 296.858 51.2848 297.952 52.1205C299.017 52.985 297.952 54.3683 297.952 54.3683L286.642 64.5984C286.642 64.5984 282.325 66.2409 282.325 67.3648C282.325 68.4887 283.044 70.4483 280.886 70.65C278.727 70.8517 277.518 70.8517 277.403 71.7738C277.288 72.6671 277.202 74.2233 276.885 76.3846C276.569 78.5458 272.77 91.3118 272.712 93.8477C272.626 96.3836 272.539 95.5479 272.712 97.0752C272.856 98.6313 272.77 98.3144 272.165 99.6976L272.137 99.8416C271.59 101.11 272.165 105 272.137 106.585C272.108 108.17 269 125.547 266.467 125.547C263.934 125.547 261.949 126.469 263.013 129.005C264.107 131.54 266.64 131.079 266.64 132.693C266.64 134.076 266.525 136.468 266.496 137.073C265.719 137.131 265.028 137.275 265.028 137.621C265.028 138.399 264.193 141.252 264.568 142.635C264.942 144.018 265.028 144.105 264.798 147.188C264.539 150.272 262.812 152.952 264.452 151.799C266.093 150.646 266.381 147.246 266.928 148.254C267.474 149.263 267.532 151.712 266.15 153.874C264.798 156.006 263.186 157.937 264.251 161.337C265.316 164.709 266.323 169.954 267.474 170.876C268.625 171.798 268.856 173.873 268.539 174.795C268.223 175.717 266.409 176.034 266.208 177.648C266.007 179.262 267.158 180.27 267.848 181.884C268.539 183.498 269.777 189.809 272.223 191.97C274.669 194.131 277 195.111 278.065 196.35C279.13 197.589 282.209 200.759 281.979 202.286C281.749 203.814 281.749 205.687 283.677 207.358C285.605 209.087 287.678 211.277 287.534 212.689C287.476 213.208 286.958 213.698 286.44 214.159C283.274 214.361 276.079 214.966 273.892 215.312C271.216 215.744 261.488 217.675 261.488 217.675C261.488 217.675 256.653 224.043 255.013 225.369C253.372 226.694 253.487 228.222 253.89 229.259C254.293 230.297 257.459 239.028 257.229 239.864C256.998 240.7 257.315 241.795 256.999 243.091C256.682 244.388 257.66 248.163 257.603 251.247C257.517 254.33 256.049 252.313 256.135 254.157C256.193 256.001 255.588 256.924 253.977 260.785C252.365 264.647 252.509 262.341 252.825 264.56C253.142 266.779 254.149 269.949 256.452 271.332C258.754 272.715 261.69 276.49 263.071 278.335C264.452 280.179 267.071 278.335 267.446 279.026C267.82 279.718 270.755 280.006 270.755 279.631C270.755 279.257 270.525 278.335 270.064 277.009C269.604 275.712 272.396 275.943 273.144 276.087C273.921 276.231 275.533 275.165 275.533 275.165V295.106C275.533 295.106 275.302 295.625 273.345 295.481C271.388 295.308 272.655 294.472 273.201 293.089C273.72 291.706 272.568 292.945 270.957 292.484C269.345 292.023 270.87 293.694 267.187 294.472C263.474 295.25 263.733 295.308 262.639 293.781C261.574 292.253 260.711 289.228 259.099 287.009C257.488 284.761 256.711 286.461 255.243 284.386C253.775 282.311 255.243 283.32 254.092 280.611C252.941 277.931 252.538 279.603 250.005 279.459C247.472 279.315 247.012 277.845 245.544 276.923C244.105 276.001 244.623 277.701 243.242 277.47C241.86 277.24 240.018 276.404 239.702 274.934C239.385 273.493 237.687 271.332 236.306 270.554C234.896 269.776 235.903 268.479 234.752 266.462C233.601 264.474 232.421 266.318 231.816 268.854C231.212 271.419 230.895 271.102 229.284 271.793C227.643 272.485 226.578 272.802 224.42 272.254C222.261 271.707 221.513 271.419 218.808 271.332C216.131 271.246 216.448 271.563 215.815 270.554C215.21 269.546 211.901 268.479 210.519 268.249C209.138 268.018 208.908 269.862 208.908 269.171C208.908 268.479 206.202 266.779 205.598 265.165C204.994 263.552 205.512 262.629 205.828 261.246C206.145 259.863 205.915 260.266 203.526 261.333C201.137 262.399 199.382 262.399 197.367 262.399C195.353 262.399 195.669 264.272 193.05 264.503C190.431 264.704 191.208 260.785 190.978 258.854C190.748 256.924 189.165 259.114 188.1 257.788C187.035 256.434 185.884 255.425 185.28 255.31C184.675 255.223 182.92 256.952 181.596 257.471C180.243 257.961 177.883 256.751 176.157 256.434C174.401 256.117 172.358 258.278 170.314 258.883C168.242 259.488 168.875 259.085 167.235 258.566C165.594 258.047 163.637 258.566 162.515 257.759C161.393 256.952 162.918 258.48 160.673 259.402C158.399 260.324 157.479 261.851 157.479 261.246C157.479 260.641 157.594 259.488 157.277 257.644C156.961 255.8 155.924 254.878 158.083 254.272C160.213 253.638 159.09 253.321 158.486 250.872C157.881 248.394 158.198 249.835 158.802 248.509C159.436 247.183 158.918 245.541 157.277 243.697C155.637 241.852 157.076 241.42 156.155 240.094C155.234 238.769 152.644 236.089 151.32 234.562C149.996 233.034 150.715 232.112 150.715 230.556C150.715 229 150.312 226.55 151.32 224.187C152.356 221.824 152.644 213.525 151.118 211.969C149.593 210.442 150.111 205.514 151.435 203.871C152.787 202.2 150.83 198.828 150.83 198.828C150.83 198.828 131.548 199.232 130.829 198.627C130.109 198.021 132.67 193.296 132.67 193.296C132.67 193.296 129.591 192.892 128.555 193.094C127.548 193.295 127.231 193.843 127.231 193.843C127.231 193.843 117.187 194.218 116.266 194.419C115.345 194.621 116.065 194.823 115.144 195.86C114.223 196.898 115.662 198.223 115.144 201.508C114.626 204.793 115.029 203.266 113.503 204.188C111.978 205.111 113.072 209.721 113.072 209.721C113.072 209.721 106.452 210.355 105.301 210.269C104.15 210.182 102.222 209.174 101.387 208.943C100.552 208.741 99.6315 210.269 99.4012 210.269C99.171 210.269 95.7174 209.058 94.2496 210.355C92.8107 211.652 93.5589 211.652 92.0336 211.047C90.5083 210.442 87.803 211.45 85.0402 210.672C82.2773 209.894 82.6515 206.811 81.3564 204.505C80.0613 202.171 74.4493 199.318 75.1975 198.021C75.9458 196.725 75.1975 193.411 73.2117 190.558C71.226 187.705 71.5425 183.238 71.4562 181.538C71.3698 179.838 70.7655 181.135 70.4489 179.751C70.1611 178.368 68.4631 177.014 67.9163 177.014C67.3695 177.014 68.2904 175.919 65.0671 176.38C62.3043 177.504 19.3938 176.61 15.3935 176.38C11.3931 176.149 8.77414 178.224 6.93224 179.377C6.29909 179.78 5.29178 179.809 4.25571 179.665C4.94642 179.636 5.55083 179.665 5.55083 179.665C5.55083 179.665 2.64406 176.754 1.20508 174.564H6.52933V165.112C6.52933 165.112 4.4284 165.256 5.75227 164.161C7.10491 163.038 8.02586 163.412 8.94681 161.971C9.86776 160.559 9.46485 161.164 10.4434 160.444C11.4219 159.724 8.91802 159.868 10.9614 159.003C12.4867 158.34 14.271 156.957 15.4222 156.755C15.7964 156.698 16.113 156.755 16.3432 157.015C17.2066 158.023 19.5665 161.222 20.804 160.502C22.0415 159.781 23.1064 159.291 24.0849 158.542C25.0634 157.764 25.3512 157.649 25.2073 156.727C25.0634 155.804 26.3297 154.536 28.0277 154.536C29.7257 154.536 29.3804 153.499 32.3447 152.894C35.309 152.289 35.0787 150.733 35.6255 152.173C36.1724 153.614 37.784 153.528 36.7479 154.594C35.7119 155.66 35.0499 156.554 35.9133 157.822C36.8055 159.118 35.309 160.242 35.7695 161.02C36.2299 161.798 38.1581 159.752 39.1654 160.819C40.2015 161.885 40.1439 161.683 41.7268 160.041C43.3097 158.398 45.1228 155.113 46.6482 154.133C48.2023 153.182 53.4114 147.361 55.1094 146.958C56.8074 146.554 59.2248 146.554 59.7717 144.854C60.3473 143.154 63.5418 138.86 63.6857 137.16C63.8584 135.46 64.3476 135.661 63.9447 134.076C63.513 132.463 62.592 123.27 63.3403 119.668C64.1174 116.037 69.5567 113.732 70.564 110.879C71.5425 108.026 76.4063 102.954 77.7014 98.8618C78.9964 94.7698 79.4569 92.7815 78.8526 89.237C78.2194 85.6925 80.5218 82.0038 79.1116 81.9174C77.6726 81.8309 76.9243 80.5342 76.838 79.4392C76.7516 78.3729 75.5141 78.9205 74.6795 77.9119C73.8449 76.9033 72.2332 78.1424 71.5425 76.9033C70.8518 75.6641 69.7006 66.7884 69.2401 66.1833C68.7797 65.5781 66.6212 65.2035 66.0744 63.6474C65.5276 62.1201 64.5779 63.2728 63.5994 62.7253C62.6208 62.1778 61.3833 58.2874 61.3833 58.2874C61.6999 58.4603 62.074 58.6044 62.4481 58.6908C62.4769 57.4517 62.5633 56.0973 62.4481 54.8582C62.3906 54.1954 62.1028 53.5038 62.1028 52.8698C62.074 51.429 62.3043 52.2358 63.0238 51.1696C63.5418 50.3915 63.8008 50.8238 63.3403 49.7576C63.2252 49.4982 63.0525 49.2965 62.8511 49.0659C62.8511 49.0659 65.4988 46.0978 66.4197 43.7924C67.3407 41.4871 67.0241 38.4036 68.7221 35.3202C70.3913 32.2368 69.0099 31.1417 70.2474 30.0755C71.485 28.9804 70.3913 30.8535 76.0897 30.0755C81.7881 29.2974 79.9462 26.992 83.63 28.0582C87.3138 29.1245 88.4074 25.8106 89.9327 27.7701C91.458 29.7585 93.6165 30.2196 95.3145 29.2974C97.0125 28.3753 100.092 29.9314 100.696 27.9142C101.301 25.897 103.143 21.2863 101.761 19.442C100.38 17.5977 98.7969 17.1366 102.279 15.4364C105.762 13.765 105.531 10.768 107.978 9.24069C110.453 7.68457 110.971 4.8029 114.251 4.91817C117.532 5.03344 118.05 4.83172 119.288 5.95559C120.497 7.07945 120.698 7.48289 122.454 7.48289C124.209 7.48289 129.246 11.085 129.649 13.131C130.052 15.177 128.008 14.5719 132.411 14.9754C136.844 15.4076 137.851 16.5314 141.448 17.4536C145.017 18.3757 144.01 18.174 146.254 18.2605C148.528 18.3757 148.01 17.3383 149.449 18.174C150.888 18.9809 151.809 18.9809 153.967 18.9809C156.126 18.9809 156.529 19.903 158.802 19.903C161.076 19.903 159.925 21.4592 162.4 17.6553C164.846 13.8515 163.522 12.2953 166.487 11.6902C169.451 11.085 167.523 8.31857 169.249 9.44243C171.005 10.5663 171.494 10.5663 172.53 10.768C173.566 10.9697 172.645 11.2867 173.969 12.4106C174.199 12.6123 174.228 12.7852 174.2 12.9293ZM174.2 12.9293C172.991 13.5344 174.056 13.3903 174.2 12.9293Z"
          stroke="white"
        />
      </svg>
    </>
  );
};
