import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    top: 20px;
    right: 20px;
  }
  span {
    width: 45px;
    height: 2px;
    background-color: ${({ open }) =>
      open ? "var(--color-text-black)" : "var(--color-text-white)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    margin-bottom: 10px;
    margin-left: auto;
    &:last-child {
      width: 40px;
      margin-bottom: 0;
    }
    &:first-child {
      width: 50px;
    }
    &:nth-child(1) {
      transform: ${({ open }) =>
        open
          ? "rotate(45deg) translate(0px, -7px)"
          : "rotate(0) translate(0)"};
    }

    &:nth-child(2) {
      //   transform: ${({ open }) =>
        open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(0px, 7px)" : "rotate(0) translate(0)"};
          width: ${({ open }) => (open ? "50px" : "40px")};
    }
    w
  }
`;

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
}
