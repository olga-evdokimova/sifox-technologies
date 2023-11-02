import Link from "next/link";
import "./About.scss";
import AcccentTitle from "../AcccentTitle/AccentTitle";


export default function About() {
  return (
    <section className="about"id="about">
      <div className="about__content">
        <Link href="#">
          <AcccentTitle>About the company</AcccentTitle>
        </Link>
        <h4 className="about__title">
          Providing cutting-edge solutions for mobile communications worldwide.
        </h4>
        <p className="about__text">
          With an international team of seasoned professionals, we specialize in
          creating highly adaptable and robust products for seamless data
          provisioning, efficient data and voice sharing, innovative data
          gifting, as well as streamlined data and voice distribution.
        </p>
        <p className="about__text">
          Backed by unmatched technical assistance, our 5-star user interfaces,
          available on both mobile and browser platforms, guarantee a
          user-friendly experience, enabling our clients to effortlessly stay
          connected and communicate seamlessly worldwide.
        </p>
      </div>
    </section>
  );
}
