import * as React from "react";
import Background from "../../atoms/Background/Background";
import CircleContainer from "../../atoms/CircleContainer/CircleContainer";
import SimpleLogo from "../../atoms/SimpleLogo/SimpleLogo";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/tuto");
  }, 3000);

  return (
    <Container>
      <Background id="back">
        <CircleContainer id="circle">
          <SimpleLogo id="logo" />
        </CircleContainer>
      </Background>
    </Container>
  );
}
