import Link from "next/link";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <Link href="#">About us</Link>
      <h3 className="about__title">
        We create digital products and services for ambitious startups and
        companies
      </h3>
      <p className="about__text">
        We will analyze the business and conduct research to develop and
        maintain an effective product. If necessary, we will update the identity
        or make branding from scratch.
          </p>
    </section>
  );
}
