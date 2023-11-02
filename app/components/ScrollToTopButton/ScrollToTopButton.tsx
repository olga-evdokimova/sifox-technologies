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
      &#11014;
    </button>
  );
}
