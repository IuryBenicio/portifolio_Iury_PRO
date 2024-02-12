import styled from "styled-components";
import { Cores } from "../../GlobalStyles";

export const Ambicoes = styled.div`
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const BemVindo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 32px 0;
  span {
    font-size: 42px;
    max-width: 600px;
    margin: 0 auto;
  }
  p {
    font-size: 20px;
  }
`;

export const TabButton = styled.div`
  text-align: center;
  z-index: 5;
  border-bottom: 1px solid rgba(240, 240, 240, 0.3);
  width: 700px;
  margin: 70px auto;
  padding-bottom: 8px;
  margin-bottom: 0;
  .on_focus {
    background-color: white;
    color: ${Cores.cor1background};
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  a {
    padding: 8px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-size: 32px;
  }
  a:not(:first-child) {
    margin-left: 75px;
  }
  a:hover {
    background-color: grey;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    color: ${Cores.white};
  }
`;

export const Formacao = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 32px;
    margin-top: 10px;
    /* border-top: 1px solid rgba(240, 240, 240, 0.3); */
  }
  p:not(:first-child) {
    margin-top: 36px;
  }
  span {
    margin-bottom: 10px;
    font-size: 18px;
  }
  span:last-child {
  }
`;

export const Sinopse = styled.div`
  font-size: 21px;
  max-width: 600px;
  margin: 0 auto;
`;

export const TabContainer = styled.div`
  height: 300px;
  p {
    text-align: center;
    margin-bottom: 10px;
  }
  margin-bottom: 50px;
`;

export const TabTextContainer = styled.div`
  padding: 25px;
`;
