"use client";
import Image from "next/image";
import "./MainImage.scss";
export default function MainImage() {
  return (
    <div>
      <div className="main__img">
        <Image
          src={"/main-img.png"}
          alt="background"
          fill
          sizes="1000"
          priority 
        ></Image>
      </div>
      <div className="main__ellipses">
      </div>
    </div>
  );
}
