"use client";
import "./Hexagon.scss";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Title from "../Title/Title";
import Link from "next/link";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
import SvgArrow from "../SvgArrow";
export type HexagonProps = {};

export default function Hexagon(props: HexagonProps) {
  const hexagonRef = useRef<HTMLElement>(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const styleName = PullState.useState((state) => state.hexagonStyleName);
  const lang = PullState.useState((state) => state.lang);

  useEffect(() => {
    
   
    const windowWidth = window.screen.width;
    if(windowWidth > 768) {
      return;
    }
    if(styleName === "") {
      return;
    }

    let left = 0;

    if (styleName === "style_left" || styleName === "style_left_instant") {
      if (windowWidth <= 1440) {
        left = 135;
        if (windowWidth <= 768) {
          left = 0;
        }
      }

      
      hexagonRef.current?.scrollTo({
        left: 0,
        behavior: styleName === "style_left_instant" ? "auto" : "smooth",
      });
    } else if (styleName === "style_right" || styleName === "style_right_instant") {
      left = 1500
      if (windowWidth <= 1440) {
        left = 1376;
        if (windowWidth <= 1100) {
          left = 850;
          if (windowWidth <= 768) {
            left = 990;
          }
        }
      }

    

      hexagonRef.current?.scrollTo({
        left,
        behavior: styleName === "style_right_instant" ? "auto" : "smooth",
      });
    }

    PullState.update((state) => {
      state.hexagonStyleName = "";
    });

  }, [styleName]);

  return (
    <section className="hexagon" ref={hexagonRef}>
      <div className={`hexagon__inner ${styleName}`}>
        <div className="hexagon__block-left" ref={leftRef} id="b2b">
          {" "}
          <div className="hexagon__nav left">
            <Title>B2B {Dictionary[lang]["products"]}</Title>
            <button
              onClick={() => {
                PullState.update((state) => {
                  state.hexagonStyleName = "style_right";
                });
              }}
            >
              B2C <span>{Dictionary[lang]["products"]}</span>{" "}
              <svg
                width="42"
                height="15"
                viewBox="0 0 42 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5H40.5M40.5 7.5L34 1M40.5 7.5L34 14"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <p>{Dictionary[lang]["cost_savings"]}</p>
          </div>
        </div>
        <div className="hexagon__block-right" ref={rightRef} id="b2c">
          <div className="hexagon__nav right">
            <Title>B2C {Dictionary[lang]["products"]}</Title>
            <button
              onClick={() => {
                PullState.update((state) => {
                  state.hexagonStyleName = "style_left";
                });
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
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              B2B <span>{Dictionary[lang]["products"]}</span>
            </button>
            <p>{Dictionary[lang]["cost_savings"]}</p>
          </div>
        </div>
        <div className="hexagon__row">
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          <Link
            className="hexagon__item"
            href={`/products/${lang}/b2c-data-sharing`}
          >
            <div className="hexagon__content">
              <SvgArrow />
              <div>{Dictionary[lang]["b2c_data_sharing"]}</div>
              <p>{Dictionary[lang]["for_family"]}</p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-1.png" alt="b2c product" fill sizes="180" />
            </div>
          </Link>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
        </div>

        <div className="hexagon__row even">
          <Link
            className="hexagon__item"
            href={`/products/${lang}/b2b-resource-management-platform`}
          >
            <div className="hexagon__content">
              <SvgArrow />

              <div>{Dictionary[lang]["Resource_Management_Platform"]}</div>
              {/* <p>{Dictionary[lang]["for_small_and_micro_business"]}</p> */}
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2b/b2b-1.png" alt="b2b product" fill sizes="180" />
            </div>
          </Link>
          {/* <Link
            className="hexagon__item"
            href={`/products/${lang}/b2b-data-sponsorship-or-gifting`}
          >
            <div className="hexagon__content">
              <SvgArrow />
              <div>{Dictionary[lang]["data_sponsorship_or_gifting"]}</div>
              <p>{Dictionary[lang]["for_enterprises_and_governments"]}</p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2b/b2b-4.png" alt="b2b product" fill sizes="180" />
            </div>
          </Link> */}
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          {/* <Link
            className="hexagon__item"
            href={`/products/${lang}/b2c-cvm-campaign-management`}
          >
            <div className="hexagon__content">
              {" "}
              <SvgArrow />
              <div>{Dictionary[lang]["cvm_campaigns_management"]}</div>
              <p>{Dictionary[lang]["for_nv_customers"]}</p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-2.png" alt="b2c product" fill sizes="180" />
            </div>
          </Link> */}
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
        </div>

        <div className="hexagon__row">
          <Link
            className="hexagon__item"
            href={`/products/${lang}/b2b-reverse-billing`}
          >
            <div className="hexagon__content">
              <SvgArrow />

              <div>{Dictionary[lang]["Reverse_Billing"]}</div>
              {/* <p>{Dictionary[lang]["for_enterprises_and_governments"]}</p> */}
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2b/b2b-2.png" alt="b2b product" fill sizes="180" />
            </div>
          </Link>
          <Link
            className="hexagon__item"
            href={`/products/${lang}/b2b-voice-and-data-distribution-reselling`}
          >
            <div className="hexagon__content">
              <SvgArrow />

              <div>{Dictionary[lang]["Voice_and_data_distribution"]}</div>
              {/* <p>{Dictionary[lang]["for_distributors_and_resellers"]}</p> */}
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2b/b2b-3.png" alt="b2b product" fill sizes="180" />
            </div>
          </Link>

          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item"></div>
          <Link
            className="hexagon__item"
            href={`/products/${lang}/b2c-data-voice-cost-sharing`}
          >
            <div className="hexagon__content">
              <SvgArrow />

              <div>{Dictionary[lang]["data_voice_cost_sharing"]}</div>
              <p>{Dictionary[lang]["for_friends_and_social_buying"]}</p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-6.png" alt="b2c product" fill sizes="180" />
            </div>
          </Link>
          <div className="hexagon__item hexagon__item-hidden">
            <div className="hexagon__hover"></div>
          </div>
        </div>

        <div className="hexagon__row even">
          {/* ---Новая страница--b2b---- */}
          <Link
            className="hexagon__item"
            href={`/products/${lang}/b2b-resource-management-platform`}
          >
            <div className="hexagon__content">
              <SvgArrow />

              <div>{Dictionary[lang]["Resource_Management_Platform"]}</div>
              {/* <p>{Dictionary[lang]["for_small_and_micro_business"]}</p> */}
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2b/b2b-1.png" alt="b2b product" fill sizes="180" />
            </div>
          </Link>
          {/* --------- */}
          <div className="hexagon__item"></div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          <Link
            className="hexagon__item"
            href={`/products/${lang}/b2c-social-network-bundles`}
          >
            <div className="hexagon__content">
              <SvgArrow />

              <div>{Dictionary[lang]["social_network_bundles"]}</div>
              <p>{Dictionary[lang]["for_individuals_and_social_buying"]}</p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-4.png" alt="b2c product" fill sizes="180" />
            </div>
          </Link>
        </div>

        <div className="hexagon__row">
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <Link
            className="hexagon__item"
            href={`/products/${lang}/b2c-airtime-credit`}
          >
            <div className="hexagon__content">
              <SvgArrow />
              <div>{Dictionary[lang]["airtime_credit"]}</div>
              <p>{Dictionary[lang]["for_individual_users"]}</p>
            </div>
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-5.png" alt="b2c product" fill sizes="180" />
            </div>
          </Link>
          {/* <Link
            className="hexagon__item"
            href={`/products/${lang}/b2c-content-services`}
          >
            <div className="hexagon__content">
              <SvgArrow />
              <div>{Dictionary[lang]["content_services"]}</div>
              <p>{Dictionary[lang]["for_individual_users"]}</p>
            </div>{" "}
            <div className="hexagon__hover"></div>
            <div className="hexagon__img">
              <Image src="/b2c/b2c-3.png" alt="b2c product" fill sizes="180" />
            </div>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
