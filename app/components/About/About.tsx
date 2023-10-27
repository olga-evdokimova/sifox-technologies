import Link from "next/link";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about__content">
        <Link href="#">About the company</Link>
        <h3 className="about__title">
          Providing cutting-edge solutions for mobile communications worldwide.
        </h3>
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