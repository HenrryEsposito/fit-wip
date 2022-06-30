import { keyframes } from "styled-components";

export const Pop = keyframes`
 0% {transform: scale(0, 0)}
 70% {transform: scale(1.2, 1.2)}
 100% {transform: scale(1, 1)}
`;

export const PushUp = keyframes`
 0% {transform: translate(0,1000px);}
 80% {transform: translate(0,0px);}
 100% {transform: translate(0,0px);}
`;

export const FadeIn = keyframes`
 0% {opacity: 0;}
 100% {opacity: 1;}
`;

export const FadeOut = keyframes`
 0% {opacity: 1;}
 100% {opacity: 0;}
`;

export const Expand = keyframes`
 0% {transform: scale(1, 1)}
 100% {transform: scale(10, 10)}
`;
