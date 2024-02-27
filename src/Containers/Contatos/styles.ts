import styled, { keyframes } from "styled-components";

const ContatosExpand = keyframes`
  0%{
    height: 0;
  }

  50%{
    height: 50%;
  }
  
  100%{
    height: 100%;
  }
`;

export const ContainerForm = styled.div`
  height: 0;
  overflow: hidden;
  &.is_on {
    padding-top: 25px;
    animation: ${ContatosExpand} 1s ease both;
  }
`;

export const ContatosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  width: 500px;
  .Title {
    font-size: 25px;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    img {
      width: 40px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
  &:not(:first-child) {
    display: flex;
  }
  form {
    width: 100%;
    color: white;
    label:not(:first-child) {
      margin: 8px 0;
    }
    label {
      display: block;
      span {
        font-size: 24px;
      }
      input,
      textarea {
        /* border-radius: 8px; */
        padding: 5px;
        width: 100%;
        margin-top: 8px;
      }
      textarea {
        resize: none;
      }
    }
    button {
      width: 100%;
      padding: 8px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-size: 24px;
      background-color: #24b399;
      color: white;
      transition: all ease 0.7s;
    }
    button:hover {
      background-color: #5bcfe3;
      border-radius: 0;
    }
    button:active {
      background-color: #5ba4e3;
    }
  }
`;

export const RedesSociais = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 34px;
  margin-top: 16px;
  padding-bottom: 0;

  img {
    width: 50px;
    cursor: pointer;
  }
`;
