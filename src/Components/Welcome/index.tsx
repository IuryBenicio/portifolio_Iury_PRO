import {
  WelcomeContainer,
  Container,
  ContainerWelcomeHero,
  Welcome,
} from "./styles";
import {
  toPortifolio as inToPortifolio,
  toDisplayNon,
} from "../../store/reducers/transition";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../../store";
import { useState } from "react";
import { setUser } from "../../store/reducers/user";

const WelcomeHero = () => {
  const dispatch = useDispatch();
  const [inputUser, setInputUser] = useState("");

  const { toPortifolio, displayNone } = useSelector(
    (state: RootReducer) => state.transition
  );

  function clicouTran() {
    if (inputUser.length >= 3) {
      console.log(inputUser);
      dispatch(setUser(inputUser));
      dispatch(inToPortifolio());
      setTimeout(() => {
        dispatch(toDisplayNon());
      }, 2000);
    }
  }

  return (
    <Welcome className={displayNone ? "display_off" : ""}>
      <ContainerWelcomeHero className={toPortifolio ? "is_off_all" : ""}>
        <WelcomeContainer>
          <Container>
            <h1>OLÁ, BEM VINDO AO MEU PORTIFÓLIO</h1>
            <label htmlFor="inputNameUsuario">
              Insira seu nome por favor
              <input
                onChange={(nome) => setInputUser(nome.target.value)}
                type="text"
                id="inputNameUsuario"
              />
            </label>
            <a onClick={() => clicouTran()} href="#">
              clique aqui para ir para me conhecer mais
            </a>
          </Container>
        </WelcomeContainer>
      </ContainerWelcomeHero>
    </Welcome>
  );
};

export default WelcomeHero;
