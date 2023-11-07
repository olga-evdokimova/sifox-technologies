//@ts-nocheck
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.scss";
import Image from "next/image";
import Burger from "../Nav/Burger";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

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
      {/* Это условный оператор, который проверяет, является ли переменная
      isHomePage истинной. Если переменная истинна, то код, заключенный в
      круглые скобки, будет отображен. Если значение равно false, то код будет
      пропущен. */}
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


