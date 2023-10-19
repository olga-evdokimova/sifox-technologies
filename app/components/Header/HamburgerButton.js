
import React, { useContext, forwardRef } from "react";
import { MenuContext } from "../../context/navState";
import "./Header.scss";

const HamburgerButton = forwardRef((props, ref) => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <button
      ref={ref}
      className={`burger__btn ${isMenuOpen ? "active" : ""}`}
      onClick={clickHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
});
HamburgerButton.displayName = "HamburgerButton";
export default HamburgerButton;
