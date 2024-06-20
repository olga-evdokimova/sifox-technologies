"use client";
import { useEffect } from "react";

export default function ScrollToTopButton() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const button = document.getElementById("scrollToTopButton");

      if (button) {
        if (scrollTop > 300) {
          button.style.display = "flex";
        } else {
          button.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button id="scrollToTopButton" onClick={scrollToTop}>
      <svg
        width="22"
        height="13"
        viewBox="0 0 22 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 12L11 2L21 12"
          stroke="#252B3A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
