//@ts-nocheck
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.scss";
import Image from "next/image";
import Burger from "../Nav/Burger";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LanguageButton from "../LanguageButton/LanguageButton";
import { PullState } from "../PullState/PullState";
import { Dictionary } from "../PullState/Dictionary";
export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const lang = PullState.useState((state) => state.lang);
  const scrollToContacts = () => {
    scroll.scrollTo({
      smooth: true,
      duration: 500,
      offset: -100,
    });
  };

  return (
    <header className="header">
      <Link href={"/"} className="header__logo">
        <Image src={"/logo.svg"} alt="logo" width={100} height={46} priority />
      </Link>
      <LanguageButton />
      {isHomePage && (
        <ScrollLink
          to="contacts"
          href="#contacts"
          smooth={true}
          duration={1500}
          className="header__btn"
          onClick={scrollToContacts}
        >
          {Dictionary[lang]["contact_us"]}
        </ScrollLink>
      )}
      <Burger />
      <div className="blur"></div>
    </header>
  );
}
