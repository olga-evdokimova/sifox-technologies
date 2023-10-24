"use client";
import { useRef } from "react";
import Image from "next/image";
import "../Hexagon/Hexagon.scss";
export default function ScrollableDiv() {
  const divRef = useRef(null);

  function scrollToMiddle() {
    if (divRef.current) {
      const scrollHeight = divRef.current.scrollHeight;
      const clientHeight = divRef.current.clientHeight;
      const middleScroll = (scrollHeight - clientHeight) / 2;
      divRef.current.scrollTo({
        top: middleScroll,
        behavior: "smooth",
      });
    }
  }

  return (
    <div style={{ overflowX: "auto", height: "940px" }}>
      <div className="hexagon__inner" ref={divRef}>
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
      <button onClick={scrollToMiddle}>Прокрутить в середину</button>
    </div>
  );
}

