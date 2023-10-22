import Title from "../Title/Title";
import "./Platform.scss";
import Image from "next/image";
export default function Platform() {
  return (
    <section className="platform container">
      <div className="platform__img">
        <Image src={"/platform-img.png"} alt="logo" fill></Image>
      </div>
      <div className="platform__wrap">
        <div className="platform__card">
          <Title>40%</Title>
          <p className="platform__card-text">
            In Sub-Saharan Africa, 40% of the adult population are now connected
            to mobile internet services.
          </p>
        </div>
        <div className="platform__card">
          <Title>61%</Title>
          <p className="platform__card-text">
            By 2025, smartphones will account for 61% of total connections, on
            average, in Sub-Saharan Africa
          </p>
        </div>
        <div className="platform__card">
          <Title>11 GB</Title>
          <p className="platform__card-text">
            Mobile data consumption in Sub-Saharan Africa will nearly quadruple
            to reach 11GB per by 2027, though it will continue to lag behind the
            global average by a wide margin
          </p>
        </div>
        <div className="platform__card">
          <Title>613 million</Title>
          <p className="platform__card-text">
            The total number of mobile service subscribers in Sub-Saharan Africa
            will reach 613 million by 2025 (50% of the region's population)
          </p>
        </div>
        <div className="platform__card">
          <Title>$57,4 billion</Title>
          <p className="platform__card-text">
            Mobile revenue will grow steadily and reach $57,4 billion by 2025
            thanks in part to rising data usage
          </p>
        </div>
      </div>
    </section>
  );
}
