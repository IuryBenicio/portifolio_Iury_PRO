import { AsideMenuContainer, AsideNavItem } from "./styles";
import ContactsIcon from "../../assets/icons/contacts-svgrepo-com.svg";
import HomeIcon from "../../assets/icons/home-1-svgrepo-com.svg";
import ListIcon from "../../assets/icons/list-ul-alt-svgrepo-com.svg";

const AsideMenu = () => {
  return (
    <AsideMenuContainer>
      <nav>
        <ul>
          <AsideNavItem>
            <img src={ContactsIcon} className="iconItem" />
            <a href="#">Sobre</a>
          </AsideNavItem>
          <AsideNavItem>
            <img src={HomeIcon} className="iconItem" />
            <a href="#">Projetos</a>
          </AsideNavItem>
          <AsideNavItem>
            <img src={ListIcon} className="iconItem" />
            <a href="#">Contatos</a>
          </AsideNavItem>
        </ul>
      </nav>
    </AsideMenuContainer>
  );
};

export default AsideMenu;
