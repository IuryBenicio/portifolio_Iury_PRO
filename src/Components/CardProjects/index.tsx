import { CardContainer } from "./styles";
import { cardModel } from "../../Models/CardsObjects";

const CardProject = ({ description, img, link, title }: cardModel) => {
  function openNewTab(url: string) {
    const win = window.open(url, "_blank");
    win!.focus();
  }

  return (
    <CardContainer>
      <div className="Card">
        <a onClick={() => openNewTab(link)}>
          <img src={img} alt="" />
          <div className="TextCardContainer">
            <span>{title}</span>
            <p>{description}</p>
          </div>
        </a>
      </div>
    </CardContainer>
  );
};

export default CardProject;
