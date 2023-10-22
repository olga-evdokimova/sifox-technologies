import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--color-text-white);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 140px;
  transition: transform 0.3s ease-in-out;
  padding: 80px 40px 0;
  .nav-menu {
    font-weight: 700;
    font-size: 20px;
    padding: 0 0px 5px;
    margin: 50px 10px 0;

    &__list {
      padding: 30px 60px 20px 60px;
      //   transform: translateX(100%);
      //   animation: slideIn 0.5s ease-in-out forwards;
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
  //   @keyframes slideIn {
  //     0% {
  //       transform: translateX(100%);
  //     }
  //     100% {
  //       transform: translateX(0);
  //     }
  //   }
`;

const Li = styled.li`
  /* Styles for li */
  color: ${(props) =>
    props.clicked ? "var(--color-accent)" : "var(--color-text-black)"};
  border-bottom: ${(props) =>
    props.clicked
      ? "2px solid transparent"
      : "2px solid var(--color-text-black)"};
`;

const RightNav = ({ open }) => {
  const [showListB2C, setShowListB2C] = useState(false);
  const [showListB2B, setShowListB2B] = useState(false);
  const [isB2CClicked, setIsB2CClicked] = useState(false);
  const [isB2BClicked, setIsB2BClicked] = useState(false);

  const listB2CAnimation = useSpring({
    opacity: showListB2C ? 1 : 0,
    transform: showListB2C ? "translateX()" : "translateX(100%)",
    transition: "all 0.3s ease",
  });

  const listB2BAnimation = useSpring({
    opacity: showListB2B ? 1 : 0,
    transition: "all 0.3s ease",
  });

  const handleItemClickB2C = () => {
    setShowListB2C(!showListB2C);
    setIsB2CClicked(!isB2CClicked);
  };

  const handleItemClickB2B = () => {
    setShowListB2B(!showListB2B);
    setIsB2BClicked(!isB2BClicked);
  };

  return (
    <Ul open={open}>
      <Li
        className="nav-menu"
        clicked={isB2CClicked}
        onClick={handleItemClickB2C}
      >
        B2C
      </Li>
      {showListB2C && (
        <animated.ul className="nav-menu__list" style={listB2CAnimation}>
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
        </animated.ul>
      )}
      <Li
        className="nav-menu"
        clicked={isB2BClicked}
        onClick={handleItemClickB2B}
      >
        B2B
      </Li>
      {showListB2B && (
        <animated.ul className="nav-menu__list" style={listB2BAnimation}>
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
        </animated.ul>
      )}
    </Ul>
  );
};

export default RightNav;