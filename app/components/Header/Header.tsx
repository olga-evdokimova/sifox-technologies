import Link from "next/link";
import "./Header.scss";
import Image from "next/image";
export default function Header() {
  return (
    <header className="header header-container">
      <Link href={"/"} className="header__logo">
        <Image src={"/logo.svg"} alt="logo" width={100} height={46}></Image>
          </Link>
          <Link href={"#"} className="header__btn"></Link>
          <div className="header__burger">
              
          </div>
    </header>
  );
}
