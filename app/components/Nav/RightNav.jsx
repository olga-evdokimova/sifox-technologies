import Link from "next/link";
import React, { useState} from "react";
import "./style.scss";

export default function RightNav({ open }) {
  const [showListB2C, setShowListB2C] = useState(false);
  const [showListB2B, setShowListB2B] = useState(false);
  const [buttonColorB2B, setButtonColorB2B] = useState("black");
  const [buttonColorB2C, setButtonColorB2C] = useState("black");
  const [BorderB2C, setBorderB2C] = useState(true);
  const [BorderB2B, setBorderB2B] = useState(true);
  

  const handleItemClickB2C = () => {
    setShowListB2C(!showListB2C);
    setButtonColorB2C((prevColor) =>
      prevColor === "black" ? "#e0933e" : "black"
    );
    setBorderB2C((prevBorder) => !prevBorder);
  };

  const handleItemClickB2B = () => {
    setShowListB2B(!showListB2B);
    setButtonColorB2B((prevColor) =>
      prevColor === "black" ? "#e0933e" : "black"
    );
    setBorderB2B((prevBorder) => !prevBorder);
  };

  return (
    <ul open={open} className="ul">
      <li
        className="nav-menu"
        style={{
          color: buttonColorB2C,
          borderBottom: BorderB2C ? "2px solid black" : "none",
        }}
        onClick={handleItemClickB2C}
      >
        B2C
      </li>
      {showListB2C && (
        <ul className="nav-menu__list">
          <li className="nav-menu__list-item">
            <Link href={"/products/b2c-data-voice-sharing"}>
              Data & Voice Sharing<span>Family</span>
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={"/products/b2c-data-voice-cost-sharing"}>
              Data & Voice Cost Sharing<span>Friends and social buying</span>
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={"/products/b2c-social-network-bundles"}>
              Social Network Bundles<span>Individuals and social buying</span>
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={"/products/b2c-airtime-credit"}>
              Airtime Credit<span>Individuals</span>
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={"/products/b2c-content-services"}>
              Content Services<span>Individuals</span>
            </Link>
          </li>
          {/* <li className="nav-menu__list-item">
              <Link href={"/products/b2c-cvm-campaigns-management"}>
                CVM campaigns management
                <span>HV customers</span>
              </Link>
            </li> */}
        </ul>
      )}
      <li
        className="nav-menu"
        style={{
          color: buttonColorB2B,
          borderBottom: BorderB2B ? "2px solid black" : "none",
        }}
        onClick={handleItemClickB2B}
      >
        B2B
      </li>
      {showListB2B && (
        <ul className="nav-menu__list">
          <li className="nav-menu__list-item">
            <Link href={""}>
              Data & Voice Sharing<span>Family</span>
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={""}>
              Data & Voice Cost Sharing<span>Friends and social buying</span>
            </Link>
          </li>
          <li className="nav-menu__list-item">
            <Link href={""}>
              Social Network Bundles<span>Individuals and social buying</span>
            </Link>
          </li>
        </ul>
      )}
    </ul>
  );
}
