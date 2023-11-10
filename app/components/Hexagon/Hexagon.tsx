
"use client";
import "./Hexagon.scss";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Title from "../Title/Title";
import Link from "next/link";
 
export default function Hexagon(props: any) {
  const hexagonRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [styleName, setStyleName] = useState<string>("style_left")
  

  return (
    <section className="hexagon" ref={hexagonRef}>
      <div className={`hexagon__inner ${styleName}`}>
        <div className="hexagon__block-left" ref={leftRef} id="b2b">
          {" "}
          <div className="hexagon__nav left">
            <Title>B2B Products</Title>
            <button
              onClick={() => {
                setStyleName("style_right");
              }}
            >
              B2C <span>PRODUCTS</span>{" "}
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
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <p>
              Cost savings. Enhanced flexibility. Improved voice and data
              management.
            </p>
          </div>
        </div>
        <div className="hexagon__block-right" ref={rightRef} id="b2c">
          <div className="hexagon__nav right">
            <Title>B2C Products</Title>
            <button
              onClick={() => {
                setStyleName("style_left");
              }}
            >
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
                  strokeLinecap="round"
                />
              </svg>
              B2B <span>PRODUCTS</span>
            </button>
            <p>
              Cost savings. Enhanced flexibility. Improved voice and data
              management.
            </p>
          </div>
        </div>
        <div className="hexagon__row">
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__content">
              <Link href={"/products/b2c-data-voice-sharing"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                Data & Voice
                <br />
                Sharing{" "}
              </h6>
              <p>Family</p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-1.png" alt="" fill sizes="1000" />
            </div>
          </div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
        </div>

        <div className="hexagon__row even">
          <div className="hexagon__item">
            <div className="hexagon__content">
              <Link href={"/products/b2b-data-voice-sharing"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                Data & Voice
                <br />
                Sharing{" "}
              </h6>
              <p>
                Small and micro
                <br />
                business
              </p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2b/b2b-1.png" alt="" fill sizes="1000" />
            </div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__content">
              <Link href={"/products/b2b-data-sponsorship-or-gifting"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                Data Sponsorship
                <br />
                or Gifting
              </h6>
              <p>
                Enterprises and <br /> Governments
              </p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2b/b2b-4.png" alt="" fill sizes="1000" />
            </div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__content">
              <Link href={"/products/b2c-cvm-campaign-management"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                CVM campaigns
                <br />
                management
              </h6>
              <p>HV customers</p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-2.png" alt="" fill sizes="1000" />
            </div>
          </div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
        </div>

        <div className="hexagon__row">
          <div className="hexagon__item">
            <div className="hexagon__content">
              <Link href={"/products/b2b-reverse-billing"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                Reverse
                <br />
                Billing
              </h6>
              <p>
                Enterprises and <br /> Governments
              </p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2b/b2b-2.png" alt="" fill sizes="1000" />
            </div>
          </div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item">
            {" "}
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item">
            <div className="hexagon__content">
              <Link href={"/products/b2c-data-voice-cost-sharing"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                Data & Voice
                <br />
                Cost Sharing
              </h6>
              <p>
                Friends and social
                <br /> buying
              </p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-6.png" alt="" fill sizes="1000" />
            </div>
          </div>
          <div className="hexagon__item">
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
            <div className="hexagon__content">
              <Link href={"/products/b2c-social-network-bundles"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                Social Network
                <br />
                Bundles
              </h6>
              <p>
                Individuals and social
                <br /> buying
              </p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-4.png" alt="" fill sizes="1000" />
            </div>
          </div>
        </div>

        <div className="hexagon__row">
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__content">
              <Link href={"/products/b2b-data-voice-distribution"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                Data & Voice
                <br />
                Distribution
              </h6>
              <p>
                Distributors and
                <br /> resellers
              </p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2b/b2b-3.png" alt="" fill sizes="1000" />
            </div>
          </div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__content">
              <Link href={"/products/b2c-airtime-credit"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                Airtime
                <br />
                Credit
              </h6>
              <p>Individuals</p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-5.png" alt="" fill sizes="1000" />
            </div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__content">
              <Link href={"/products/b2c-content-services"}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3938 16.9973L16.3938 1.99731M16.3938 1.99731H1.3938M16.3938 1.99731V16.9973"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
              <h6>
                Content
                <br />
                Service
              </h6>
              <p>Individuals</p>
            </div>{" "}
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-3.png" alt="" fill sizes="1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
