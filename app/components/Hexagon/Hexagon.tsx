//@ts-nocheck
"use client";
import "./Hexagon.scss";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Title from "../Title/Title";

export default function Hexagon() {
  const hexagonRef = useRef(null);


  function scrollHexagon() {
      const left = document.querySelector(".left");
      
    if (hexagonRef.current) {
      let leftValue;

      if (window.innerWidth <= 375) {
        leftValue = 380;
        const currentTransform = left.style.transform || ""; // Get the current transform value
        const newTransform = `${currentTransform} translateX(${leftValue}px)`; // Append the new transform value

        left.style.transform = newTransform; // Apply the updated transform value
      } else if (window.innerWidth <= 768) {
        leftValue = 1000;
      } else {
        leftValue = 1520;
      }
   
      hexagonRef.current.scrollBy({
        left: leftValue,
        behavior: "smooth",
      });
    }
  }
  function scrollToStart() {
    if (hexagonRef.current) {
      let leftValue;

      if (window.innerWidth <= 375) {
        leftValue = -380;
      } else if (window.innerWidth <= 768) {
        leftValue = -1000;
      } else {
        leftValue = -1520;
      }

      hexagonRef.current.scrollBy({
        left: leftValue,
        behavior: "smooth",
      });
    }
  }
  return (
    <section className="hexagon" ref={hexagonRef}>
      <div className="hexagon__inner">
        <div className="hexagon__nav left">
          <Title>B2B Products</Title>
          <button onClick={scrollHexagon}>
            B2B <span>PRODUCTS</span>{" "}
            <svg
              width="42"
              height="15"
              viewBox="0 0 42 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.5H40.5M40.5 7.5L34 1M40.5 7.5L34 14"
                stroke="white"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <p>
            Cost savings. Enhanced flexibility. Improved voice and data
            management.
          </p>
        </div>
        <div className="hexagon__nav right">
          <Title>B2C Products</Title>
          <button onClick={scrollToStart}>
            <svg
              width="42"
              height="15"
              viewBox="0 0 42 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41 7.5H1.5M1.5 7.5L8 1M1.5 7.5L8 14"
                stroke="white"
                stroke-linecap="round"
              />
            </svg>
            B2C <span>PRODUCTS</span>
          </button>
          <p>
            Cost savings. Enhanced flexibility. Improved voice and data
            management.
          </p>
        </div>
        <div className="hexagon__row">
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
        </div>

        <div className="hexagon__row even">
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
        </div>

        <div className="hexagon__row">
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item">
            {" "}
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item">
            {" "}
            <div className="hexagon__hover"></div>
          </div>
        </div>

        <div className="hexagon__row even">
          <div className="hexagon__item">
            {" "}
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item">
            {" "}
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
        </div>

        <div className="hexagon__row">
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

    
}
