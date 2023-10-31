import "./TopBlock.scss";
import Link from "next/link";


export default function TopBlock() {
  return (
    <section className="top-block container">
      <h1>
        Connecting the World:
        <br />
        Empowering Telecoms for Seamless
        <br />
        Data and Voice Access
      </h1>
      <ul className="top-block__list">
        <li>
          <Link href="#">
            B2B
            <br />
            Products
          </Link>
        </li>
        <li>
          <Link href="#">
            B2C
            <br />
            Products
          </Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
      </ul>
      
    </section>
  );
}
