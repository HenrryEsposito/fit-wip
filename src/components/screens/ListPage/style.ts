import styled from "styled-components";
import { Expand, FadeOut } from "../../../global/styles/globalAnimations";

export const Container = styled.div`
  .logo {
    padding: 12px;
    font-size: 80px;
  }

  #back {
    display: flex;
    align-items: center;
    animation: ${FadeOut} 0.8s forwards;
    transition-timing-function: ease-in-out;
  }

  #circle {
    font-family: "CreamCake";
    font-size: 150px;
    color: #8b3365;
    animation: ${Expand} 0.8s forwards;
    transition-timing-function: ease-in-out;
  }
`;
