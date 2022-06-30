import styled from "styled-components";
import { Expand, FadeOut } from "../../../global/styles/globalAnimations";

export const Container = styled.div`
  h3 {
    font-weight: 200 !important;
    font-size: 28px;
  }

  img {
    height: 300px;
    width: auto;
  }
  .card-thumb {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .card-description {
    color: white;
    padding: 23px;
    font-size: 20px;
  }

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

export const ContainerWave = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: scale(1, 11);
  z-index: -999;
`;
