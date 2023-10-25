"use client";
import React, { useRef } from "react";

// export default function Scroll() {
//   const hexagonRef = useRef(null);

//   function scrollHexagon() {
//     if (hexagonRef.current) {
//       hexagonRef.current.scrollBy({
//         left: 1000,
//         behavior: "smooth",
//       });
//     }
//   }

//   return (
//     <div>
//       <button style={{ width: "50px", height: "50px" }} onClick={scrollHexagon}>
//         scroll
//       </button>
//       <div
//         className="hexagon"
//         style={{
//           overflowX: "auto",
//           height: "240px",
//           backgroundColor: "red",
//         }}
//         ref={hexagonRef}
//       >
//         <div
//           className="hexagon__inner"
//           style={{
//             width: "3410px",
//             float: "left",
//             paddingLeft: "13%",
//             paddingTop: "100px",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }



export default function Scroll() {
  const hexagonRef = useRef(null);

  function scrollHexagon() {
    if (hexagonRef.current) {
      const scrollWidth = hexagonRef.current.scrollWidth;
      const clientWidth = hexagonRef.current.clientWidth;
      const halfScroll = (scrollWidth - clientWidth) / 2;
      hexagonRef.current.scrollTo({
        left: halfScroll,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <button style={{ width: "50px", height: "50px" }} onClick={scrollHexagon}>
        scroll
      </button>
      <div
        className="hexagon"
        style={{
          overflowX: "auto",
          height: "240px",
          backgroundColor: "red",
        }}
        ref={hexagonRef}
      >
        <div
          className="hexagon__inner"
          style={{
            width: "3410px",
            float: "left",
            paddingLeft: "13%",
            paddingTop: "100px",
          }}
        ></div>
      </div>
    </div>
  );
}
