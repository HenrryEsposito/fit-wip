import React, { useEffect } from "react";
import { Container, ContainerWave } from "./style";
import SimpleLogo from "../../atoms/SimpleLogo/SimpleLogo";
import Wave from "react-wavify";
import { useDetailContext } from "../../../contexts/detail/useDetail";
import { useNavigate } from "react-router-dom";

export default function DetailPage() {
  const { detail, thumbPath } = useDetailContext();
  const navigate = useNavigate();

  return (
    <>
      <ContainerWave>
        <Wave
          className="wave"
          fill="#8b3365"
          paused={false}
          options={{
            height: 40,
            amplitude: 2.5,
            speed: 0.2,
            points: 3,
          }}
        />
      </ContainerWave>
      <Container onClick={() => navigate("/list")}>
        <SimpleLogo className="logo" />
        <div className="card-thumb">
          <img src={thumbPath} alt="ilustração sobre o exercício" />
        </div>
        <p className="card-description">{detail}</p>
      </Container>
    </>
  );
}
