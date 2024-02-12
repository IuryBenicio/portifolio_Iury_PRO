import { createGlobalStyle, keyframes } from "styled-components";

export const Cores = {
  cor2background: "#102226",
  cor1background: "#17384c",
  white: "white",
};

export const MediaQuery = {
  pcWidth: "1024px",
  cellWidth: "430px",
};

export const DegradeAnimation = keyframes`
  0% {
    background-position-x: 0%;
  }
  100%{
    background-position-x: 100%;
  }
`;

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        list-style: none;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
    }
    body{
        background-image: linear-gradient(to left, ${Cores.cor2background}, ${Cores.cor1background});
        animation: ${DegradeAnimation} 5s infinite alternate;
        background-size: 500% 100%;
      .no-margin{
        margin: 0;
      }
    }

    section{
        padding-bottom: 50px;
    }

    .container{
        max-width: ${MediaQuery.pcWidth};
        margin: 0 auto;
    }
`;
