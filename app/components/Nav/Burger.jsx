import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 150;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 767px) {
    top: 15px;
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
        open ? "rotate(45deg) translate(0px, -7px)" : "rotate(0) translate(0)"};
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
    
  }
`;

export default function Burger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    const pageWidth = document.documentElement.scrollWidth;
    const blur = document.querySelector(".blur");

    if (open) {
      body.style.overflow = "hidden";
      body.style.marginRight = `${body.clientWidth - pageWidth}px`;
      blur.style.display = "block";
    } else {
      body.style.overflow = "auto";
      body.style.marginRight = "0";
      blur.style.display = "none";
    }

  }, [open]);

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
