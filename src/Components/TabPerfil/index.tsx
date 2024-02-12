import { useState } from "react";
import {
  TabButton,
  TabContainer,
  TabTextContainer,
  Formacao,
  Sinopse,
  BemVindo,
} from "./styles";

const TabPerfil = () => {
  const [text, setText] = useState("BemVindo");

  return (
    <TabContainer>
      <TabButton>
        <a
          href="#"
          onClick={() => setText("sinopse")}
          className={text === "sinopse" ? "on_focus" : ""}
        >
          Sinopse
        </a>
        <a
          href="#"
          onClick={() => setText("formacao")}
          className={text === "formacao" ? "on_focus" : ""}
        >
          Formação
        </a>
        {/* <a
          href="#"
          onClick={() => setText("ambicoes")}
          className={text === "ambicoes" ? "on_focus" : ""}
        >
          Ambições
        </a> */}
      </TabButton>
      <TabTextContainer className="container">
        {text === "BemVindo" && (
          <BemVindo>
            <span>Bem vindo ao meu portifólio</span>
            <p>Selecione nos botões acima o que você quer ver sobre mim</p>
          </BemVindo>
        )}
        {text === "sinopse" && (
          <Sinopse>
            <p>
              Sou apaixonado por programação e busco sempre estar inteirado a
              respeito de novas tecnologias e formas de aumentar minha
              eficiência no trabalho. Visando isso busco experiência e novos
              conhecimentos, além de botar em prática os que já tenho na área da
              programação.
            </p>
            <br />
            <p>
              Acredito que resolver problemas de forma eficiente e
              perfeccionista é o melhor meio para alcançar os melhores
              resultados.
            </p>
          </Sinopse>
        )}
        {text === "formacao" && (
          <Formacao>
            <p>Colégio Adventista</p>
            <span>Ensino médio</span>
            <p>Ebac: escola britanica de artes</p>
            <span>Full stack</span>
            <p>Unicesumar</p>
            <span>Engenharia de software</span>
          </Formacao>
        )}
        {/* {text === "ambicoes" && (
          <Ambicoes>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus inventore repellat explicabo voluptatem omnis, suscipit
              magnam, cum eaque a hic enim corporis dolorem possimus ea itaque
              molestiae, quaerat natus non!
            </p>
          </Ambicoes>
        )} */}
      </TabTextContainer>
    </TabContainer>
  );
};

export default TabPerfil;
