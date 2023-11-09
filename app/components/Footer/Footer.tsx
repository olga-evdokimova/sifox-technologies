import Link from "next/link";
import "./Footer.scss";
import Copyright from "../Copyright/Copyright";

export default function Footer() {
    return (
      <footer className="footer container">
     <Copyright />
        <Link href={"/privacy-policy"} className="footer__privacy">
          privacy policy
        </Link>
      </footer>
    );
}
