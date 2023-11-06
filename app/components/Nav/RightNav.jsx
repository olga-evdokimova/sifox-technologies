import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--color-text-white);
  position: absolute;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 140px;
  transition: transform 0.3s ease-in-out;
  padding: 80px 40px 0;
  z-index: 100;
  overflow: auto;
  @media (max-width: 767px) {
    padding: 60px 20px 0 20px;
  }
  .nav-menu {
    font-weight: 700;
    font-size: 20px;
    padding: 0 0px 5px;
    margin: 50px 10px 0;
    cursor: pointer;
    &__list {
      padding: 30px 60px 20px 60px;
      transform: translateX(100%);
      animation: slideIn 0.5s ease-in-out forwards;
      @media (max-width: 767px) {
        padding: 20px 0 0px;
      }
      @media (max-width: 375px) {
        width: 100vw;
      }
      &-item {
        color: var(--color-text-black);
        text-align: right;

        a {
          display: block;
          font-weight: 400;
          font-size: 20px;
          padding: 0 0 30px 0;
        }
        span {
          display: block;
          font-style: italic;
          opacity: 0.3;
        }
      }
    }
  }
  @keyframes slideIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const Li = styled.li`
  color: ${(props) =>
    props.clicked ? "var(--color-accent)" : "var(--color-text-black)"};
  border-bottom: ${(props) =>
    props.clicked
      ? "2px solid transparent"
      : "2px solid var(--color-text-black)"};
`;

export default function RightNav({ open }) {
  const [showListB2C, setShowListB2C] = useState(false);
  const [showListB2B, setShowListB2B] = useState(false);
  const [isB2CClicked, setIsB2CClicked] = useState(false);
  const [isB2BClicked, setIsB2BClicked] = useState(false);

  const handleItemClickB2C = () => {
    setShowListB2C(!showListB2C);
    setIsB2CClicked(!isB2CClicked);
  };

  const handleItemClickB2B = () => {
    setShowListB2B(!showListB2B);
    setIsB2BClicked(!isB2BClicked);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <Ul open={open}>
        <Li
          className="nav-menu"
          clicked={isB2CClicked}
          onClick={handleItemClickB2C}
        >
          B2C
        </Li>
        {showListB2C && (
          <ul className="nav-menu__list">
            <li className="nav-menu__list-item">
              <Link href={""} >
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
        <Li
          className="nav-menu"
          clicked={isB2BClicked}
          onClick={handleItemClickB2B}
        >
          B2B
        </Li>
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
      </Ul>
    </StyleSheetManager>
  );
}
