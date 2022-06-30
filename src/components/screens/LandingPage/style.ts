import styled from "styled-components";
import { Pop, FadeIn, PushUp } from "../../../global/styles/globalAnimations";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  #back {
    display: flex;
    align-items: center;
  }

  #circle {
    animation: ${FadeIn} 0.6s, ${PushUp} 0.6s;
    transition-timing-function: ease-in-out;
  }

  #logo {
    animation-name: ${Pop};
    animation-duration: 0.7s;
    transition-timing-function: ease-in-out;
  }
`;
