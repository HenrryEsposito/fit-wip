import * as React from "react";
import { Container } from "./style";

export default function SimpleLogo(props: React.HTMLAttributes<Element>) {
  return (
    <Container {...props}>
      <span>Fit</span>
    </Container>
  );
}
