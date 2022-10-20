import { createGlobalStyle, ThemeProvider } from "styled-components";
import PoppinsRegular from "../assets/fonts/Poppins/Poppins-Regular.otf";
import PoppinsBold from "../assets/fonts/Poppins/Poppins-Bold.otf";
import PoppinsThin from "../assets/fonts/Poppins/Poppins-Thin.otf";
import PoppinsLight from "../assets/fonts/Poppins/Poppins-Light.otf";
import PoppinsExtraBold from "../assets/fonts/Poppins/Poppins-ExtraBold.otf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsRegular});
    font-weight: 400;
  }
  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsBold});
    font-weight: 700;
  }
  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsThin});
    font-weight: 100;
  }
  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsLight});
    font-weight: 300;
  }
  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsExtraBold});
    font-weight: 800;
  }

  html{
    font-size: 16px;
  }

  @media (max-width: 768px) {
    html{
      font-size: 14px;
    }
  }
  @media (max-width: 450px) {
    html{
      font-size: 12px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
