import React, { useState, useEffect } from "react";
import RightNav from "./RightNav";
import { usePathname } from "next/navigation";

export default function Burger() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false); 
  }, [pathname]); 

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
      <div className="burger" open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
      <RightNav open={open} />
    </>
  );
}
