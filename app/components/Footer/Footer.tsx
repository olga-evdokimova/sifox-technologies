"use client";
import Link from "next/link";
import "./Footer.scss";
import Copyright from "../Copyright/Copyright";
import { PullState } from "../../components/PullState/PullState";
import { Dictionary } from "../../components/PullState/Dictionary";
export default function Footer() {
  const lang = PullState.useState((state) => state.lang);
  return (
    <footer className="footer container">
      <Copyright />
      <Link href={`/privacy-policy`} className="footer__privacy">
        {Dictionary[lang]["privacy_policy"]}
      </Link>
    </footer>
  );
}
