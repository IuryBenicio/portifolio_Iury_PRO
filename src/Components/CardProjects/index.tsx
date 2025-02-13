import { CardContainer } from "./styles";
import { cardModel } from "../../Models/CardsObjects";

const CardProject = ({ description, img, link, title, status }: cardModel) => {
  function openNewTab(url: string) {
    if (status === true) {
      const win = window.open(url, "_blank");
      win!.focus();
    }
    return null; // Hide the link for inactive projects
  }

  return (
    <>
      <CardContainer>
        <div className="Card">
          <a onClick={() => openNewTab(link!)}>
            <img src={img} alt="" />
            <div
              className={status === false ? "em-breve" : "TextCardContainer"}
            >
              <span>{title}</span>
              <p>{description}</p>
              {status === false && (
                <>
                  <span className="em-breve">Em breve</span>
                </>
              )}
            </div>
          </a>
        </div>
      </CardContainer>
    </>
  );
};

export default CardProject;
