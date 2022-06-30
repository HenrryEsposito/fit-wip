import React, { useState } from "react";
import Background from "../../atoms/Background/Background";
import CircleContainer from "../../atoms/CircleContainer/CircleContainer";
import { Container } from "./style";
import { Container as MuiContainer } from "@mui/material";
import PopContainer from "../../atoms/PopContainer/PopContainer";
import { useSwipeable } from "react-swipeable";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";

export default function WeightPage() {
  const [weight, setWeight] = useState<number>(70);
  const [animateEnd, setAnimateEnd] = useState<boolean>(false);

  const navigate = useNavigate();

  const gestures = useSwipeable({
    onSwipedUp: () => {
      if (weight < 300) setWeight(weight + 5);
    },
    onSwipedDown: () => {
      if (weight > 20) setWeight(weight - 5);
    },
  });

  const endAnimation = () => {
    setAnimateEnd(true);

    setTimeout(() => {
      navigate("/list");
    }, 800);
  };

  return (
    <Backdrop open {...gestures} onClick={() => endAnimation()}>
      <Container>
        <Background id="back">
          <>
            <CircleContainer
              className={`circle ${animateEnd ? "end-circle" : ""}`}
            >
              <>
                <PopContainer duration=".2">
                  <>
                    {weight}
                    <small>kg</small>
                  </>
                </PopContainer>
              </>
            </CircleContainer>
            <MuiContainer id="pageInfo" maxWidth="sm" sx={{ py: 3, px: 4 }}>
              Por favor defina seu peso estimado arrastando para cima ou para
              baixo e assim que estiver satisfeito toque na tela para continuar.
            </MuiContainer>
          </>
        </Background>
      </Container>
    </Backdrop>
  );
}
