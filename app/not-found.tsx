"use client";
import Image from "next/image";
import styled from "styled-components";
import { PullState } from "./components/PullState/PullState";
import { Dictionary } from "./components/PullState/Dictionary";

const Div = styled.div`
  .not-found__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    img {
      object-fit: cover;
    }
  }
  .not-found__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h2 {
    font-size: 300px;
    color: var(--color-text-white);
    font-weight: 600;
    text-align: center;
    @media (max-width: 1100px) {
      font-size: 150px;
    }
  }
  p {
    color: var(--color-text-white);
    font-size: 60px;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    @media (max-width: 1100px) {
      font-size: 25px;
    }
  }

  .not-found__ellipses {
    position: absolute;
    background-image: url("/main-ellipses.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 2312px;
    height: 1950px;
    top: -740px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -3;
    opacity: 0.8;
    @media (max-width: 992px) {
      background-image: url("/main-ellipses-992.png");
      width: 1200px;
      top: -300px;
    }
  }
`;

export default function NotFound() {
  const lang = PullState.useState((state) => state.lang);
  return (
    <Div className="not-found">
      <div className="not-found__img">
        <Image
          src={"/image-404.png"}
          alt="background"
          fill
          sizes="1000"
        ></Image>
      </div>
      <div className="not-found__ellipses"></div>
      <div className="not-found__content">
        {" "}
        <h2 title="404">404</h2>
        <p title="Page not found">
          {Dictionary[lang]["signal_lost_in_space"]}
        </p>
      </div>
    </Div>
  );
}
