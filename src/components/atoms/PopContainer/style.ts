import styled from "styled-components";
import { IPopContainer } from "./PopContainer";
import { Pop } from "../../../global/styles/globalAnimations";

export const Container = styled.div<IPopContainer>`
  animation-name: ${Pop};
  animation-duration: ${(props) => {
    return props.duration + "s";
  }};
  transition-timing-function: ease-in-out;
`;
