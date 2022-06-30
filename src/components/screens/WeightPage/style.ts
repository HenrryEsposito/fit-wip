import styled from "styled-components";
import { Expand } from "../../../global/styles/globalAnimations";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  #back {
    display: flex;
    align-items: center;
  }

  .circle {
    font-family: "CreamCake";
    font-size: 150px;
    color: #8b3365;

    small {
      font-size: 40px;
    }
  }

  .end-circle {
    animation: ${Expand} 0.8s forwards;
    transition-timing-function: ease-in-out;
    font-size: 0px;

    small {
      font-size: 0px;
    }
  }

  #pageInfo {
    color: white;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }
`;
