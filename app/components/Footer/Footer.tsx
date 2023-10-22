import Link from "next/link";
import "./Footer.scss";
export default function Footer() {
    return (
      <footer className="footer container">
        <div className="footer__copyright">
          (с) Copywriting, Sifox Technologies | 2023
        </div>
        <Link href={""} className="footer__privacy">
          privacy policy
        </Link>
      </footer>
    );
}
