import { HomeContainer, ContainerHomeContent } from "./styles";

import PerfilComponent from "../../Components/Perfil";
import AsideMenu from "../../Components/AsideMenu";
import TecnologiasCarousel from "../../Containers/Tecnologias";
import ProjectsSection from "../../Containers/Projects";
import Footer from "../../Components/Footer";
import Contatos from "../../Containers/Contatos";

const Home = () => {
  return (
    <HomeContainer>
      <ContainerHomeContent>
        <>
          <AsideMenu />
          <section>
            <PerfilComponent />
            <hr />
          </section>
          <section>
            <TecnologiasCarousel />
          </section>
          <hr />
          <section className="no-margin">
            <ProjectsSection />
          </section>
          <hr />
          <section className="no-margin">
            <Contatos />
          </section>
          <Footer />
        </>
      </ContainerHomeContent>
    </HomeContainer>
  );
};

export default Home;
