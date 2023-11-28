//@ts-nocheck
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.scss";
import Image from "next/image";
import Burger from "../Nav/Burger";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LanguageButton from "../LanguageButton/LanguageButton";

export default function Header() {
  // Эта строка использует хук `usePathname` из пакета `next/navigation` для получения пути к текущей странице. Хук `usePathname` возвращает текущий путь в виде строки.
  const pathname = usePathname();
  //  Эта строка сравнивает переменную `pathname` с `"/"`, которая представляет собой домашнюю страницу. Если `pathname` равна `"/"`, то переменная `isHomePage` будет `true`. В противном случае она будет равна `false`.
  const isHomePage = pathname === "/";

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
          smooth={true}
          duration={1500}
          className="header__btn"
          onClick={scrollToContacts}
        >
          Contact us
        </ScrollLink>
      )}
      <Burger />
      <div className="blur"></div>
    </header>
  );
}
