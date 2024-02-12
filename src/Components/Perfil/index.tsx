import { useSelector } from "react-redux";
import { ContainerPerfil, FotoPerfil } from "./styles";
import { RootReducer } from "../../store";

import fotoPerfil from "../../assets/imagensPerfil/Imagem 07-02-2023 às 11.12.jpg";
import TabPerfil from "../TabPerfil";

const PerfilComponent = () => {
  // const { toPortifolio } = useSelector(
  //   (state: RootReducer) => state.transition
  // );
  const { user } = useSelector((state: RootReducer) => state.user);

  return (
    <ContainerPerfil>
      <div className="container">
        <FotoPerfil src={fotoPerfil} alt="Iury Benicio" />
        <div className="sinopseContainer">
          <h3>Olá {user}</h3>
          <br />
          <h2>Meu nome é :</h2>
          <br />
          <h1>Iury Benicio</h1>
        </div>
      </div>
      <TabPerfil />
    </ContainerPerfil>
  );
};

export default PerfilComponent;
