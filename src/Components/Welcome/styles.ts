import styled, { keyframes } from "styled-components";

export const Welcome = styled.div`
  .display_off {
    display: none;
  }
`;

export const ContainerWelcomeHero = styled.div`
  overflow: hidden;
  transition-property: all;
  transition-duration: 1.5s;
  transition-timing-function: ease;

  &.is_off_all {
    width: 100%;
    transform: translateY(-100vh);
    opacity: 0;
  }
`;

export const WelcomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  transition: all ease-in-out 1s;
  overflow: hidden;

  &.is_off {
    position: absolute;
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  h1 {
    color: white;
    font-weight: 500;
    font-size: 40px;
    cursor: default;
  }
  label {
    text-align: center;
    margin: 20px 0;
    font-size: 25px;
    color: white;
    input {
      margin: 0 auto;
      margin-top: 10px;
      display: block;
      border: none;
      background: none;
      border-bottom: 1px solid white;
      color: white;
      font-size: 18px;
      text-align: center;
    }
    input:focus {
      outline: none;
    }
  }
  a {
    color: white;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    transition: 1s;
  }
  a:hover {
    color: black;
  }
`;

const Degrade = keyframes`
  0% {
    background-position-x: 0%;
  }
  100%{
    background-position-x: 100%;
  }
`;

export const BackGroundDegradê = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to left, #157a8c, #106b87, #003f69);
  background-size: 500% 100%;
  z-index: -1;
  animation: ${Degrade} 5s infinite alternate;
`;
