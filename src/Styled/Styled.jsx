import styled from "styled-components";
import Div100vh from "react-div-100vh";

export const AppContainer = styled(Div100vh)`
  width: 100vw;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ff00ff20;
    background-color: #ff00ff00;
    z-index: 1000;
  }
  &::after{
    width: 1px;
    height: 100%;
  }
`;
