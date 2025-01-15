"use client";
import Image from "next/image";
import "./MainImage.scss";
export default function MainImage() {
  return (
    <div>
      <div className="main__img">
        <Image
          src={"/new/main-new.webp"}
          alt="background image"
          fill
          sizes="(max-width: 768px) 180px 600px"
          priority
        ></Image>
      </div>
      <div className="main__ellipses"></div>
    </div>
  );
}
