import styled from "styled-components";

export const CardContainer = styled.div`
  border: solid 1px white;
  padding: 20px;
  max-width: 100%;
  border-radius: 20px;
  position: relative;
  margin: 0 auto;
  .Card {
    align-items: center;
  }
  .TextCardContainer {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
  }
  .Card:hover .TextCardContainer {
    display: flex;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  span {
    top: 10px;
    text-decoration: none;
    color: white;
    font-size: 25px;
    line-height: 1;
    cursor: pointer;
  }
  span:hover {
    color: rgba(255, 255, 255, 0.7);
  }
  p {
    width: 80%;
    top: 30px;
    margin-top: 20px;
    font-size: 20px;
  }
`;
