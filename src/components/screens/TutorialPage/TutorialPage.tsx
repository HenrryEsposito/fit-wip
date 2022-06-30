import React, { ReactNode, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../atoms/Background/Background";
import CircleContainer from "../../atoms/CircleContainer/CircleContainer";
import { Container } from "./style";
import { Container as MuiContainer } from "@mui/material";
import PopContainer from "../../atoms/PopContainer/PopContainer";
import GestureBackdrop, {
  Gesture,
} from "../../molecules/GestureBackdrop/GestureBackdrop";
import {
  MdSwipe,
  MdOutlineArrowForward,
  MdOutlineArrowBack,
  MdOutlineArrowUpward,
  MdOutlineArrowDownward,
} from "react-icons/md";

interface ITutoStep {
  index: number;
  title: string;
  symbol: ReactNode;
  description: string;
  gestureCallback: any;
  expectedGesture: Gesture;
}

export default function TutorialPage() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const navigate = useNavigate();

  const tutoSteps: ITutoStep[] = useMemo(() => {
    return [
      {
        index: 0,
        title: "First step",
        symbol: <MdSwipe />,
        description:
          "Este aplicativo oferece uma navegação simplificada para que você tenha a melhor experiência. Toque para continuar.",
        gestureCallback: () => setCurrentStep(currentStep + 1),
        expectedGesture: Gesture.Click,
      },
      {
        index: 1,
        title: "Step right",
        symbol: <MdOutlineArrowForward />,
        description:
          "Para escolher as opções disponíveis no momento você deve arrastar para direita ou para esquerda. Comece tentando arrastar para a direita.",
        gestureCallback: () => setCurrentStep(currentStep + 1),
        expectedGesture: Gesture.Right,
      },
      {
        index: 2,
        title: "Step left",
        symbol: <MdOutlineArrowBack />,
        description: "Muito bem! Agora tente arrastar para a esquerda",
        gestureCallback: () => setCurrentStep(currentStep + 1),
        expectedGesture: Gesture.Left,
      },
      {
        index: 3,
        title: "Step up",
        symbol: <MdOutlineArrowUpward />,
        description:
          "Quando quiser interagir com algo que envolva quantidades arraste para cima e para baixo. Comece tentando arrastar para cima.",
        gestureCallback: () => setCurrentStep(currentStep + 1),
        expectedGesture: Gesture.Up,
      },
      {
        index: 4,
        title: "Step down",
        symbol: <MdOutlineArrowDownward />,
        description: "Perfeito! Agora tente arrastar para baixo.",
        gestureCallback: () => navigate("/weight"),
        expectedGesture: Gesture.Down,
      },
    ];
  }, [currentStep]);

  return (
    <>
      <GestureBackdrop
        gestureCallback={tutoSteps[currentStep].gestureCallback}
        actOnDirection={tutoSteps[currentStep].expectedGesture}
      >
        <Container>
          <Background id="back">
            <>
              <CircleContainer id="circle">
                <>
                  <PopContainer duration=".2">
                    <>{tutoSteps[currentStep].symbol}</>
                  </PopContainer>
                </>
              </CircleContainer>
              <MuiContainer id="tutoInfo" maxWidth="sm" sx={{ py: 3, px: 4 }}>
                {tutoSteps[currentStep].description}
              </MuiContainer>
            </>
          </Background>
        </Container>
      </GestureBackdrop>
    </>
  );
}
