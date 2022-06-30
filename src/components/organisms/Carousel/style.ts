import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  color: #3d3d3d;

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
    background-color: #e8e1e2;
    border-radius: 20px;
    max-width: 80%;
  }

  .card-description {
    padding: 23px;
    font-size: 20px;
  }
`;
