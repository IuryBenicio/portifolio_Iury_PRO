import styled from "styled-components";
import { FaInstagramSquare } from "react-icons/fa";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 150px;
  .container {
    padding: 25px 0;
  }
  .copyright-redes {
    display: flex;
    justify-content: center;
    color: white;
    .redessociais {
      img {
        max-width: 50px;
      }
    }
  }
`;

export const InstaLogo = styled(FaInstagramSquare)``;
