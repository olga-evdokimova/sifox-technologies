"use client";
import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  .main__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1196px;
    z-index: -3;
    @media (max-width: 768px) {
      height: 812px;
    }
  }
  .main__ellipses {
    position: absolute;
    background-image: url("/main-ellipses.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 2312px;
    height: 1950px;
    top: -740px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -2;
    opacity: 0.8;
    @media (max-width: 992px) {
      background-image: url("/main-ellipses-992.png");
      width: 1200px;
   
      top: -300px;
    }
  }
`;

export default function MainImage() {
  return (
    <Div>
      <div className="main__img">
        <Image
          src={"/main-img.png"}
          alt="background"
          fill
          sizes="1000"
        ></Image>
      </div>
      <div className="main__ellipses">
      </div>
    </Div>
  );
}
