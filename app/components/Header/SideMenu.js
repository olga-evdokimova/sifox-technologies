import { ReactNode } from "react";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuContext } from "../../context/navState";
import "./Header.scss";
import Link from "next/link";


export const SideMenu = ({ children } = {}) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
      {children}
      <Link href="/">B2C</Link>
       <Link href="/">B2B</Link>
    </nav>
  );
};

SideMenu.propTypes = {
  children: PropTypes.node,
};