"use client";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.div`
  position: absolute;
  top: 6px;
  left: 160px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 600;
  display: none;
  :hover {
    .cases__item {
      display: flex;
    }
  }
`;

export default function ButtonWithTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      i
      {showTooltip && (
        <div className="tooltip">
          <h6>Data distribution</h6>
          <p>
            Advantages of working with us Advantages of working with
            usAdvantages of working
          </p>
        </div>
      )}
    </Button>
  );
}
