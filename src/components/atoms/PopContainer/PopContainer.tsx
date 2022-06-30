import * as React from "react";
import { Container } from "./style";

export interface IPopContainer extends React.HTMLAttributes<Element> {
  children?: JSX.Element;
  duration: string;
}

export default function PopContainer({ children, ...rest }: IPopContainer) {
  return <Container {...rest}>{children}</Container>;
}
