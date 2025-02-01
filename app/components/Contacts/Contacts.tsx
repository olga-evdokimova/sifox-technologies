"use client";
import Link from "next/link";
import AcccentTitle from "../AcccentTitle/AccentTitle";
import "./Contacts.scss";
import Form from "../Form/Form";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function Contacts() {
  const lang = PullState.useState((state) => state.lang);
  return (
    <section className="container " id="contacts">
      <h2 className="text-[30px] text-[var(--color-accent)] font-semibold pb-[40px] tablet:pb-[30px]">
        {Dictionary[lang]["сontacts"]}
      </h2>
      <div className="text-[var(--color-text-white)] opacity-[0.5] pb-[20px]">
        Office locations:
      </div>
      <div className="flex gap-[50px] pb-[150px] tablet:pb-[100px] tablet:flex-wrap tablet:w-[330px] tablet:gap-[30px]">
        <div>
          <div className="pb-[30px] pl-[23px] flex gap-[5px] relative">
            <svg
              className="absolute left-0"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4375 9.82373C15.4375 13.7073 11.2852 16.3551 9.92541 17.1181C9.65854 17.2678 9.34146 17.2678 9.07459 17.1181C7.71483 16.3551 3.5625 13.7073 3.5625 9.82373C3.5625 6.26123 6.43942 3.88623 9.5 3.88623C12.6667 3.88623 15.4375 6.26123 15.4375 9.82373Z"
                stroke="#E0933E"
              />
              <circle cx="9.5" cy="9.82389" r="2.66667" stroke="#E0933E" />
            </svg>
            {Dictionary[lang]["5th_floor"]}
          </div>
          <div className="pl-[23px] relative">
            <div className="flex gap-[5px]">
              <div className=" ">
                <svg
                  className="absolute left-0"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4375 9.82373C15.4375 13.7073 11.2852 16.3551 9.92541 17.1181C9.65854 17.2678 9.34146 17.2678 9.07459 17.1181C7.71483 16.3551 3.5625 13.7073 3.5625 9.82373C3.5625 6.26123 6.43942 3.88623 9.5 3.88623C12.6667 3.88623 15.4375 6.26123 15.4375 9.82373Z"
                    stroke="#E0933E"
                  />
                  <circle cx="9.5" cy="9.82389" r="2.66667" stroke="#E0933E" />
                </svg>
                <div className="text-[var(--color-text-white)] opacity-[0.5] pb-[5px]">
                  {Dictionary[lang]["Lithinjm_Consulting_Africa"]}
                </div>
              </div>
            </div>
            <div>{Dictionary[lang]["Cocody_II_Plateaux"]}</div>
          </div>
        </div>
        <div>
          <div className="flex gap-[5px] pb-[30px] relative pl-[23px]">
            <svg
              className="absolute left-0"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4375 9.82373C15.4375 13.7073 11.2852 16.3551 9.92541 17.1181C9.65854 17.2678 9.34146 17.2678 9.07459 17.1181C7.71483 16.3551 3.5625 13.7073 3.5625 9.82373C3.5625 6.26123 6.43942 3.88623 9.5 3.88623C12.6667 3.88623 15.4375 6.26123 15.4375 9.82373Z"
                stroke="#E0933E"
              />
              <circle cx="9.5" cy="9.82389" r="2.66667" stroke="#E0933E" />
            </svg>
            {Dictionary[lang]["primrose_drive"]}
          </div>
          <div className="flex gap-[5px] relative pl-[23px]">
            <svg
              className="absolute left-0"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4375 9.82373C15.4375 13.7073 11.2852 16.3551 9.92541 17.1181C9.65854 17.2678 9.34146 17.2678 9.07459 17.1181C7.71483 16.3551 3.5625 13.7073 3.5625 9.82373C3.5625 6.26123 6.43942 3.88623 9.5 3.88623C12.6667 3.88623 15.4375 6.26123 15.4375 9.82373Z"
                stroke="#E0933E"
              />
              <circle cx="9.5" cy="9.82389" r="2.66667" stroke="#E0933E" />
            </svg>
            {Dictionary[lang]["silikin_village"]}
          </div>
        </div>
        <Link
          href="mailto:info@sifoxtech.com"
          className="relative pl-[55px] cursor-custom"
        >
          <svg
            className="absolute left-0"
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.82373" width="48" height="48" rx="3" fill="white" />
            <rect
              x="7"
              y="13.3237"
              width="34"
              height="24"
              rx="2"
              fill="#0A0714"
            />
            <path
              d="M6 14.3237L23.6801 26.9049C24.0314 27.1549 24.5035 27.1516 24.8512 26.8966L42 14.3237"
              stroke="white"
              stroke-width="3"
            />
          </svg>
          <div className="text-[var(--color-text-white)] opacity-[0.5] pb-[10px]">
            mail:
          </div>
          <div>info@sifoxtech.com</div>
        </Link>
      </div>
    </section>
  );
}
