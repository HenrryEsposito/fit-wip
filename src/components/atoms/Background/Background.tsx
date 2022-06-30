import React from "react";
import { Container } from "./style";

export interface IBackground extends React.HTMLAttributes<Element> {
  children?: JSX.Element;
}

export default function Background({ children, ...rest }: IBackground) {
  return <Container {...rest}>{children}</Container>;
}
