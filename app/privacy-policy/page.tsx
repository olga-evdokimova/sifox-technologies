"use client";
import AcccentTitle from "../components/AcccentTitle/AccentTitle";
import Title from "../components/Title/Title";
import "./style.scss";
import NexLink from "next/link";
import { PullState } from "../components/PullState/PullState";
import { Dictionary } from "../components/PullState/Dictionary";

export default function PrivacyPolicy() {
  const lang = PullState.useState((state) => state.lang);

  return (
    <div className="privacy-policy">
      <div className="privacy-policy__ellipses"></div>
      <NexLink className="privacy-policy__backward" href="/">
        <svg
          width="41"
          height="14"
          viewBox="0 0 41 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 7H1M1 7L7.41772 0.5M1 7L7.41772 13.5"
            stroke="white"
            strokeLinecap="round"
          />
        </svg>
      </NexLink>
      <Title>{Dictionary[lang]["personal_data_conditions"]}</Title>
      <AcccentTitle>{Dictionary[lang]["user_agreement"]}</AcccentTitle>
      <p className="privacy-policy__text">{Dictionary[lang]["welcome_to"]}</p>
      <AcccentTitle>
        1. {Dictionary[lang]["information_collection"]}{" "}
      </AcccentTitle>
      <p className="privacy-policy__text">
        {Dictionary[lang]["sifox_technologies_may_collect"]}
      </p>
      <AcccentTitle>2. {Dictionary[lang]["data_usage"]}</AcccentTitle>
      <p className="privacy-policy__text">
        {Dictionary[lang]["your_personal_information"]}
      </p>
      <AcccentTitle>3. {Dictionary[lang]["data_protection"]}</AcccentTitle>
      <p className="privacy-policy__text">
        {Dictionary[lang]["sifox_technologies_is_committed"]}
      </p>
      <AcccentTitle>4. {Dictionary[lang]["data_sharing"]}</AcccentTitle>
      <p className="privacy-policy__text">
        {Dictionary[lang]["sifox_echnologies_does_not_sell"]}
      </p>
      <AcccentTitle>5. {Dictionary[lang]["cookies_and_tracking"]}</AcccentTitle>
      <p className="privacy-policy__text">
        {Dictionary[lang]["by_using_our_website"]}
      </p>
      <AcccentTitle>6. {Dictionary[lang]["age_restrictions"]}</AcccentTitle>
      <p className="privacy-policy__text">
        {Dictionary[lang]["sifox_technologies_website_is_intended"]}
      </p>
      <AcccentTitle>7. {Dictionary[lang]["changes_to_agreement"]}</AcccentTitle>
      <p className="privacy-policy__text">
        {Dictionary[lang]["sifox_technologies_reserves_the_right"]}
      </p>
      <p className="privacy-policy__text">
        {Dictionary[lang]["by_using_the_sifox_technologies_website"]}
      </p>
      <p className="privacy-policy__text">
        {Dictionary[lang]["for_any_further_information"]}
      </p>
      <p className="privacy-policy__text">{Dictionary[lang]["thank_you"]}</p>
    </div>
  );
}
