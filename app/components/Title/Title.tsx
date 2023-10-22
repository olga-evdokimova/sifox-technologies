import { ReactNode } from "react";
import "./Title.scss";
type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: TitleProps) {
  return <h2 className="title">{children}</h2>;
}
