//@ts-nocheck
"use client";

import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
});

export default function NavState({ children }) {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MenuContext.Provider>
  );
}

NavState.propTypes = {
  children: PropTypes.node.isRequired,
};
