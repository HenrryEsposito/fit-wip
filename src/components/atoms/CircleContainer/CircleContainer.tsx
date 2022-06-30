import * as React from "react";
import { Container } from "./style";

export interface ICircleContainer extends React.HTMLAttributes<Element> {
  children?: JSX.Element;
}

export default function CircleContainer({
  children,
  ...rest
}: ICircleContainer) {
  return <Container {...rest}>{children}</Container>;
}
