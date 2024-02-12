import styled from "styled-components";

export const ContatosContainer = styled.div`
  padding-top: 40px;
  width: 500px;
  .Title {
    font-size: 25px;
    text-align: center;
    color: white;
    margin-bottom: 25px;
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
        border-radius: 8px;
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
      transform: scale(1.04);
    }
    button:active {
      background-color: #5ba4e3;
    }
  }
`;

export const RedesSociais = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin-top: 16px;
  padding-bottom: 0;

  img {
    width: 60px;
    cursor: pointer;
  }
`;
