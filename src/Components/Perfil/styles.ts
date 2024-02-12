import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerPerfil = styled.div`
  transition: all ease-in-out 1s;
  padding: 20px 25px;
  z-index: 5;
  color: white;
  &.is_on {
    opacity: 1;
    display: block;
  }
  .container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .sinopseContainer {
    text-align: center;
    margin-left: 25px;
    height: 100%;
    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 40px;
    }
    h1 {
      font-weight: 600;
      font-size: 50px;
    }
    h3 {
      text-align: center;
      font-weight: 200;
      font-size: 40px;
    }
  }
`;

export const FotoPerfil = styled(motion.img)`
  max-width: 350px;
  max-height: 350px;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`;
