"use client";
import Link from "next/link";
import "./Header.scss";
import Image from "next/image";
import Burger from "../Nav/Burger";
export default function Header() {
  return (
    <header className="header">
      <Link href={"/"} className="header__logo">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={46}
          priority
        ></Image>
      </Link>
      <Link href={"#"} className="header__btn">
        Contact us
      </Link>
      <Burger />
    </header>
  );
}
