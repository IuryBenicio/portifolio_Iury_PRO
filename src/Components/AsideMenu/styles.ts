import styled from "styled-components";

export const AsideMenuContainer = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  left: 15px;
  top: 15px;
  width: auto;
  padding: 25px;
  &:hover a {
    opacity: 100;
  }
  nav {
    ul {
      padding: 0;
    }
  }
`;

export const AsideNavItem = styled.li`
  align-items: center;
  display: flex;
  img {
    cursor: pointer;
  }
  &:not(:last-child) {
    margin-bottom: 25px;
  }
  .iconItem {
    width: 20px;
    color: white;
    display: block;
    transform: scale(1.5);
  }
  a {
    margin-left: 16px;
    color: white;
    font-size: 25px;
    font-weight: normal;
    text-decoration: none;
    cursor: pointer;
    transition: opacity ease 1s;
    opacity: 0;
  }
  a:hover {
    color: grey;
  }
`;
