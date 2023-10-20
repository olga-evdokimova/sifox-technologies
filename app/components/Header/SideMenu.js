import { ReactNode } from "react";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuContext } from "../../context/navState";
import "./Header.scss";
import Link from "next/link";


// export const SideMenu = () => {
//   const { isMenuOpen } = useContext(MenuContext);

//   return (
//     <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
//       <div className="nav-menu__dropdown">
//         <div className="nav-menu__btn">B2C</div>
//          <div className="nav-menu__dropdown-menu">
//             <Link href="/">Link 1</Link>
//             <Link href="/">Link 2</Link>
//             <Link href="/">Link 3</Link>
//           </div>
//       </div>
//       <div className="nav-menu__dropdown">
//         <div className="nav-menu__btn">B2B</div>
//          <div className="nav-menu__dropdown-menu">
//             <Link href="/">Link 4</Link>
//             <Link href="/">Link 5</Link>
//             <Link href="/">Link 6</Link>
//           </div>
//       </div>
//     </nav>
//   );
// };

// SideMenu.propTypes = {
//   children: PropTypes.node,
// };


import { useState } from "react";

export const SideMenu = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const [isB2CDropdownOpen, setIsB2CDropdownOpen] = useState(false);
  const [isB2BDropdownOpen, setIsB2BDropdownOpen] = useState(false);

  const toggleB2CDropdown = () => {
    setIsB2CDropdownOpen(!isB2CDropdownOpen);
  };

  const toggleB2BDropdown = () => {
    setIsB2BDropdownOpen(!isB2BDropdownOpen);
  };

  return (
    <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
      <div className="nav-menu__dropdown">
        <div className="nav-menu__btn" onClick={toggleB2CDropdown}>B2C</div>
        {isB2CDropdownOpen && (
          <div className="nav-menu__dropdown-menu">
            <Link href="/">Link 1</Link>
            <Link href="/">Link 2</Link>
            <Link href="/">Link 3</Link>
          </div>
        )}
      </div>
      <div className="nav-menu__dropdown">
        <div className="nav-menu__btn" onClick={toggleB2BDropdown}>B2B</div>
        {isB2BDropdownOpen && (
          <div className="nav-menu__dropdown-menu">
            <Link href="/">Link 4</Link>
            <Link href="/">Link 5</Link>
            <Link href="/">Link 6</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// SideMenu.propTypes = {
//   children: PropTypes.node,
// };
