import "./AccentTitle.scss";
import React from "react";

interface AcccentTitleProps {
  children: React.ReactNode;
}

export default function AcccentTitle({ children }: AcccentTitleProps) {
  return <h3 className="accent-title">{children}</h3>;
}
