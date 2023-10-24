import "./Hexagon.scss";
import Image from "next/image";
export default function Hexagon() {
  return (
    <section className="hexagon">
      <div className="hexagon__inner">
        <div className="hexagon__row">
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
        </div>

        <div className="hexagon__row even">
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
        </div>

        <div className="hexagon__row">
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item">
            {" "}
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item">
            {" "}
            <div className="hexagon__hover"></div>
          </div>
        </div>

        <div className="hexagon__row even">
          <div className="hexagon__item">
            {" "}
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item"></div>
          <div className="hexagon__item">
            {" "}
            <div className="hexagon__hover"></div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
        </div>

        <div className="hexagon__row">
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item" style={{ opacity: 0 }}></div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
          <div className="hexagon__item">
            <div className="hexagon__hover"></div>
            <div className="hexagon__item-img">
              <Image src="/1.jpg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
