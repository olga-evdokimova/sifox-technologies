"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./style.scss";
import { usePathname } from "next/navigation";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function RightNav({ open }) {
  const lang = PullState.useState((state) => state.lang);

  const [showListB2C, setShowListB2C] = useState(false);
  const [showListB2B, setShowListB2B] = useState(false);
  const [buttonColorB2B, setButtonColorB2B] = useState("black");
  const [buttonColorB2C, setButtonColorB2C] = useState("black");
  const [BorderB2C, setBorderB2C] = useState(true);
  const [BorderB2B, setBorderB2B] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    {
      setShowListB2C(false);
      setShowListB2B(false);
      setButtonColorB2C("black");
      setButtonColorB2B("black");
      setBorderB2C(true);
      setBorderB2B(true);
    }
  }, [pathname]); 

  const handleItemClickB2C = () => {
    setShowListB2C(!showListB2C);
    setButtonColorB2C((prevColor) =>
      prevColor === "black" ? "#e0933e" : "black"
    );
    setBorderB2C((prevBorder) => !prevBorder);
  };

  const handleItemClickB2B = () => {
    setShowListB2B(!showListB2B);
    setButtonColorB2B((prevColor) =>
      prevColor === "black" ? "#e0933e" : "black"
    );
    setBorderB2B((prevBorder) => !prevBorder);
  };

  return (
    <ul open={open} className="nav">
      <li
        className="nav-menu"
        style={{
          color: buttonColorB2C,
          borderBottom: BorderB2C ? "2px solid black" : "none",
        }}
        onClick={handleItemClickB2C}
      >
        B2C
      </li>
      {showListB2C && (
        <ul className="nav-menu__list">
          <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2c-data-sharing`}>
              {Dictionary[lang]["Data_Sharing"]}
              <span>{Dictionary[lang]["for_family"]}</span>
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2c-data-voice-cost-sharing`}>
              {Dictionary[lang]["data_voice_cost_sharing"]}
              <span>{Dictionary[lang]["For_Friends"]}</span>
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2c-reverse_call`}>
              {Dictionary[lang]["Reverse_Call"]}
              <span>{Dictionary[lang]["For_Individuals"]}</span>
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2c-airtime-credit`}>
              {Dictionary[lang]["airtime_credit"]}
              <span> {Dictionary[lang]["For_individuals"]}</span>
            </Link>
          </li>
          {/* <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2c-content-services`}>
              {Dictionary[lang]["content_services"]}
              <span> {Dictionary[lang]["for_individual_users"]}</span>
            </Link>
          </li> */}
          <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2c-buy-for-me`}>
              {Dictionary[lang]["Buy-For-Me"]}
              <span> {Dictionary[lang]["For_individuals"]}</span>
            </Link>
          </li>
        </ul>
      )}
      <li
        className="nav-menu"
        style={{
          color: buttonColorB2B,
          borderBottom: BorderB2B ? "2px solid black" : "none",
        }}
        onClick={handleItemClickB2B}
      >
        B2B
      </li>
      {showListB2B && (
        <ul className="nav-menu__list">
          <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2b-resource-management-platform`}>
              {Dictionary[lang]["Resource_Management_Platform"]}
              {/* <span>{Dictionary[lang]["for_small_and_micro_business"]}</span> */}
            </Link>
          </li>
          {/* <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2b-data-sponsorship-or-gifting`}>
              {Dictionary[lang]["data_sponsorship_or_gifting"]}
              <span>
                {" "}
                {Dictionary[lang]["for_enterprises_and_governments"]}
              </span>
            </Link>
          </li> */}
          <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2b-reverse-billing`}>
              {Dictionary[lang]["Reverse_Billing"]}
              {/* <span>{Dictionary[lang]["for_enterprises_and_governments"]}</span> */}
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link
              href={`/products/${lang}/b2b-voice-and-data-distribution-reselling`}
            >
              {Dictionary[lang]["Voice_and_data_distribution_reselling"]}
              {/* <span>{Dictionary[lang]["for_distributors_and_resellers"]}</span> */}
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={`/products/${lang}/b2b-data-voice-sms-gifting`}>
              {Dictionary[lang]["Data_Voice_SMS_gifting"]}
              {/* <span>{Dictionary[lang]["for_distributors_and_resellers"]}</span> */}
            </Link>
          </li>
        </ul>
      )}
    </ul>
  );
}
