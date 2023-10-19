//@ts-nocheck
"use client";
import React, { useRef, useContext, forwardRef} from "react";
import useOnClickOutside from "../../hooks/onClickOutside";
import { MenuContext } from "../../context/navState";
import HamburgerButton from "./HamburgerButton";
import { SideMenu } from "./SideMenu";
import "./Header.scss";

export default function BurgerMenu() {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <div className="burger">
      <div className="burger__wrap">
        <HamburgerButton ref={node} />
      </div>
      <SideMenu />
    </div>
  );
}
